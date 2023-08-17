import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components/organisms';

const Root = () => {
  // const [modalState, setModalState] = useState(false);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* {modalState && <Modal type="contact" />} */}
    </>
  );
};

export default Root;
