import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, handleDeleteAll, handleDelete} = this.props
        return (
            <ul className="list-group my-5">

            <h3 className="text-capitalize text-center">
            Todo List
            </h3> 

            {items.map(item => {
return  (
    <TodoItem key={item.id} title={item.title}
     // i need to do this way so we dont update during state transition
     handleDelete = { () => handleDelete(item.id)}/>
)
             } ) }
            
            <button type="button"
             onClick={handleDeleteAll}
             className="btn btn-danger btn-block 
             text-capitalize mt-5">
             
             Delete all
             </button>
            </ul>
        )
    }
}
