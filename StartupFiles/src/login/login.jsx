import React from 'react';
import '../app.css';

export function Login() {
    return (
      <main>
        <h2>Login or Create an Account</h2>
        <form method="get" action="play.html">
            <div>
              <span>Email&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <input type="text" placeholder="Enter email" />
            </div>
            <div>
              <span>Password&nbsp;</span>
              <input type="password" placeholder="Enter password" />
            </div>
            <br />
            <div className="button-divider">
              <button type="submit">Login</button>
              <button type="submit">Create</button>
            </div>
            
        </form>
      </main>
    );
}