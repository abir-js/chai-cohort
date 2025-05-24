import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  function addValue() {
    if (counter < 20) {
      setCounter((prev) => prev + 1);
      setMessage("");
    } else {
      setMessage("value has exceeded 20");
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
      setMessage("");
    } else {
      setMessage("value has reached 0");
    }
  }

  return (
    <>
      <button onClick={addValue} style={{ padding: "15px", margin: "15px" }}>
        +1
      </button>
      <button onClick={removeValue} style={{ padding: "15px", margin: "15px" }}>
        -1
      </button>
      <h3>Result: {counter}</h3>
      {message && <p>{message}</p>}
    </>
  );
};

export default App;
