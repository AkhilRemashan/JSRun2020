import React from 'react'

import todosData from '../assets/data/todosData'

// COMPONENT
import TodoItem from './TodoItem'

function TodoApp(){

    // const labelStyle = {
    //     color: "Purple",
    //     fontSize: 14,
    //     verticalAlign: "Top"
    // }

    const todosItem = todosData.map(item => <TodoItem item={item} />)

    return(
        <div id='todo-main' className='todo-list'>
            {todosItem}
        </div>
    )
}

export default TodoApp