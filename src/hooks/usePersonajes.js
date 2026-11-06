
import { useEffect, useState } from "react";
import fetchPersonajes from "../services/fetchPersonajes";

const usePersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cargarPersonajes = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchPersonajes();

        setPersonajes(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    cargarPersonajes();
  }, []);

  return {
    personajes,
    loading,
    error
  };
};

export default usePersonajes;
