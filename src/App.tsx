import './styles/index.scss';
import { NavBar } from 'components/common';
// import MenuNav from 'components/common/Menu/MenuNav';
import { Route, Routes } from 'react-router-dom';
import CoachRecordsPage from 'components/pages/Records/CoachRecordsPage/CoachRecordsPage';
import HomePage from './components/pages/HomePage/HomePage';
import TeamPage from 'components/pages/TeamPage/TeamPage';
import TeamsPage from './components/pages/TeamsPage/TeamsPage';
import PlayerPage from './components/pages/PlayerPage/PlayerPage';
import SeasonLeadersPage from './components/pages/SeasonLeadersPage/SeasonLeadersPage';
import StatsPage from 'components/pages/StatsPage/StatsPage';
import RankingsPage from 'components/pages/RankingsPage/RankingsPage';
import PlayerRecordsPage from './components/pages/Records/PlayerRecordsPage/PlayerRecordsPage';
import TeamSeasonRecordsPage from 'components/pages/Records/TeamRecords/TeamSeasonRecordsPage/TeamSeasonRecordsPage';
import RecruitingPage from 'components/pages/RecruitingPage/RecruitingPage';
import HallOfFamePage from './components/pages/HallOfFamePage/HallOfFamePage';
import TeamGameRecordsPage from 'components/pages/Records/TeamRecords/TeamGameRecordsPage/TeamGameRecordsPage';
import Footer from 'components/common/Footer/Footer';



function App() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/team/:teamId' element={<TeamPage />} />
                <Route path='/players/:playerId' element={<PlayerPage />} />
                <Route path='/season/leaders/players' element={<SeasonLeadersPage />} />
                <Route path='/season/rankings' element={<RankingsPage />} />
                <Route path={'/records/:recordType/:recordGroup'} element={<PlayerRecordsPage />} />
                <Route path={'/records/game/team'} element={<TeamGameRecordsPage />} />
                <Route path={'/records/season/team'} element={<TeamSeasonRecordsPage />} />
                <Route path={'/records/coach'} element={<CoachRecordsPage />} />
                <Route path='/season/recruiting' element={<RecruitingPage />} />
                <Route path='/hof' element={<HallOfFamePage />} />
                <Route path='/season/stats' element={<StatsPage />} />
            </Routes>
        <Footer />
        </>
    );
}

export default App;
