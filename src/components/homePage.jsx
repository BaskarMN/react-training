import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import FormPage from './form';
import { Button } from '@material-ui/core';
import '../css/homePage.css'

class HomePage extends React.Component {    
    render(){
        return (
            <div>  
            <div className="home">             
                <h1 className ="heading">Hello React</h1>
                
                <p className="body">As its official tagline states, React is a library for building user interfaces. 
                 React is not a framework – it's not even exclusive to the web.
                 It's used with other libraries to render to certain environments. 
                 For instance, React Native can be used to build mobile applications; 
                 React 360 can be used to build virtual reality applications; and there are other possibilities besides.</p>

                <p className="body">React's primary goal is to minimize the bugs that occur when developers are building UIs. 
                It does this through the use of components — self-contained, logical pieces of code that describe a portion of the user interface. 
                These components can be composed together to create a full UI, and React abstracts away much of the rendering work, leaving you to concentrate on the UI design.
                </p>

            </div>
                <Button variant="outlined" color="secondary"><Link to ="/signup">SignUp Page</Link></Button> 
                <Switch>
                <Route path="/signup">{FormPage}</Route>
                </Switch>                
            </div>
        )
    }    
}

export default HomePage