import { useState } from "react";
import "./styles.css";

export default function App() {
  // var currentdate = new Date().toLocaleTimeString();
  const [count, setCounter] = useState(0);
  const [inputName, SetInputName] = useState("");
  // const [time, setTime] = useState();

  const typing = "Typing ...";
  function clickedTimes() {
    setCounter(count + 1);
  }
  // function getTime() {
  //   setTime(currentdate);
  // }
  // window.setInterval(function () {
  //   /// call your function here
  //   getTime();
  // }, 2000);
  function setInput(e) {
    SetInputName(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello {count}</h1>
      {/* <h1>Hello {time}</h1> */}
      <button onClick={clickedTimes}>Activate Lasers</button>
      <input onChange={setInput} name="name" placeholder="enter name" />
      <label>{inputName ? typing : null}</label>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
