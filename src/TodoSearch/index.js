import React from "react";  
import { TodoContext } from "../TodoContext";
import "./todoSearch.css"

function TodoSearch() {
    const {
    searchValue,
    setSearchValue,
} = React.useContext(TodoContext);
    return (
        <input placeholder="Buscar ToDo..." 
        className="TodoSearch"
        value={searchValue}
        onChange={(event)=> {
            setSearchValue(event.target.value);
        }}
        />
    );
}

export { TodoSearch };