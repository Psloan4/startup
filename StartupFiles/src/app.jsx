import React from 'react';
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
