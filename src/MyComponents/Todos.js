import React from 'react'

import {TodosItem} from "../MyComponents/TodosItem";

export const Todos = (props) =>{
    return (
        <div className = "container">
             <h3>Todos List</h3>            
             {props.todos.map((todo) =>  {
	            return <TodosItem todo  = {todo} ondelete = {props.ondelete}/>
            })}
        
        </div>
    )
}