import React from 'react';
import logo from './logo.svg';
import ProfileCard from './ProfileCard.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            Ryan Thornton
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a>About</a>
            </div>
            <div className="navbar-item">
              <a>Projects</a> 
            </div>
            <div className="navbar-item">
               <a>Resume</a>
            </div>
          </div>
        </div>
      </nav>
        <div className="container">
          <div className="columns">
            <div className="column">
              <br/>
              <ProfileCard/>
            </div>
            <div className="column">

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
