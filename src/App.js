import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
class App extends Component {
// me rapeller que le state est immutable

    state = {
        items: [], 
        id: uuid(),
        item:'',
        editedItem: false
    }


    handleChange = (e) => {
        this.setState({item : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: this.state.id,
            title: this.state.item
        }
    
        console.log(newItem)

        const updatedItems= [...this.state.items, newItem]
        
        this.setState({
            items: updatedItems, 
            item: '',
            id: uuid,
            editedItem: false
        
        });
    }

  
  render() {

    return (
        <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h1 className="text-capitalize text-center">
        
        Todo Input 
        </h1>
            <TodoInput 
             item={this.state.item}
             handleChange={this.handleChange}
             handleSubmit= {this.handleSubmit}
             />
            <TodoList items= {this.state.items}/>

        </div>
        </div>
        </div>
    )
}
}

export default App;
