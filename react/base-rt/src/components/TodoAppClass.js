import React from 'react'
import todosData from '../assets/data/todosData'
import TodoItem from './TodoItem'


class TodoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render(){

        const todosItem = this.state.todos.map(item => <TodoItem item={item} />)

        return(
            <div id='todo-main' className='todo-list'>
                {todosItem}
            </div>
        )
    }
}


export default TodoApp