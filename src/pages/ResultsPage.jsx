import { usePlayers } from "../hooks/usePlayers";
import "../styles/results.css";

export default function ResultsPage() {
  const { players, loading, error } = usePlayers();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div className="results-container">
      <h1>Таблиця результатів</h1>

      <table className="results-table">
        <thead>
          <tr>
            <th>Нікнейм</th>
            <th>Перемоги</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
