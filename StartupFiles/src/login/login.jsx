import React from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import '../app.css';

export function Login({ userName, authState, onAuthChange }) {
    return (
      <main>
          {authState === AuthState.Authenticated && (
            <Authenticated
              userName={userName}
              onLogout={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Unauthenticated);
              }}
            />
          )}
          {authState === AuthState.Unauthenticated && (
            <Unauthenticated
              userName={userName}
              onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
              }}
            />
          )}
      </main>
    );
}