import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

export default class Counter extends Component {
    constructor(){
        super();//need to use super first
        this.state = {
            counter : 0 
            
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }    
    render() {
        return (
          <div className="counter">
            HONG LEARNS JAVA
            <CounterButton by ={1}  incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by ={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by ={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <span className="counttest">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

    reset () {
        this.setState(
           
            {counter: 0}
        ); 

    }
    increment (by){  // update state
       // console.log(`increment from parent-${by}`)
        this.setState(
            (prevState)=> {
            return {counter: prevState.counter + by}
            }
        );    
        
    }
    decrement (by){  // update state
        // console.log(`increment from parent-${by}`)
         this.setState(
             (prevState)=> {
             return {counter: prevState.counter - by}
             }
         );    
         
     }
}

 class CounterButton extends Component {
    //Define initial state in a constructor
    //state--> counter 0
    //constructor(){
     //   super();//need to use super first
        // this.state = {
        //     counter : 0 
            
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
        
    //}
    

    render()  {
        //const style = {fontSize: "50px", padding : "15px 30px"}
        return(
            <div classname="counter1">
                Counter123
                <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
           
            </div>
        )
    }
    // increment (){  // update state
        
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });    
    //     this.props.incrementMethod(this.props.by);
    // } 

    // decrement (){  // update state
        
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });    
    //     this.props.decrementMethod(this.props.by);
    // } 
}
CounterButton.defaultProps ={
    by : 9
}
CounterButton.propTypes ={
    by : PropTypes.number
}