import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { ITodo } from "./model";
//54
const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const updatedTodos = [...todos, { task: todo, completed: false, id: Date.now() }];
      setTodos(updatedTodos);
    }
    setTodo("")
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField handleAddTodo={handleAddTodo} todo={todo} setTodo={setTodo} />
      <TodoList setTodos={setTodos} todos={todos}/>
      
      
    </div>
  );
};

export default App;
