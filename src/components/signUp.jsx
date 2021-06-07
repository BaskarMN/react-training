import React from 'react';
import Login from './login';
import Logout from './logout';
import Message from './message';

class SignUp extends React.Component {
    constructor(props)
    {
        super(props); 
        this.state = {isLoggedIn : false}; 
        this.ifLoginClicked = this.ifLoginClicked.bind(this);
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
    }
    
    ifLoginClicked()
    {
        this.setState({isLoggedIn : true});
    }
 
    ifLogoutClicked()
    {
        this.setState({isLoggedIn : false});
    }
    render(){
        return(
            <div>
                <h2><Message isLoggedIn = {this.state.isLoggedIn}/></h2>                 
                     {
                         (this.state.isLoggedIn)?(
                         <Logout clickFunc = {this.ifLogoutClicked} />
                         ) : (
                         <Login clickFunc = {this.ifLoginClicked} />
                         )
                     }
            </div>
        )
    }
}

export default SignUp