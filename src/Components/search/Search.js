import React from 'react'
import './Search.css';

const Search = ({searchedValue, handlySearching}) => {
    const handleSubmit=(e)=> {
        e.prevantDefault();
    } ;
    return (
        <div className="imageSearch">
            <form className="imageSearch__form" onSubmit={handleSubmit}>
                <input type="text" 
                value= {searchedValue} 
                onChange={handlySearching}
                placeholder= "search your appropiate image..."/>
            </form>
        </div>
    );
};

export default Search
