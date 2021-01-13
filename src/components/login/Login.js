import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginRegister from './LoginRegister';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="register" element={<LoginRegister />} />
        <Route path="lost" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
