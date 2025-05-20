import { useEffect, useState } from "react";

export function ChaiMenu() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    )
      .then((res) => res.json)
      .then((data) => setMenu(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>available chai</h2>
      <ul>
        {menu.map((chai) => (
          <li key={chai.id}>{chai.name}</li>
        ))}
      </ul>
    </div>
  );
}
