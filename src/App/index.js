/* import logo from './platzi.webp'; */
import { AppUI } from './AppUI';
import React from 'react';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
