import { Navigate, Route, Routes } from "react-router-dom";
import { Beranda } from "./pages/beranda";
import { Welcome } from "./pages/welcome";
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./redux/userSlice";

function App() {
  const id = localStorage.getItem("id")
  const dispatch = useDispatch()
  // console.log(id)

  const keepLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/users/${id}`)
      // console.log(response.data)
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
      <Routes>
        <Route path="/" element={ id ? <Navigate to="/beranda" /> : <Welcome />} />
        <Route path="/beranda" element={ id ? <Beranda /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
