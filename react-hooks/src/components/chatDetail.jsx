import "./chat.css";

function ChatDetail({ message }) {
  return (
    <div className="container">
      <h1>ChitChat - Express Your Feeling</h1>
      <div className="detail">
        <div className="avatar">I</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default ChatDetail;
