import React from 'react';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  
  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div>
        <h2>Login or Create an Account</h2>
        <form method="get" action="play.html">
            <div>
              <span>Email&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter email" />
            </div>
            <div>
              <span>Password&nbsp;</span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            </div>
            <br />
            <div className="button-divider">
              <button type="submit" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
              <button type="submit" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
            </div>
          </form>
      </div>
    </>
  );
}
