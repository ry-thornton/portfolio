import React from 'react';
import logo from './logo.svg';
import ProfileCard from './ProfileCard.js';
import Projects from './Projects.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
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
          <div>
            <br/>
            <ProfileCard/>
          </div>
          <div className="pt-2">
            <Projects/>
          </div>
          <br/>
          <br/>
        </div>
        {/* <footer id="footer" className="footer">
          Website by <a href="https://linkedin.com/in/rythornton" target="_blank">Ryan Thornton</a>

        </footer> */}
    </div>
  );
}

export default App;
