import "./styles.css";
import { Input } from "./Input";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <Input ref={inputRef} placeholder="Prakash Motu gol gappa" />
      <button onClick={handleClick}> click me </button>
    </div>
  );
}
