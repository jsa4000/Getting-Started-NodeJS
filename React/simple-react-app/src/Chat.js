import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
    //console.log("OnChange text: " + e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setMessages((state) => [...state, text]);
      setText('');
      //console.log("Post Message: " + text);
    }
  };

  return (
    <div className="Chat">
      <form>
        <input type="text" name="text" value={text} onChange={onChange}></input>
        <button onClick={onClick}>Post</button>
      </form>
      <ul className="ChatRoom">
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
