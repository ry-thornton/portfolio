import React from 'react'

function NavBar(props){
    
    let clickHandler = (event) => {
        console.log(event.target)
        props.changeDisplay(event.target.name)
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-start">
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a name="home" onClick={clickHandler}>Home</a>
                        </div>
                        <div className="navbar-item">
                            <a name="about" onClick={clickHandler}>About</a>
                        </div>
                        <div className="navbar-item">
                            <a name="projects" onClick={clickHandler}>Projects</a> 
                        </div>
                        <div className="navbar-item">
                            <a name="resume" onClick={clickHandler}>Resume</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )

}

export default NavBar