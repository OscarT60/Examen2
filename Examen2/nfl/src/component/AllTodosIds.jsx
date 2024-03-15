// AllTodosIds.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllTodosIds.css'; // Importamos el archivo de estilos CSS

const AllTodosIds = () => {
  const [todosIds, setTodosIds] = useState([]);

  useEffect(() => {
    const fetchTodosIds = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const todos = response.data;
        const todosIds = todos.map(todo => todo.id);
        setTodosIds(todosIds);
      } catch (error) {
        console.error('Error fetching todos IDs:', error);
      }
    };

    fetchTodosIds();
  }, []);

  return (
    <div>
      <h2>Lista de todos los pendientes (solo IDs)</h2>
      <table className="todos-table">
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {todosIds.map(todoId => (
            <tr key={todoId}>
              <td>{todoId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTodosIds;
