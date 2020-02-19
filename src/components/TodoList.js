import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, handleDeleteAll, handleDelete, handleEdit} = this.props
        return (
            <ul className="list-group my-5">

            <h3 className="text-capitalize text-center">
            Todo List
            </h3> 

            {items.map((item, index) => {
return  (
    <TodoItem key={index} title={item.title}
     // i need to do this way so we dont update during state transition
     handleDelete = { () => handleDelete(item.id)}
     handleEdit= {() => handleEdit(item.id)}
     />
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
