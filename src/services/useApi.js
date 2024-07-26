import { useState, useEffect } from "react";

const useApi = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/read/all`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setSneakers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  return { sneakers, loading, error };
};

export default useApi;
