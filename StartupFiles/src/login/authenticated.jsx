import React from 'react';

export function Authenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);

  async function logoutUser() {
    localStorage.removeItem('userName');
    props.onLogout();
  }


  return (
    <>
      <div>
        <h2>Thanks for using our fitness tracker</h2>
        <button type="submit" onClick={() => logoutUser()}>Logout</button>
      </div>
    </>
  );
}


// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// export function Authenticated(props) {
//   const [userName, setUserName] = React.useState(props.userName);
//   const navigate = useNavigate();

//   function logout() {
//     console.log("logging out")
//     localStorage.removeItem('userName');
//     props.onLogout();
//   }

//   return (
//     <div>
//       <h2>Logged in as {userName}</h2>
//       <br/>
//       <button type="submit" onClick={() => logout()}>Logout</button>
//     </div>
//   );
// }
