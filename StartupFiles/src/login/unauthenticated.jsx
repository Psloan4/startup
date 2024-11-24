import React from 'react';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState("");
  
  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    console.log("attempting to create user")
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      console.log("got positive response")
      localStorage.setItem('userName', userName);
      localStorage.setItem('token', response.token);
      setDisplayError(``);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
    // const response = await fetch(endpoint, {
    //   method: 'post',
    //   body: JSON.stringify({ email: userName, password: password }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => {
    //     console.log("got response from login or create")
    //     if (response.status === 200) {
    //       console.log(response)
    //       localStorage.setItem('token', response.token);
    //       localStorage.setItem('userName', userName);
    //       props.onLogin(userName);
    //     } else {
    //       const body = response.json();
    //       setDisplayError(`⚠ Error: ${body.msg}`);
    //     }
    // })
  }

  return (
    <>
      <div>
        <h2>Login or Create an Account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the form's default submit action
          }}
        >
          <div>
            <span>Email&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <span>Password&nbsp;</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <br />
          <div className="button-divider">
            <button
              type="button" // Prevent default form behavior
              onClick={() => loginUser()}
              disabled={!userName || !password}
            >
              Login
            </button>
            <button
              type="button" // Prevent default form behavior
              onClick={() => createUser()}
              disabled={!userName || !password}
            >
              Create
            </button>
          </div>
          <br />
          <label>{displayError}</label>
        </form>
      </div>
    </>
  );
}

{/* <div>
        <h2>Login or Create an Account</h2>
        <form method="get" action={loginUser}>
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
            <br />
            <label>{displayError}</label>
          </form>
      </div> */}
