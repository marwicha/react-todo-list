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

        const updatedItems= [...this.state.items, newItem]
        
        this.setState({
            items: updatedItems, 
            item: '',
            id: uuid,
            editedItem: false
        });
    }

     handleDelete = (id) => {

      const filteredItems = this.state.items.filter(item => item.id !== id)

      this.setState({items: filteredItems})
     }

    handleDeleteAll = () => {
        this.setState({
            items: []
        })
    }
  
    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id)

        const selectedItem = this.state.items.find(item => item.id === id)

        this.setState({items: filteredItems, item: selectedItem.title})
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

            <TodoList 
            items= {this.state.items}
            handleDeleteAll={this.handleDeleteAll}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />

        </div>
        </div>
        </div>
    )
}
}

export default App;
