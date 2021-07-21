import { useEffect } from 'react';
import axiosInstance from '../../axiosConfig';
import { useIsAuthenticatedValue } from '../Context/isAuthenticatedContext';
import { Iauthor, IcheckAuth } from '../../interface/api';

const useCheckAuth = (): IcheckAuth => {
  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticatedValue();

  useEffect(() => {
    console.log('base URL =>', process.env.NODE_ENV.trim(), process.env.BASE_URL);
    console.log('Pro URL =>', process.env.NODE_ENV.trim(), process.env.PRODUCTION_URL);

    const validateCookie = async () => {
      try {
        const res = await axiosInstance.post(`/users/validateUser`, 'Validating USER');
        const data: IcheckAuth = res.data;
        console.log('res : =====> ', data);
        if (data?.status === 'success' && data?.isAuthenticated === true) {
          setIsAuthenticated(data);
        }
      } catch (error) {
        console.log(error.response.data); // this is the main part. Use the response property from the error object

        setIsAuthenticated({ isAuthenticated: false, status: 'fail', user: {} as Iauthor });
        return error.response;
      }
    };

    validateCookie();
  }, []);
  console.log('ISLOGIN=>', isAuthenticated?.isAuthenticated);

  return isAuthenticated;
};

export default useCheckAuth;
