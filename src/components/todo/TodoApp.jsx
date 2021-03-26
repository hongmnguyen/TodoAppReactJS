import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp"> 
                <Router>
                    <Route path ="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/Welcome" component={WelcomeComponent}/>
                </Router>     
                {/* <WelcomeComponent/>
                <LoginComponent/>  */}
               
            </div>
        )
    }
}
class WelcomeComponent extends Component{
    render(){
        return <div>Welcome in 28mins</div>
    }
}
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28mins',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked= this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
            [event.target.name]
            :event.target.value
            }
        )
    }
    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //         [event.target.name]
    //         :event.target.value});
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value});    
    // }
    loginClicked() {
        //in28 mins, dummy
        if(this.state.username=== 'in28mins' && this.state.password==='dummy'){
            //console.log('Successful')
            this.props.history.push("/welcome")
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }    
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
            

        //console.log(this.state)

    }
    render (){
        return(
            <>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed &&<div>Invalid Credentials</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.showSuccessMessage &&<div>Login Successful</div>}
                User Name: <input type = "text123" name ="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type ="password1" name ="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </>    
        )
    }

}
// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed){
//         return<div>Invalid Credentials</div>
//     }
//     return null   
// }
// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage){
//         return<div>Login Successful</div>
//     }
//     return null   
// }
export default TodoApp
//this is to test 
