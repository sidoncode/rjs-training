import React from 'react'

import {TodosItem} from "../MyComponents/TodosItem";

export const Todos = (props) =>{
    return (
        <div className = "container">
             <h3>Todos List</h3>            
             <TodosItem todo = {props.todos[0]}/>
        
        </div>
    )
}
