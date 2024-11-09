import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { LeaderBoard } from './leaderboard/leaderboard';
import { MyStats } from './my_stats/my_stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <BrowserRouter>
      <div className='App-container'>
      <header>
          <nav>
            <div>
              <h1>Fitness Tracker Startup</h1>
            </div>
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                  <NavLink
                    to="/home"
                    className="nav-link"
                    id={`${activeTab === 'home' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('home')}
                  >
                    <b>Home</b>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    id={`${activeTab === 'login' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('login')}
                  >
                    <b>Login</b>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/leaderboard"
                    className="nav-link"
                    id={`${activeTab === 'leaderboard' ? 'active-tab-id' : 'inactive-tab-id'}`}
                    onClick={() => setActiveTab('leaderboard')}
                  >
                    <b>LeaderBoard</b>
                  </NavLink>               
                </li>
                <li class="nav-item">
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
            <label>Your username (displays when logged in)</label>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/my_stats' element={<MyStats />} />
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
