import React from 'react';
import '../app.css';
import { AuthState } from '../login/authState';
import { ChatNotifier } from './chatNotifier';
import { useState } from 'react';

export function Chat({authState}) {
  const [message, setMessage] = useState('');
  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    ChatNotifier.addHandler(handleChatEvent);
    return () => {
      ChatNotifier.removeHandler(handleChatEvent);
    };
  });

  function handleChatEvent(event) {
    setEvent([...events, event]);
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    alert(`Message sent: ${message}`);
    // Additional logic for sending the message can be added here
  };

  return (
    <main>
      <h2>Chat</h2>
      <span>{authState === AuthState.Authenticated ? "Live chat with other users" : "Log in to chat with other users"}</span>
      <div id='chat-box'>
        <div key={0}>
          <span>testing person:</span>
          test message
        </div>
        <div key={1}>
          <span>testing person2:</span>
          test message2
        </div>
      </div>
      <br />
      <div class='button-divider'>
        <input
          type="text"
          placeholder="Type your message here..."
          style={{ width: '400px' }}
          value={message} 
          onChange={handleChange}
        />
        <button onClick={sendMessage}>Send</button>  
      </div>
    </main>
  );
}