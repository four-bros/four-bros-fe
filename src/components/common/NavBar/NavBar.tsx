import * as React from 'react';
import { NavLink } from 'react-router-dom';

import ncaaLogo from 'assets/ncaa_football_logo.png';
import style from './navBar.module.scss';


const Navbar = () => {

    const [isSeasonSelected, setIsSeasonSelected] = React.useState(false);
    const [isRecordsSelected, setIsRecordsSelected] = React.useState(false);

    return (
        <div className={style.navbarContainer}>

            <div className={style.navLogoContainer}>
                <NavLink to='/' className={style.logoLink}>
                    <img src={ncaaLogo} className={style.navLogo} alt='ncaa logo' />
                </NavLink>
            </div>
            
            <div className={style.navLinksContainer}>
                <NavLink to="/teams" className={style.navLink}>Teams</NavLink>
                <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn} onClick={() => setIsSeasonSelected(!isSeasonSelected)}>Season</button>
                    {isSeasonSelected && (
                        <>
                            <div className={style.dropDownContainer}>
                                <NavLink 
                                    to='/season/leaders/players'
                                    className={style.dropdownLink}
                                    onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Leaders
                                </NavLink>
                                <NavLink
                                    to='/season/rankings'
                                    className={style.dropdownLink}
                                    onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Rankings
                                </NavLink>
                                <NavLink
                                    to="/season/recruiting"
                                    className={style.dropdownLink}
                                    onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Recruiting
                                </NavLink>
                                <NavLink
                                to='/season/stats'
                                className={style.dropdownLink}
                                onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Stats
                                </NavLink>
                            </div>
                        </>
                    )}
                </div>
                
                <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn} onClick={() => setIsRecordsSelected(!isRecordsSelected)}>
                        Records
                    </button>
                    {isRecordsSelected && (
                        <>
                            <div className={style.dropDownContainer}>
                                <NavLink
                                    to ='/records/player/career'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Career
                                </NavLink>
                                <NavLink
                                    to ='/records/player/game'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Game
                                </NavLink>
                                <NavLink
                                    to ='/records/player/season'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Season
                                </NavLink>
                                <NavLink
                                    to ='/records/team'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Team
                                </NavLink>
                                <NavLink
                                    to ='/records/coach'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Coach
                                </NavLink>
                                <NavLink
                                    to='/hof'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    HOF
                                </NavLink>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
