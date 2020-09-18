import React from 'react'

function ProjectContainer(props){

    let renderDescription = () => {
        switch(props.project){
            case "CoffeeHood":
                return (
                    <p>
                        About coffeehood
                    </p>
                );
            case "NBApp":
                return (
                    <p>
                        About nbapp
                    </p>
                );
            case "Trivia-CLI":
                return (
                    <p>
                        About trivia
                    </p>
                )
        }
    }
    return (
            <div className="content container">
                <h1>{props.project}</h1>
                {renderDescription()}
                <video width="100%" controls>
                    <source src={`${props.project}.mov`}></source>
                </video>
                <br/>
                {props.project}
            </div>
    )
}

export default ProjectContainer