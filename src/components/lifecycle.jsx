import React from 'react';
import Content from './lifcycleContent';
import { Button } from '@material-ui/core';

class LifeCycle extends React.Component {
   constructor(props) {
      super(props);      
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
      this.decreaseNumber = this.decreaseNumber.bind(this)
   };
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   decreaseNumber() {
       this.setState({data: this.state.data - 1})
   }
   render() {
      return (
         <div>            
            <h2>Component life</h2>
            <Button variant="outlined" color="secondary" onClick = {this.setNewNumber}>INCREMENT</Button>
            <Button variant="outlined" color="secondary" onClick = {this.decreaseNumber}>DECREMENT</Button>
            <Content variant="outlined" color="secondary" myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

export default LifeCycle;