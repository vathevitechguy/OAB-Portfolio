import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.scss';

import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';

import ContactModal from './components/organisms/ContactModal/ContactModal';
import Notification from './components/molecule/Notification/Notification';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [modalState, setModalState] = useState(false);
  const [notification, setNotification] = useState(false);

  const onOpenModal = () => {
    setModalState(true);
  };

  const onCloseModal = () => {
    setModalState(false);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root openModal={onOpenModal} />,
      errorElement: <Error general={true} />,
      // loader: ro,
      children: [
        {
          index: true,
          element: <Home openModal={onOpenModal} />,
        },
        { path: 'about', element: <About /> },
        {
          path: 'personal-blog',
          element: <Blog />,
        },
        {
          path: '/personal-blog/:postID',
          element: <Post />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
        {notification && (
          <Notification
            message={notification.message}
            onClose={() => setNotification(false)}
          />
        )}
        {modalState && (
          <ContactModal
            modalState={modalState}
            onCloseModal={onCloseModal}
            notification={({ status, message }) =>
              setNotification({ status: status, message: message })
            }
          />
        )}
      </ApolloProvider>
    </div>
  );
};

export default App;
