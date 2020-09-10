import React from 'react';
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
        this.setState({projects: ["Project 1", "Project 2", "Project 3"]})
    }

    renderProjects = () => {
        //based on keyword filter projects in state that include the
        //keyword and render them to the screen in Project Cards
        let filteredProjects = this.state.projects.filter(project => project.includes(this.state.keyword))
        return filteredProjects.map(project => <div>{project}</div>)
    }

    render(){
        return (
            <>
            {/* Container for project search bar/filter and all projects (cards)*/}
            <SearchForm changeHandler={this.changeHandler} keyword={this.state.keyword}/>
            <div>
                {/* Based on keyword only show the projects that the user is searching for */}
                {this.renderProjects()}
                
            </div>
            </>
        )
    }
}

export default Projects