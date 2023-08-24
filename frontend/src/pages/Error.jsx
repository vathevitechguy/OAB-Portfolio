import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../components/organisms';

const Error = (props) => {
  // const error = useRouteError();
  return (
    <>
      {props.general && <Navbar />}
      <div
        style={{
          height: '80vh',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h5>Page Not Found!</h5>

        <p style={{ fontSize: '20px', marginTop: '10px' }}>
          Go to {''}
          <Link style={{ fontSize: 'inherit', color: '#000' }} to={'/'}>
            Home Page
          </Link>
        </p>
      </div>

      {props.general && <Footer />}
    </>
  );
};

export default Error;
