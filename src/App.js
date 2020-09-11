import React from 'react';
import logo from './logo.svg';
import ProfileCard from './ProfileCard.js';
import NavBar from './NavBar.js';
import Projects from './Projects.js';
import './App.css';

class App extends React.Component{

  state = {
    display: ""
  }

  renderDisplay = () => {
    switch(this.state.display){
      case "projects":
        return ( <Projects/> );
      case "resume":
        return (<div>Resume</div>);
      case "about":
        return (<div>About</div>);
      default:
        return <ProfileCard/>
    }
  }

  changeDisplay = (display) => {
    this.setState({display: display})
  }

  render(){
    return (
        <div className="App">
          <NavBar changeDisplay={this.changeDisplay}/>
            <div className="container">
                {this.renderDisplay()}
            </div>
            {/* <footer id="footer" className="footer">
              Website by <a href="https://linkedin.com/in/rythornton" target="_blank">Ryan Thornton</a>

            </footer> */}
        </div>
      )
    }
}

export default App;
