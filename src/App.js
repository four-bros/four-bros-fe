import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import TeamNavPage from './pages/TeamNavPage'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamNavPage />} />
          <Route path='/teams/:teamId' element={<TeamPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
