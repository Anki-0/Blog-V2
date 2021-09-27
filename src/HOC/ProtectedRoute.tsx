import React from 'react';
import useCheckAuth from '@/src/_services/useCheckAuth';
import { useEffect } from 'react';

type t = { isAuthenticated: boolean };

const ProtectedRoute = <P extends t>(WrapperComponent: React.ComponentType<P>) => {
  const Component = (props: P) => {
    const { isAuthenticated } = useCheckAuth();
    useEffect(() => {
      console.log('OUT SIDE IF STATEMENT => ', isAuthenticated);
      if (isAuthenticated !== undefined && !isAuthenticated) {
        // Router.push('/login');
        console.log('REDIRECTING ...', !isAuthenticated);
        window.history.back();
        window.location.href = '/login';
      }
    }, [isAuthenticated]);
    return isAuthenticated ? <WrapperComponent {...props} /> : <div className=''>UNAUTHORIZED</div>;
  };

  return Component;
};

export default ProtectedRoute;
