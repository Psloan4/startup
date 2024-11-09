import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { LeaderBoard } from './leaderboard/leaderboard';
import { MyStats } from './my_stats/my_stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  console.log("running this line")
  return (
    <BrowserRouter>
      <div>
      <header>
          <nav>
            <div>
              <h1>Fitness Tracker Startup</h1>
            </div>
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                  <NavLink className='nav-link' to='home' id="active-tab-id">
                    <b>Home</b>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className='nav-link' to='login' id="inactive-tab-id">
                    <b>Login</b>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className='nav-link' to='leaderboard' id="inactive-tab-id">
                    <b>LeaderBoard</b>
                  </NavLink>               
                </li>
                <li class="nav-item">
                  <NavLink className='nav-link' to='my_stats' id="inactive-tab-id">
                    <b>My Stats</b>
                  </NavLink>
                </li>
            </ul>
            <label>Your username (displays when logged in)</label>
          </nav>
        </header>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/my_stats' element={<MyStats />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>


    </BrowserRouter>


  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
