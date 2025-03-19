import React from "react";  

/* const defaultTodos = [
  { text: 'Iniciar el curso', completed: true},
  { text: 'Crear el código', completed: false},
  { text: 'Probar la funcionalidad', completed: false},
  { text: 'Aprender de la corrección de errores', completed: true},
  { text: 'Ejecutar los resultados', completed: true}

localStorage.removeItem("TODOS_V1");
localStorage("TODOS_V1", JSON.stringify({defaultTodos})) */

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem(itemName);
      
      let parsedItem;

      if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse
          (localStorageItem) || [];
          setItem(parsedItem);
      }
      

      setLoading(false);
    } catch(error) {
      setLoading(false);
      setError(error);
    }
  }, 2000,[]); 
  });
    
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
    return {
      item,
      saveItem, 
      loading, 
      error,
    };
  }

  export { useLocalStorage };