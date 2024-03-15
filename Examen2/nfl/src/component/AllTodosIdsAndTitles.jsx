// AllTodosIdsAndTitles.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllTodosIdsAndTitles.css'; // Importar el archivo CSS para estilos personalizados

const AllTodosIdsAndTitles = () => {
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
      <h2>Lista de todos los pendientes (IDs y Títulos)</h2>
      <table className="todos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
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

export default AllTodosIdsAndTitles;
