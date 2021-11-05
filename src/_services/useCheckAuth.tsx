import axiosInstance from '@/axiosConfig';
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
        if (data?.status === 'success' && data?.isAuthenticated === true) {
          setIsAuthenticated(data);
        }
      } catch (error) {
        setIsAuthenticated({ isAuthenticated: false, status: 'fail', user: {} as Iauthor });
        // console.clear();
      }
    };

    validateCookie();
  }, []);

  return isAuthenticated;
};

export default useCheckAuth;
