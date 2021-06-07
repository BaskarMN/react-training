import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import HomePage from './components/homePage';
import Lifecycle from './components/lifecycle';
import SignUp from './components/signUp';
import HooksExample  from './components/hooks';
import { Link, Button } from '@material-ui/core';
import FormPage from './components/form';

ReactDOM.render(
    <div>         
        <Router>
       
        <Button color="primary"><span><Link href="/">HomePage </Link></span> </Button>
        <Button color="primary"><span><Link href="/lifecycle">Component Lifecycle </Link> </span></Button>
        <Button color="primary"><span><Link href="/hooks">Hooks Example </Link></span></Button>
        <Button color="primary"><span><Link href="/signup">SignUp </Link> </span></Button>     
        <hr />
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/lifecycle" component={Lifecycle}/>
            <Route exact path="/hooks" component={HooksExample}/>
            <Route exact path="/signup" component={FormPage}/>       
        </Switch>
    </Router> 
    </div>,
    document.getElementById('root')
);
