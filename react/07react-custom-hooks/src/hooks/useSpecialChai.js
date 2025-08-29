import { useEffect, useState } from "react";

const useSpecialChai = () => {
  const [chai, setChai] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images");
        return res.json();
      })
      .then((data) => {
        setChai(data.data.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { chai, loading, error };
};

export default useSpecialChai;
