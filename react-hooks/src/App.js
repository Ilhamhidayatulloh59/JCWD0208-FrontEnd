import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/chat";
import ChatDetail from "./components/chatDetail";
import Count from "./components/count";
import StudentsList from "./components/students";
import StudentsDetail from "./components/studentsDetail";

function App() {
  const [message, setMessage] = useState("")
  return (
    <div>
      {/* <h1>INI HOME</h1> */}
      {/* <Count /> */}
      <Routes>
        <Route path="/" element={<Chat setMessage={setMessage} message={message} />} />
        <Route path="/list" element={<ChatDetail message={message} />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/students/:nama" element={<StudentsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
