import React from 'react';
import SearchForm from './SearchForm.js'

class Projects extends React.Component{
    state = {

    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <>
            {/* Container for project search bar/filter and all projects (cards)*/}
            <SearchForm changeHandler={this.changeHandler}/>
            </>
        )
    }
}

export default Projects