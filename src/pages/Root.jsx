import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components/organisms';

const Root = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer openModal={props.openModal} />
    </>
  );
};

export default Root;
