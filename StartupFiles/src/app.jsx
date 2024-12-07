import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Chat } from './chat/chat';
import { MyStats } from './my_stats/my_stats';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [activeTab, setActiveTab] = useState('home');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='App-container'>
      <header>
          <nav>
            <div>
              <h1>Fitness Tracker Startup</h1>
            </div>
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    className="nav-link"
                    id={`${activeTab === 'home' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('home')}
                  >
                    <b>Home</b>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    id={`${activeTab === 'login' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('login')}
                  >
                    <b>Login</b>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/chat"
                    className="nav-link"
                    id={`${activeTab === 'chat' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('chat')}
                  >
                    <b>Chat</b>
                  </NavLink>               
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/my_stats"
                    className="nav-link"
                    id={`${activeTab === 'my_stats' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('my_stats')}
                  >
                    <b>My Stats</b>
                  </NavLink>
                </li>
            </ul>
            <label>
              {userName ? `Welcome, ${userName}!` : ""}
            </label>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                  setActiveTab('login')
                }}
              />} />
          <Route path='/chat' element={<Chat authState={authState}/>} />
          <Route path='/my_stats' element={<MyStats authState={authState}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer>
            <span>Peter Sloan</span>
            <br />
            <a href="https://github.com/Psloan4/startup.git">My Repository</a>
        </footer>
      </div>
    </BrowserRouter>


  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
