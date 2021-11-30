import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    return;
  } // toDos.length -1 함수를 아직 못만듦

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write what you do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((thing, index) => (
          <li key={index}>
            {thing}
            <button onClick={deleteToDo}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
