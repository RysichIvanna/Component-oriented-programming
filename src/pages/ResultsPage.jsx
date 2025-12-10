import React, { useContext } from "react";
import { GameContainer } from "../styled/GameContainer";
import { Table } from "../styled/Table";
import { usePlayers } from "../hooks/usePlayers";
import { useSettingsStore } from "../store/settingsStore";

export default function ResultsPage() {
  const { theme } = useSettingsStore();
  const { players, loading, error } = usePlayers();

  return (
    <GameContainer themeMode={theme}>
      <h1>Таблиця результатів</h1>

      {loading && <p>Завантаження…</p>}
      {error && <p>Помилка: {error}</p>}

      {!loading && !error && (
        <Table themeMode={theme}>
          <thead>
            <tr>
              <th>Нікнейм</th>
              <th>Перемоги</th>
            </tr>
          </thead>
          <tbody>
            {players.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.wins}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </GameContainer>
  );
}
