import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NavbarPage } from "./pages/navbarPage";
import { HomePage } from "./pages/homePage";
import { DetailPage } from './pages/detailPage';
import { ErrorPage } from './pages/errorPage';

const router = createBrowserRouter([
  { 
    element: <NavbarPage />, 
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/detail', element: <DetailPage />}
    ]
  },
  { path: "*", element: <ErrorPage />}
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
