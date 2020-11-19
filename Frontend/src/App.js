import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import Login from './components/Login';
import Categories from './components/Categories';
import Expenses from './components/Expenses';
import Expense from './components/Expense';
import apiClient from './services/api';
import axios from 'axios';
const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem('loggedIn') == 'true' || false
  );
  const login = () => {
    setLoggedIn(true);
    sessionStorage.setItem('loggedIn', true);
  };
  const logout = () => {
    axios.post('/logout').then(response => {
      if (response.status === 204) {
        setLoggedIn(false);
        sessionStorage.setItem('loggedIn', false);
      }
    })
  };
  const authLink = loggedIn 
    ? <button onClick={logout} className="nav-link btn btn-link">Logout</button> 
    : <NavLink to='/login' className="nav-link">Login</NavLink>;
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink to='/' className="nav-link">Books</NavLink>
          </li> */}
          {/* <li className="nav-item">
            <NavLink to='/categories' className="nav-link">Categories</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to='/expenses' className="nav-link">Expenses</NavLink>
          </li>
          <li className="nav-item">
            {authLink}
          </li>
        </ul>
        </div>
      </nav>
      <div className="container mt-5 pt-5">
        <Switch>
          <Route path='/' exact render={props => (
            <Books {...props} loggedIn={loggedIn} />
          )} />
          <Route path='/login' render={props => (
            <Login {...props} login={login} />
          )} />
          <Route path='/categories' render={props => (
            <Categories {...props} loggedIn={loggedIn} />
          )} />
           <Route path='/expenses' render={props => (
            <Expense {...props} loggedIn={loggedIn} />
          )} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
