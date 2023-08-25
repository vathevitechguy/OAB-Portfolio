import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../components/organisms';

const Error = ({ general, error }) => {
  const errorMessage = error ? `${error}` : 'Page Not Found!';

  return (
    <>
      {general && <Navbar />}
      <div
        style={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h6>{errorMessage}</h6>

        <p style={{ fontSize: '20px' }}>
          {error ? (
            'Try reloading the page'
          ) : (
            <>
              Go to{' '}
              <Link style={{ fontSize: 'inherit', color: '#000' }} to={'/'}>
                Home Page
              </Link>
            </>
          )}
        </p>
      </div>

      {general && <Footer />}
    </>
  );
};

export default Error;
