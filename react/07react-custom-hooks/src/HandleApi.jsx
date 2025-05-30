import { useEffect, useState } from "react";

function HandleApi() {
  const [chai, setChai] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
      .then((res) => res.json())
      .then((data) => setChai(data.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <div>
        <h2>Available chai</h2>
        <ul>
          {chai.map((chai) => (
            <li key={chai.id}>{chai.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HandleApi;

