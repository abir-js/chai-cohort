import { useState, useEffect } from "react";
import HandleApi from "./HandleApi";
import useSpecialChai from "./hooks/useSpecialChai";

export default function App() {
  const {chai, loading, error} = useSpecialChai();
  if(loading) return <h2>Loading...</h2>
  if(error) return <h2>Error: {error}</h2>

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <HandleApi />
      <h3>{chai.title}</h3>
    </div>
  );
}
