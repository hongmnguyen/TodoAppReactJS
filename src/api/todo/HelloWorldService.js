import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world'); //return a response

    }
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean')
    }
    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`); //need to use `` instead of ''
    }
}
export default new HelloWorldService()