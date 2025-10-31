
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLogin from "./pages/UserLogin"
import UserResister from "./pages/UserResister"
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/reg", element: <UserResister /> },
      { path: "/login", element: <UserLogin /> }
    ]
  }

])
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
