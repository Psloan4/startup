import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <p>Testing</p>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
