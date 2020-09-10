import React from 'react'

function TodoItem(){
    return(
        <div className="todo-item">
            <input type="checkbox" name="input-1" value=" " />
            <label for="input-1"> I have a bike, purrr</label>
        </div>
    )
}

export default TodoItem