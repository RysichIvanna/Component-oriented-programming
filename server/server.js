import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const playersFile = path.join(__dirname, "players.json");

app.get("/players", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(playersFile, "utf-8"));
    res.json(data);
  } catch (err) {
    console.error("Помилка читання JSON:", err);
    res.status(500).json({ error: "Не вдалося прочитати файл" });
  }
});

app.post("/players", (req, res) => {
  try {
    const { id, name, wins } = req.body;
    const data = JSON.parse(fs.readFileSync(playersFile, "utf-8"));

    const playerIndex = data.findIndex((p) => p.id === id);
    if (playerIndex >= 0) {
      data[playerIndex].wins = wins;
    } else {
      data.push({ id, name, wins });
    }

    fs.writeFileSync(playersFile, JSON.stringify(data, null, 2));
    res.json({ message: "OK" });
  } catch (err) {
    console.error("Помилка запису JSON:", err);
    res.status(500).json({ error: "Не вдалося записати файл" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
