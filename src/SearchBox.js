import React from "react";



const SearchBox = ({searchfield, searchChange})=>{
    return (
        <input 
        type='search'
        className="pa3 ba b--green bg-lightest-blue " placeholder='search robot friend'
        onChange={searchChange}
        />
 
        );
}


export default SearchBox;