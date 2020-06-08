import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom';
import { LinksDiv } from '../styled/index'
import Login from './Login';
import Logout from './Logout';
import PrivateRoute from '../components/PrivateRoute';
import Friends from './Friends';
import Home from './Home';


export default function Header(){

    return(
        <Router>
            <LinksDiv>
                <Link to='/'>HOME</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to="/authorized-page">FRIENDS</Link>
                <Link to="/logout">LOGOUT</Link>
            </LinksDiv>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path= "/login" component={Login} />
                <Route path="/logout" component={Logout}/>
                <PrivateRoute path="/authorized-page" component={Friends} /> 
          </Switch>
        </Router>
    )
}