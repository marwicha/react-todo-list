import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
class App extends Component {

    state = {
        items: [], 
        id:0,
        item:'',
        editedItem: false
    }

    handleChange(e) {
        this.setState({item : e.target.value})
    }

  render() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h1 className="text-capitalize text-center">
        
        Todo Input 
        </h1>
            <TodoInput item={this.state.item} handleChange={this.handleChange}/>
            <TodoList/>

        </div>
        </div>
        </div>
    )
}
}

export default App;
