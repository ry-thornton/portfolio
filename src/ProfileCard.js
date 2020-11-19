import React from 'react'

function ProfileCard(props){

    let skills = [
        "ReactJS",
        "HTML",
        "Javascript",
        "CSS",
        "Ruby on Rails",
        "Bulma",
        "REST APIs",
        "Firebase",
        "Object Oriented Programming",
        "Wireframing",
        "always learning more..."
    ]

    // let renderSkills = () => {
    //     skills.map(skill => <span className="tag button">{skill}</span>)
    // }

    return (
        <>
            <div id="profile-card-container">
                <img id="avatar" src="profilepicture.jpg"/>
                <br/>
                <h1 className="title">Ryan Thornton</h1>
                software engineer 🛠,
                front-end developer 💻,
                <a href="https://rythornton.com" target="_blank"> photographer</a> 📷
                <br/>
                <br/>
                <div className="buttons Buttons-group">
                    {skills.map(skill => <span className="tag button">{skill}</span>)}
                </div>
                
                <div className="buttons Button-group">
                    <a href="https://linkedin.com/in/rythornton" target="_blank"><button id="LinkedIn-button" className="button">LinkedIn</button></a>
                    <a href="https://github.com/ry-thornton" target="_blank"><button id="Github-button" className="button">GitHub</button></a>
                </div>
            </div>
        </>
    )

}

export default ProfileCard