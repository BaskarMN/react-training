import React, { useReducer, useState } from 'react';
import '../css/form.css'
import SignIn from './signIn'
import { Switch, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function Form() {
    const [firstName, setFirstName] = useReducer(formReducer, {});
    const [lastName, setLastName] = useReducer(formReducer, {});
    const [password, setPassword] = useReducer(formReducer, {});
    const [email, setEmail] = useReducer(formReducer, {});
    const [mobile, setMobile] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
    }
    const handleChange = event => {
        setFirstName({
            name: event.target.name,
            value: event.target.value,
        });
        setLastName({
            name: event.target.name,
            value: event.target.value,
        });
        setPassword({
            name: event.target.name,
            value: event.target.value,
        });
        setEmail({
            name: event.target.name,
            value: event.target.value,
        });
        setMobile({
            name: event.target.name,
            value: event.target.value,
        });
    }
    return (
        <div className="wrapper">
            <h2>Register your details below</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>First Name: {''}
                        <input name="firstname" type="text" required="true" minLength="3" onChange={handleChange} />
                    </label>
                    <br />
                    <label>Last Name: {''}
                        <input name="lastname" type="text" onChange={handleChange} />
                    </label>
                    <br />
                    <label>Password: {''}
                        <input name="password" type="password" required="true" minLength="6" onChange={handleChange} />
                    </label>
                    <br />
                    <label>Email: {''}
                        <input name="email" type="email" onChange={handleChange} />
                    </label>
                    <br />
                    <label>Mobile: {''}
                        <input name="mobile" type="number" minLength="10" maxLength="10" onChange={handleChange} />
                    </label>
                </fieldset>
                <input type="submit" value="Submit" />
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

export default Form