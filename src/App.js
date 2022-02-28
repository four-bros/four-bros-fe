import "./styles/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import TeamsPage from "./components/pages/TeamsPage/TeamsPage";
import PlayerPage from "./components/pages/PlayerPage/PlayerPage";
import StatsPage from "./components/pages/StatsPage/StatsPage";
import RecordsPage from "./components/pages/RecordsPage/RecordsPage";
import HallOfFamePage from "./components/pages/HallOfFamePage/HallOfFamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/records" element={<RecordsPage />} />
        <Route path="/hof" element={<HallOfFamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
