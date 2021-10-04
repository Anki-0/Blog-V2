import React from 'react';
import useCheckAuth from '@/src/_services/useCheckAuth';
import { useEffect } from 'react';
import { UserInterface } from '@/interface/api';

type t = { isAuthenticated: boolean; data: { User: UserInterface } };

const ProtectedRoute = <P extends t>(WrapperComponent: React.ComponentType<P>) => {
  const Component = (props: P) => {
    const { isAuthenticated } = useCheckAuth();

    useEffect(() => {
      if (isAuthenticated !== undefined && !isAuthenticated) {
        // Router.push('/login');
        window.history.back();
        window.location.href = '/login';
      }
    }, [isAuthenticated]);
    return <WrapperComponent {...props} />;
    // return isAuthenticated ? <WrapperComponent {...props} /> : <div className=''>UNAUTHORIZED</div>;
  };

  return Component;
};

export default ProtectedRoute;
