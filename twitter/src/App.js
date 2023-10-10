import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Beranda } from "./pages/beranda";
import { Welcome } from "./pages/welcome";
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./redux/userSlice";
import { Required } from "./components/required";

const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { 
    element: <Required />,
    children: [
      { path: '/beranda', element: <Beranda /> },
    ]
  }
])

function App() {
  const id = localStorage.getItem("id")
  const dispatch = useDispatch()

  const keepLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/users/${id}`)
      dispatch(setData(response.data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    keepLogin()
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
