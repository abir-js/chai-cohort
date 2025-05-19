import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    )
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message))
    .catch(()=> setMessage("Failed to load"))
  }, []);

  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>serving hot chai with react</p>
      <h2>{message}</h2>
    </div>
  );
}
