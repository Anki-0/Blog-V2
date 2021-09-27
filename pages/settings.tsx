import ProtectedRoute from '@/src/HOC/ProtectedRoute';
import React from 'react';

const Settings = (): JSX.Element => {
  return (
    <div>
      SETTINGS
      {/* <ProtectedRoute /> */}
    </div>
  );
};

export default ProtectedRoute(Settings);
// export default Settings;
