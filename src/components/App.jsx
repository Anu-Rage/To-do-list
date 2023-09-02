import React, { useState } from "react";

function App() {
  const [inputText, setinput] = useState("");
  const [items, setitem] = useState([]);

  function handlechange(event) {
    const newvalue = event.target.value;
    setinput(newvalue);
  }

  function handleclick() {
    setitem((prev) => {
      return [...prev, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={inputText} />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((t) => {
            return <li>{t}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
