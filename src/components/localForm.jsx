import React, { Component } from 'react';
import '../css/form.css';
import '../css/main.css'
import SignIn from './signIn'
import { Switch, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { FormControl, Input, InputLabel } from '@material-ui/core';

export default class FormDataComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
        }
    }

    // Form Events
    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ lastName: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        alert('Register success')
        localStorage.setItem('user', JSON.stringify(this.state))

        // this.setState({
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     phone: '',
        //     password: ''
        // })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
                email: this.userData.email,
                phone: this.userData.phone,
                password: this.userData.password
            })
        } else {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="h2"><h2>REGISTRATION</h2></div>
                    <div className="h4"><h4>Please enter the details</h4></div> 
                    <FormControl>
                    <InputLabel htmlFor="my-input">First Name</InputLabel>
                    <Input type="text" required="true" minLength="3" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />  
                    </FormControl>
                    <br/><br/><br/>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Last Name</InputLabel>
                    <Input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />  
                    </FormControl>
                    <br/><br/><br/>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input type="email" required="true" className="form-control" value={this.state.email} onChange={this.onChangeEmail} /> 
                    </FormControl>
                    <br/><br/><br/>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" required="true" minLength="6" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>  
                    </FormControl>
                    <br/><br/><br/>                    
                    <FormControl>
                    <InputLabel htmlFor="my-input">Phone</InputLabel>
                    <Input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} /> 
                    </FormControl>
                    <br/><br/><br/>
                    {/* <fieldset>
                        <label>First Name: {''}</label>
                        <input type="text" required="true" minLength="3" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />
                        <br />
                    
                        <label>Last Name: {''}</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                        <br />
                    
                        <label>Password: {''}</label>
                        <input type="password" required="true" minLength="6" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                        <br />
                    
                        <label>Email: {''}</label>
                        <input type="email" required="true" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                        <br />
                    
                        <label>Phone: {''}</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                        <br />
                        </fieldset> */}
                    <button type="submit">Submit</button>                    
                </form>
                <div>                
                <h3>Already have an account?</h3>
                <Button variant="outlined" color="secondary"><Link to ="/login">Login Here</Link></Button> 
                <Switch>
                <Route path="/login">{SignIn}</Route>
                </Switch>    
                </div>
                
            </div>
        )
    }
}