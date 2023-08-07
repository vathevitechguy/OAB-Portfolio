import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components/organisms';

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
