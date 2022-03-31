import * as React from 'react';
import './styles/index.scss';
import { NavBar } from 'components/common';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import TeamsPage from './components/pages/TeamsPage/TeamsPage';
import PlayerPage from './components/pages/PlayerPage/PlayerPage';
import SeasonLeadersPage from './components/pages/SeasonLeadersPage/SeasonLeadersPage';
import StatsPage from 'components/pages/StatsPage/StatsPage';
import RankingsPage from 'components/pages/RankingsPage/RankingsPage';
import RecordsPage from './components/pages/RecordsPage/RecordsPage';
import RecruitingPage from 'components/pages/RecruitingPage/RecruitingPage';
import HallOfFamePage from './components/pages/HallOfFamePage/HallOfFamePage';

function App() {
    const navigate = useNavigate();
    const [recordType, setRecordType] = React.useState('')

    const changeType = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const {target} = e;
        if(target) {
            const value = ((target as HTMLButtonElement).value);
            setRecordType(value);
            navigate(`/records/${value}`);
        }
        return
    }

    return (
        <>
        <NavBar typeHandler={changeType} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/players/:playerId' element={<PlayerPage />} />
                <Route path='/leaders' element={<SeasonLeadersPage />} />
                <Route path='/rankings' element={<RankingsPage />} />
                <Route path={`/records/${recordType}`} element={<RecordsPage recordType={recordType} setRecordType={changeType} />} />
                <Route path='/recruiting' element={<RecruitingPage />} />
                <Route path='/hof' element={<HallOfFamePage />} />
                <Route path='/stats' element={<StatsPage />} />
            </Routes>
        </>
    );
}

export default App;
