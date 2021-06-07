import { Switch, Route, Link } from "react-router-dom";
import HomePage from './homePage'
import { Button } from '@material-ui/core';

export default function Logout(props)
{
    return(
        <div>
            <Button variant="contained" color="secondary"onClick = {props.clickFunc}>
               Logout
           </Button>
           {/* <h4><Link to ="/">Click here</Link> to go to Homepage</h4>
                <Switch>
                <Route path="/">{HomePage}</Route>
                </Switch>  */}
        </div>
    );
}