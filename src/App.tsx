import React, { useRef, useState } from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { ITodo } from './model'
import "./App.css"

//1:00

const App:React.FC = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])


  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, {completed: false, id: Date.now(), task: todo}])
    setTodo("")
  }

  console.log(todo)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField handleAddTodo={handleAddTodo} todo={todo} setTodo={setTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App