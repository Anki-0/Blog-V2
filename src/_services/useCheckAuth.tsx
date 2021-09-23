import axiosInstance from '../../axiosConfig';
import { useEffect } from 'react';
import { useIsAuthenticatedValue } from '../Context/isAuthenticatedContext';
import { Iauthor, IcheckAuth } from '../../interface/api';

const useCheckAuth = (): IcheckAuth => {
  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticatedValue();

  useEffect(() => {
    const validateCookie = async (): Promise<void> => {
      try {
        const res = await axiosInstance.get(`/users/validateUser`);
        const data: IcheckAuth = res.data;
        // console.log('res : =====> ', data);
        if (data?.status === 'success' && data?.isAuthenticated === true) {
          setIsAuthenticated(data);
        }
      } catch (error) {
        // const err = await error.response; // this is the main part. Use the response property from the error object

        setIsAuthenticated({ isAuthenticated: false, status: 'fail', user: {} as Iauthor });
        // console.clear();
        // console.log('VALIDATE LOGIN ERROR => ', err);
        // return err;
      }
    };

    validateCookie();
  }, []);
  // console.log('ISLOGIN=>', isAuthenticated?.isAuthenticated);

  return isAuthenticated;
};

export default useCheckAuth;
