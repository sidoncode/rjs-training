import React from 'react'



export const  TodosItem = ({todo}) => {
    return (
        
        <div>

            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            
        </div>
    
    )
}
