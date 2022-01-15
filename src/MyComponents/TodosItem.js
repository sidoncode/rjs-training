import React from 'react'



export const  TodosItem = ({todo,ondelete}) => {
    return (
        
        <div>

            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button onClick = {ondelete}> Delete </button>
            
        </div>
    
    )
}
