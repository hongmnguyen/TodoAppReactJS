import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'


class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp"> 
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                    <Route path ="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/Welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent></FooterComponent>
                   
                </Router>     

                {/* <WelcomeComponent/>
                <LoginComponent/>  */}
               
            </div>
        )
    }
}
// class HeaderComponent extends Component{
//     render(){
//         const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//         console.log(isUserLoggedIn);
//         return(
//             <header>
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href= "http://learnreact.com" className= "navbar-brand">in 28mins</a></div>
//                 <ul className="navbar-nav">
//                     {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28mins">Home</Link></li>}
//                     {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}            
//                 </ul>
//                 <ul className="navbar-nav navbar-collapse justify-content-end">
//                     {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//                     {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
//                 </ul>
//                 </nav>
//             </header>    
//         )
//     }
    
// }    


// class FooterComponent extends Component{
//     render(){
//         return(
//             <footer className="footer">
//                 <span className="text-muted">All Rights Reserved 2021 @HongSDE</span>
            
//             </footer>
//         )
//     }
// }
// class LogoutComponent extends Component{
//     render(){
//         return(
//             <>
//             <div>
//                 <h1>You are logged out</h1>
//                 <div className="container">
//                     Thanks for using our Application.
//                 </div>
//             </div>
//             </>
//         )
//     }
// }
// class ListTodosComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             todos : 
//             [
//              {id: 1, description : 'Learn React', done: false, targetDate: new Date()},
//              {id: 2, description : 'Learn Git', done: false, targetDate: new Date()},
//              {id: 3, description : 'Exercise Yoga', done: false, targetDate: new Date()}
//             ]
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>List Todos</h1>
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>id</th> 
//                                 <th>description</th>
//                                 <th>Target Date</th>
//                                 <th>Is Completed?</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                          this.state.todos.map (
//                             todo =>
//                                 <tr key={todo.id}>
//                                     <td>{todo.id}</td>
//                                     <td>{todo.description}</td>
//                                     <td>{todo.done.toString()}</td>
//                                     <td>{todo.targetDate.toString()}</td>
                                    
//                                 </tr>
//                          )
//                         }   
//                         </tbody>
//                     </table>
//                 </div>
//             </div>    
//         )    
//     }
// }
// class WelcomeComponent extends Component{
//     render(){
//         return (
//             <>
//                 <h1>Welcome!</h1>
//                 <div class ="container">
//                 Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
//                 </div>
//             </>
//         )
//     }
// }
// function ErrorComponent(){
    
//     return <div>An error ocurred. Pls contact admin</div>
    
// }
// class LoginComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             username: 'in28mins',
//             password: '',
//             hasLoginFailed: false,
//             showSuccessMessage: false
//         }
//         // this.handleUsernameChange = this.handleUsernameChange.bind(this)
//         // this.handlePasswordChange = this.handlePasswordChange.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.loginClicked= this.loginClicked.bind(this)
//     }

//     handleChange(event) {
//         //console.log(this.state);
//         this.setState(
//             {
//             [event.target.name]
//             :event.target.value
//             }
//         )
//     }
//     // handleUsernameChange(event){
//     //     console.log(event.target.value);
//     //     this.setState(
//     //         {
//     //         [event.target.name]
//     //         :event.target.value});
//     // }
//     // handlePasswordChange(event){
//     //     console.log(event.target.value);
//     //     this.setState({password:event.target.value});    
//     // }
//     loginClicked() {
//         //in28 mins, dummy
//         if(this.state.username=== 'in28mins' && this.state.password==='dummy'){
//             //console.log('Successful')
//             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
//             this.props.history.push(`/welcome/${this.state.username}`)
//             //this.setState({showSuccessMessage:true})
//             //this.setState({hasLoginFailed:false})
//         }    
//         else {
//             this.setState({showSuccessMessage:false})
//             this.setState({hasLoginFailed:true})
//         }
            

//         //console.log(this.state)

//     }
//     render (){
//         return(
//             <>
//                 <h1>Login</h1>
//                 <div className ="container">
//                 {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
//                 {this.state.hasLoginFailed &&<div className="alert alert-warning">Invalid Credentials</div>}
//                 {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
//                 {this.state.showSuccessMessage &&<div>Login Successful</div>}
//                 User Name: <input type = "text123" name ="username" value={this.state.username} onChange={this.handleChange}/>
//                 Password: <input type ="password1" name ="password" value={this.state.password} onChange={this.handleChange}/>
//                 <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
//                 </div>
//             </>    
//         )
//     }

// }
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
