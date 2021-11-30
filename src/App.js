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

  /*
  function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(toDos);
    li.remove();
    
  }
*/

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
          <li key={index}>{thing}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
