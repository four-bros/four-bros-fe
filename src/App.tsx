import './styles/index.scss';
import { NavBar } from 'components/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import TeamPage from 'components/pages/TeamsPage/TeamPage';
import TeamsPage from './components/pages/TeamsPage/TeamsPage';
import PlayerPage from './components/pages/PlayerPage/PlayerPage';
import SeasonLeadersPage from './components/pages/SeasonLeadersPage/SeasonLeadersPage';
import StatsPage from 'components/pages/StatsPage/StatsPage';
import RankingsPage from 'components/pages/RankingsPage/RankingsPage';
import RecordsPage from './components/pages/RecordsPage/RecordsPage';
import RecruitingPage from 'components/pages/RecruitingPage/RecruitingPage';
import HallOfFamePage from './components/pages/HallOfFamePage/HallOfFamePage';

function App() {

    return (
        <>
        <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/team/:teamId' element={<TeamPage />} />
                <Route path='/players/:playerId' element={<PlayerPage />} />
                <Route path='/season/leaders' element={<SeasonLeadersPage />} />
                <Route path='/rankings' element={<RankingsPage />} />
                <Route path={'/records/:recordType'} element={<RecordsPage />} />
                <Route path='/recruiting' element={<RecruitingPage />} />
                <Route path='/hof' element={<HallOfFamePage />} />
                <Route path='/stats' element={<StatsPage />} />
            </Routes>
        </>
    );
}

export default App;
