import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
class WelcomeComponent extends Component{
    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div class ="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div class ="container">
                    Click here to get a customized welcome message 
                    <button onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
            </>
        )
    }
}
export default WelcomeComponent