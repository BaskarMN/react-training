import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import HomePage from './components/homePage';
import Lifecycle from './components/lifecycle';
import HooksExample  from './components/hooks';
import { Link, Button } from '@material-ui/core';
import SignIn from './components/signIn';
import FormDataComponent from './components/localForm';
import Dashboard from './components/dashboard';
import './css/main.css'

ReactDOM.render(
    <div>         
        <Router >
        <div classname="navbar">
        <Button color="primary"><span><Link href="/">HomePage </Link></span> </Button>
        <Button color="primary"><span><Link href="/lifecycle">Component Lifecycle </Link> </span></Button>
        <Button color="primary"><span><Link href="/hooks">Hooks Example </Link></span></Button>
        <Button color="primary"><span><Link href="/signup">SignUp </Link> </span></Button>
        <Button color="primary"><span><Link href="/login">Login </Link> </span></Button>              
        </div>
        <hr />
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/lifecycle" component={Lifecycle}/>
            <Route exact path="/hooks" component={HooksExample}/>
            <Route exact path="/signup" component={FormDataComponent}/>
            <Route exact path="/login" component={SignIn}/> 
            <Route exact path="/dashboard" component={Dashboard}/>                  
        </Switch>
    </Router> 
    </div>,
    document.getElementById('root')
);
