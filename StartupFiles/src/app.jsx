import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';

function App() {
  console.log("running this line")
  return (
    <BrowserRouter>
      <div>
      <header>
          <nav>
            <div>
              Simon<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home
                </NavLink>
              </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to=''>
                    Login
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to=''>
                    Leaderboards
                  </NavLink>
                </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  My Stats
                </NavLink>
              </li>
            </menu>
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
