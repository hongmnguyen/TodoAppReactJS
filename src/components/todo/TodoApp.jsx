import React, {Component} from 'react'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                            
                <LoginComponent/> 
            </div>
        )
    }
}
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28mins',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }
    handleUsernameChange(event){
        console.log(event.target.value);
        this.setState({username:event.target.value});
        
    }
    render (){
        return(
            <>
            
                User Name: <input type = "text123" name ="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                Password: <input type ="password1" name ="password" value={this.state.password}/>
                <button>Login</button>
            </>    
        )
    }
}
export default TodoApp
//this is to test