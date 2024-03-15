import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import AllTodosIds from './component/AllTodosIds';
import AllTodosIdsAndTitles from './component/AllTodosIdsAndTitles';
import UnresolvedTodos from './component/UnresolvedTodos';
import ResolvedTodos from './component/ResolvedTodos';
import AllTodosIdsAndUserIds from './component/AllTodosIdsAndUserIds';
import ResolvedTodosWithUserIds from './component/ResolvedTodosWithUserIds';
import UnresolvedTodosWithUserIds from './component/UnresolvedTodosWithUserIds';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink exact to="/" className="navbar-brand">NFL Todos</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem to="/" text="Todos IDs" />
              <NavItem to="/todos-titles" text="Todos IDs y Titulos" />
              <NavItem to="/unresolved-todos" text="Todos los pendientes" />
              <NavItem to="/resolved-todos" text="Resolved Todos" />
              <NavItem to="/todos-userids" text="Todos IDs and UserIDs" />
              <NavItem to="/resolved-todos-userids" text="Resolved Todos with UserIDs" />
              <NavItem to="/unresolved-todos-userids" text="Unresolved Todos with UserIDs" />
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<AllTodosIds />} />
          <Route path="/todos-titles" element={<AllTodosIdsAndTitles />} />
          <Route path="/unresolved-todos" element={<UnresolvedTodos />} />
          <Route path="/resolved-todos" element={<ResolvedTodos />} />
          <Route path="/todos-userids" element={<AllTodosIdsAndUserIds />} />
          <Route path="/resolved-todos-userids" element={<ResolvedTodosWithUserIds />} />
          <Route path="/unresolved-todos-userids" element={<UnresolvedTodosWithUserIds />} />
        </Routes>
      </div>
    </Router>
  );
};

const NavItem = ({ to, text }) => {
  return (
    <li className="nav-item">
      <NavLink exact to={to} className="nav-link" activeClassName="active">{text}</NavLink>
    </li>
  );
};

export default App;
