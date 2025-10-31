import { useCallback } from "react";

export function useSaveWin(userId, playerName) {
  const saveWin = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:4000/players");
      const data = await res.json();
      const existingPlayer = data.find(p => p.id === userId);

      const wins = existingPlayer ? existingPlayer.wins + 1 : 1;

      await fetch("http://localhost:4000/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, name: playerName, wins }),
      });
    } catch (err) {
      console.error("Помилка збереження перемоги:", err);
    }
  }, [userId, playerName]);

  return saveWin;
}
