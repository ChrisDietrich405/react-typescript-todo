import React from 'react'
import { ITodo } from '../model'
import SingleTodo from './SingleTodo'
import "./styles.css"

interface TodoListProps {
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>

}

const TodoList = ({todos, setTodos}: TodoListProps) => {
  return (
    <div className='todos'>{todos.map((todo) => {
        return (
            <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>
        )
    })}</div>
  )
}

export default TodoList