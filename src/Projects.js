import React from 'react';
import ProjectContainer from './ProjectContainer.js'
import SearchForm from './SearchForm.js'

class Projects extends React.Component{
    state = {
        keyword: "",
        projects: []

    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount(){
        this.setState({projects: ["GOffee", "CoffeeHood", "NBApp"]})
    }

    renderProjects = () => {
        //based on keyword filter projects in state that include the
        //keyword and render them to the screen in Project Cards
        let filteredProjects = this.state.projects.filter(project => project.includes(this.state.keyword))
        return filteredProjects.map(project => <ProjectContainer project={project}/>)
    }

    render(){
        return (
            <>
            {/* Container for project search bar/filter and all projects (cards)*/}
            {/* <SearchForm changeHandler={this.changeHandler} keyword={this.state.keyword}/> */}
            <div id="project-container">
                {/* Based on keyword only show the projects that the user is searching for */}
                {this.renderProjects()}
                
            </div>
            </>
        )
    }
}

export default Projects