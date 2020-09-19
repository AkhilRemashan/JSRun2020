import React from 'react'

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" name="input-1" value=" " />
            <label for="input-1">{props.item.text}</label>
        </div>
    )
}

export default TodoItem