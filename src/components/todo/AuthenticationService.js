import TodoDataService from "../../api/todo/TodoDataService";

class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout(){
        console.log('run logout')
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if (user ===null) return false
        return true
    }
    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
       if (user ===null) return 'empty'
        return user
        
    }
}
export default new AuthenticationService()