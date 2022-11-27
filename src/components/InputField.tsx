import React from "react";
import "./styles.css";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAddTodo }: InputFieldProps) => {
  return (
    <form onSubmit={handleAddTodo} className="input">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="enter task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        add task
      </button>
    </form>
  );
};

export default InputField;
