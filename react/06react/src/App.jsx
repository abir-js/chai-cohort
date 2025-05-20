import { useState, useEffect } from "react";
import { ChaiMenu } from "./AllChai";
import { useSpecialChai } from "./hooks/useSpecialChai";

export function App() {
  const [message, setMessage] = useState("Loading");
  const { chai, loading, error } = useSpecialChai();

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    )
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>

  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>serving hot chai with react</p>
      <h2>{message}</h2>
      <ChaiMenu />
    </div>
  );
}
