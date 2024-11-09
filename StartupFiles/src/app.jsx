import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
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
                  <NavLink className='nav-link' to='' id="active-tab-id">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className='nav-link' to='' id="inactive-tab-id">
                    Login
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className='nav-link' to='' id="inactive-tab-id">
                    Leaderboard
                  </NavLink>               
                </li>
                <li class="nav-item">
                  <NavLink className='nav-link' to='' id="inactive-tab-id">
                    My Stats
                  </NavLink>
                </li>
            </ul>
            <label>Your username (displays when logged in)</label>
          </nav>
        </header>

        <Routes>
        </Routes>
      </div>


    </BrowserRouter>


  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
