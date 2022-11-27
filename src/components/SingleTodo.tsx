import React from "react";
import { ITodo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface SingleTodoProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {

    const handleDone = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            } else {
                return todo
            }
        })
        setTodos(updatedTodos)
    }

    return (
    <form action="" className="todos__single">
        {todo.completed ? () : ()}
      <span className="todos__single--text">{todo.task}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
