// UnresolvedTodosWithUserIds.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UnresolvedTodosWithUserIds.css'; // Importar el archivo CSS para estilos personalizados

const UnresolvedTodosWithUserIds = () => {
  const [unresolvedTodos, setUnresolvedTodos] = useState([]);

  useEffect(() => {
    const fetchUnresolvedTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const unresolvedTodos = response.data.filter(todo => !todo.completed);
        setUnresolvedTodos(unresolvedTodos);
      } catch (error) {
        console.error('Error fetching unresolved todos:', error);
      }
    };

    fetchUnresolvedTodos();
  }, []);

  return (
    <div>
      <h2>Lista de todos los pendientes sin resolver (ID y User ID)</h2>
      <table className="unresolved-todos-with-userids-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {unresolvedTodos.map(todo => (
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

export default UnresolvedTodosWithUserIds;
