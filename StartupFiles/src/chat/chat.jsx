import React from 'react';
import '../app.css';
import { AuthState } from '../login/authState';
import { ChatNotifier } from './chatNotifier';

export function Chat({authState}) {

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

  

  return (
    <main>
      <h2>Chat</h2>
      <span>{authState === AuthState.Authenticated ? "Live chat with other users" : "Log in to chat with other users"}</span>
    </main>
  );
}