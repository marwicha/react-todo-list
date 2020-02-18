import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
class App extends Component {
  render() {
    return (
        <div>
        <h1> todo Input</h1>
            <TodoInput/>
            <TodoList/>
        </div>
    )
}
}

export default App;
