import React from 'react';
import './App.css';
import Login  from './components/Login';
import PrivateRoute from './components/Friends'
import Friends from './components/Friends'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <Router >
      <Link to='/'>HOME</Link>
      <Link to='/login'>LOGIN</Link>
      <Link to="/authorized-page">FRIENDS</Link>
      <Switch>
        <Route exact path= "/login" component={Login} />
        <PrivateRoute path="/authorized-page" component={Friends} />
      </Switch>
      

    </Router>
  );
}

export default App;
