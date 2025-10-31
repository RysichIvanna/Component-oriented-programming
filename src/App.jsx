import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game/:userId" element={<GamePage />} />
        <Route path="/results/" element={<ResultsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
