import React from 'react'

// COMPONENT
import TodoItem from './TodoItem'

function TodoApp(){

    // const labelStyle = {
    //     color: "Purple",
    //     fontSize: 14,
    //     verticalAlign: "Top"
    // }

    return(
        <div id='todo-main' className='todo-list'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />

        </div>
    )
}

export default TodoApp