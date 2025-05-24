import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="min-h-screen flex justify-center items-end pb-20"
      >
        <div className="border-2 rounded-2xl p-1 bg-gray-700">
          <button
            onClick={() => setColor("red")}
            className="m-5 border-2 h-10 w-15 bg-red-600 text-white border-none rounded"
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="m-5 border-2 h-10 w-15 bg-green-600 text-white border-none rounded"
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="m-5 border-2 h-10 w-15 bg-blue-600 text-white border-none rounded"
          >
            blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
