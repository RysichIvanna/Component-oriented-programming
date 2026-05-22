import { useState, useEffect } from "react";

/**
 * Хук для отримання списку гравців з сервера
 * @returns {Object} Об'єкт з даними: players, loading, error
 */
export function usePlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4000/players");
        if (!res.ok) throw new Error("Помилка завантаження даних");
        const data = await res.json();
        setPlayers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return { players, loading, error };
}
