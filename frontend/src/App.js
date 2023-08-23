import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.scss';

import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';

import { Modal } from './components/organisms';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [modalState, setModalState] = useState(false);

  const onOpenModal = () => {
    setModalState(true);
  };

  const onCloseModal = () => {
    setModalState(false);
  };

  const mainRoute = (
    <Route
      path="/"
      element={<Root openModal={onOpenModal} />}
      errorElement={<Error />}
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="personal-blog" element={<Blog />} />
      <Route path="/personal-blog/:postID" element={<Post />} />
    </Route>
  );

  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes>{mainRoute}</Routes>
        </Router>
        {modalState && (
          <Modal type="contact" isOpen={modalState} onClose={onCloseModal} />
        )}
      </ApolloProvider>
    </div>
  );
};

export default App;
