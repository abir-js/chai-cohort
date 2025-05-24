import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Testing
      </div>
      <Card title="chai aur code" about="This is my first card" />
      <Card title="abirdotcom" about="This is about Abir" />
    </>
  );
}

export default App;
