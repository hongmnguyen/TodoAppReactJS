import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
class LogoutComponent extends Component{
    render(){
        return(
            <>
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thanks for using our Application.
                </div>
            </div>
            </>
        )
    }
}
export default LogoutComponent