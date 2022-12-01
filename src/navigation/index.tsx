import React from 'react';
import AuthProvider from 'src/providers/auth-provider';
import Routes from './routes';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
