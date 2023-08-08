import logo from './logo.svg';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
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
        { path: 'personal-blog', element: <Blog /> },
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
