import React from 'react'

function SearchForm(props){
    
    return (
        <>
            <form id="search-form">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={props.changeHandler} name="keyword" type="text" placeholder="Enter keyword..."/>
                    </div>
                    <div className="control">
                        <button className="button" type="submit">
                            Search
                        </button>

                    </div>
                </div>
            </form>
        </>
        
    )
}

export default SearchForm