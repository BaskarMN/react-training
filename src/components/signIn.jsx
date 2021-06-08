import React, { useReducer, useState } from 'react';
import '../css/form.css'
import '../css/main.css'
import { Switch, Route, Link, Redirect, BrowserRouter as Router } from "react-router-dom";
import { Button } from '@material-ui/core';
import FormDataComponent from './form';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Dashboard from './dashboard'
import Popup from 'react-popup';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



export default class SignIn extends React.Component {
    
    userData;
    constructor(props) {
        super(props);        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {           
            email: '',            
            password: '',
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    // routeChange=()=> {
    //     let path = `/dashboard`;
    //     let history = useHistory();
    //     history.push(path);
    //   }

    onSubmit(e) {
        e.preventDefault()
       console.log('current data', this.state);
       console.log('stored data', localStorage.getItem('user'))
       let currentData=JSON.parse(localStorage.getItem('user')); 
       

       if(currentData.email == this.state.email && currentData.password == this.state.password){
        console.log('Logged in success'); 
               

        //<Redirect to='/dashboard' component={Dashboard}/>;
        //Router.browserHistory.push('/dashboard');
        //hashHistory.push('/dashboard');
        
       } else {
           console.log('Wrong credentials');
           alert("Wrong Credentials")
       }  
    }

    render(){
        return (        
            <div className="wrapper">
                <div className="h2"><h2>LOGIN</h2></div>                                 
                <form onSubmit={this.onSubmit}>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Enter Email</InputLabel>
                    <Input type="email" required="true" className="form-control" value={this.state.email} onChange={this.onChangeEmail} /> 
                    </FormControl>
                    <br/><br/><br/>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" required="true" minLength="6" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>  
                    </FormControl>
                    <br/><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <h3>Don't have an account?</h3>
                    <Button variant="outlined" color="secondary"><Link to ="/signup">Register Here</Link></Button> 
                    <Switch>
                    <Route path="/signup">{FormDataComponent}</Route>
                    </Switch>    
                </div>
            </div>
        )
    }
    
}
