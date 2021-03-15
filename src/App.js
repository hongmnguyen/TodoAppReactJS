import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import CounterButton from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* HONG LEARNS JAVA */}
        {/*<Counter/>*/}

        {/*<LearningComponents/>*/}
        <TodoApp/>

      </div>
    );
  }
}
class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponent">
        HONG LEARNS JAVA
        <FirstComponent />
        <SecondComponent/>
        <ThirdComponent/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}



export default App;