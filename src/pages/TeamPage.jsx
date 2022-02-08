import React from 'react';
import Navbar from '../components/NavBar';
import TeamInfo from '../components/TeamInfo';
import TeamNav from '../components/TeamNav';
import TeamPlayers from '../components/TeamPlayers';


const AllTeamsPage = () => {
    return (
        <div>
            <Navbar />
            <TeamNav />
            <TeamInfo />
            <TeamPlayers />
        </div>
    )
}

export default AllTeamsPage