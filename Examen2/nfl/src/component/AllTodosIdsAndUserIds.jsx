// AllTodosIdsAndUserIds.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllTodosIdsAndUserIds.css'; // Importar el archivo CSS para estilos personalizados

const AllTodosIdsAndUserIds = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Lista de todos los pendientes (IDs y User IDs)</h2>
      <table className="todos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTodosIdsAndUserIds;
