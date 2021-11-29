import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(() => {
    console.log("Call the API..");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("SEARCH FOR", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("Check this counter");
  }, [counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} placeholder="Search here" />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"Continue"} />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
