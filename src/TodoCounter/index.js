import React from 'react';  
import { TodoContext } from '../TodoContext';
import './todoCounter.css'

function TodoCounter () {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
    return(
      <h1 className='TodoCounter'>
      {totalTodos === 0 ? (
        "Crea un nuevo Todo con +"
      ):(
        completedTodos === totalTodos ? (
              "Todos los Todos están listos"
        ):( 
          <>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDo's
          </>
        )
      )
      }
      </h1>
    );
  }

  export {TodoCounter};