import { useState } from "react";

const ChaiOrder = () => {
  const [count, setCount] = useState(0);

  const serveChai = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h2>Chai Counter</h2>
      <p>Tou have served {count} cups of chai</p>
      <button onClick={serveChai}>Serve Chai</button>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Serve Chai</button> */}
    </div>
  );
};

export default ChaiOrder;
