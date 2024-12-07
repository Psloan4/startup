import React from 'react';
import '../app.css';
import { AuthState } from '../login/authState';

export function Chat({authState}) {
    return (
      <main>
        <h2>Chat</h2>
        <span>{authState === AuthState.Authenticated ? "Live chat with other users" : "Log in to chat with other users"}</span>
      </main>
    );
}