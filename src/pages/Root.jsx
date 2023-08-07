import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      Root
      <Outlet />
    </div>
  );
};

export default Root;
