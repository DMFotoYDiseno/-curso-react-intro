import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';  
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal'; 
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {
const {
  loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext);

  return (
    /** <> = <React.Fragment> */
    <>  
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {loading && (
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        )}
        {error && <TodosError/>}
        {!!error && !!loading && searchedTodos.length === 0 && <EmptyTodos/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>

      {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )}
    </>
  );
}

export { AppUI };