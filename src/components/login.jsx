import { Button } from '@material-ui/core';

export default function Login(props)
{
   return(
           <Button variant="contained" color="primary" onClick = {props.clickFunc}>
               Login
           </Button>
       );
}