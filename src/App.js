import logo from './logo.svg';
import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {
  let { postID } = useParams();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
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
          // children: [{ path: ':postID', element: <Post /> }],
        },
        {
          path: '/personal-blog/:postID',
          element: (
            <Post
              title="How is AI Impacting Human Intelligence? My View."
              date="March 16, 1998"
            />
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
