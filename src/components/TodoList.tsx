import React from "react";
import "./styles.css"
import { ITodo } from "../model";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
