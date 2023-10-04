import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Register } from "./pages/register";
import { UserList } from "./pages/users";
import axios from 'axios'
import { setData } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch()
  const [reload, setReload] = useState(false)

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:2000/users")
      dispatch(setData(data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, [reload])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register reload={reload} setReload={setReload} />} />
        <Route path="/users" element={<UserList reload={reload} setReload={setReload} />} />
      </Routes>
    </div>
  );
}

export default App;
