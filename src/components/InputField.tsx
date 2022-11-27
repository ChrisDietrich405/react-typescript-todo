import React, {useRef} from "react";
import "./styles.css";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAddTodo }: InputFieldProps) => {
  
  const inputRef = useRef<HTMLInputElement>(null)

  
  return (
    <form onSubmit={(e) => {
      handleAddTodo(e)
      inputRef.current?.blur()
      }} className="input">
      <input
        ref={inputRef}
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
