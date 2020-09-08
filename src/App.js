import React from 'react';
import logo from './logo.svg';
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
              <div className="box">
                <img id="avatar" src="profilepicture.jpg"/>
                <br/>
                <h1 className="title">Ryan Thornton</h1>
                software engineer 🛠,
                front-end developer 💻,
                <a href="https://rythornton.com" target="_blank"> photographer</a> 📷
                <br/>
                <br/>
                <div className="buttons">
                  <span className="tag button">ReactJS</span>
                  <span className="tag button">HTML</span>
                  <span className="tag button">Javascript</span>
                  <span className="tag button">CSS</span>
                  <span className="tag button">Ruby on Rails</span>
                  <span className="tag button">Bulma</span>
                  <span className="tag button">REST APIs</span>
                  <span className="tag button">Firebase</span>
                  <span className="tag button">Object Oriented Programming</span>
                  <span className="tag button">Wireframing</span>
                </div>
              </div>
            </div>
            <div className="column">

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
