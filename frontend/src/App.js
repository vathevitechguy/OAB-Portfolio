import logo from './logo.svg';
import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';
import { DUMMY_POST } from './hooks/DummyPost';
import { Modal } from './components/organisms';
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  let { postID } = useParams();
  const [modalState, setModalState] = useState(false);

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
      errorElement: <Error />,
      // loader: ro,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: 'about', element: <About /> },
        {
          path: 'personal-blog',
          element: <Blog />,
        },
        {
          path: '/personal-blog/:postID',
          element: (
            <Post
              title="How is AI Impacting Human Intelligence? My View."
              date="March 16, 1998"
              content={DUMMY_POST}
            />
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        {modalState && (
          <Modal type="contact" isOpen={modalState} onClose={onCloseModal} />
        )}
      </ApolloProvider>
    </div>
  );
}

export default App;
