// UnresolvedTodos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UnresolvedTodos.css'; // Importar el archivo CSS para estilos personalizados

const UnresolvedTodos = () => {
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
      <h2>Lista de todos los pendientes sin resolver (ID y Title)</h2>
      <table className="unresolved-todos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {unresolvedTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnresolvedTodos;
