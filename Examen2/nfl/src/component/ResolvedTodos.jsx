// ResolvedTodos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResolvedTodos.css'; // Importar el archivo CSS para estilos personalizados

const ResolvedTodos = () => {
  const [resolvedTodos, setResolvedTodos] = useState([]);

  useEffect(() => {
    const fetchResolvedTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const resolvedTodos = response.data.filter(todo => todo.completed);
        setResolvedTodos(resolvedTodos);
      } catch (error) {
        console.error('Error fetching resolved todos:', error);
      }
    };

    fetchResolvedTodos();
  }, []);

  return (
    <div>
      <h2>Lista de todos los pendientes resueltos (ID y Título)</h2>
      <ul className="resolved-todos-list">
        {resolvedTodos.map(todo => (
          <li key={todo.id}>{`ID: ${todo.id}, Título: ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResolvedTodos;
