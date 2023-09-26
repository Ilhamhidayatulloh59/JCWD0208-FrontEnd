import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./chat.css";

function Chat({ message, setMessage }) {
  const textRef = useRef();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!textRef.current.value) {
      alert("Input tidak boleh kosong");
    } else {
      setMessage(textRef.current.value);
      navigate("/list");
      //   console.log(document.getElementById("text").value)
      //   console.log(textRef.current.value);
    }
  };
  return (
    <div className="container">
      <h1>ChitChat - Express Your Feeling</h1>
      <div className="input">
        <textarea className="textArea" ref={textRef} id="text"></textarea>
        <button onClick={onSubmit} className="submit">
          submit
        </button>
      </div>
    </div>
  );
}

export default Chat;
