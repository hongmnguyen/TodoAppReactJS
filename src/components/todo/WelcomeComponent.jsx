import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js' 
class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state={
            welcomeMessage:''
        }
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className ="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className ="container">
                    Click here to get a customized welcome message 
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }


    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService() //return a promise back which we mentioned in HelloWorldService.js
        // .then(response=>this.handleSuccesfulResponse(response)) //what should do when successful response 
        // HelloWorldService.executeHelloWorldBeanService() //return a promise back which we mentioned in HelloWorldService.js
        // .then(response=>this.handleSuccesfulResponse(response)) //what should do when successful response
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name) //return a promise back which we mentioned in HelloWorldService.js
        .then(response=>this.handleSuccesfulResponse(response)) //what should do when successful response
        .catch(error=>this.handleError(error))//what should do when unsuccessful response
        
    }
    handleSuccesfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage:response.data.message})
    }
    handleError(error){
        console.log(error.response)
        this.setState({welcomeMessage:error.response.data.message})
    }
}

export default WelcomeComponent