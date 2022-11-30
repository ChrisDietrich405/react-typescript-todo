import React, { useState } from "react";
import { ITodo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";
interface SingleTodoProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.task);

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
  };

  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)} className="todos__single">
      {edit ? (
        <input 
        className="todos__single--text"
        onChange={(e) => setEditTodo(e.target.value)}
        value={editTodo} type="text" />
      ) : todo.completed ? (
        <s className="todos__single--text">{todo.task}</s>
      ) : (
        <span className="todos__single--text">{todo.task}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.completed) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleCompleted(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
