import * as React from 'react';
import { NavLink } from 'react-router-dom';

import ncaaLogo from 'assets/ncaa_football_logo.png';
import style from './navBar.module.scss';
import useMediaQuery from 'hooks/useMediaQuery';


const Navbar = () => {

    const [isSeasonSelected, setIsSeasonSelected] = React.useState(false);
    const [isRecordsSelected, setIsRecordsSelected] = React.useState(false);
    const mobile = useMediaQuery('(max-width: 767px)');

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
                                    to='/season/leaders'
                                    className={style.dropdownLink}
                                    onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Leaders
                                </NavLink>
                                <NavLink
                                    to='/rankings'
                                    className={style.dropdownLink}
                                    onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Rankings
                                </NavLink>
                                <NavLink
                                    to="/recruiting"
                                    className={style.dropdownLink}
                                    onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Recruiting
                                </NavLink>
                                <NavLink
                                to='/stats'
                                className={style.dropdownLink}
                                onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
                                >
                                    Stats
                                </NavLink>
                            </div>
                        </>
                    )}
                </div>

                {/* <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn}>Season</button>
                    <div className={style.dropdownContent}>
                        <NavLink to='/season/leaders' className={style.dropdownLink}>Leaders</NavLink>
                        <NavLink to='/rankings' className={style.dropdownLink}>Rankings</NavLink>
                        <NavLink to="/recruiting" className={style.dropdownLink}>Recruiting</NavLink>
                        <NavLink to='/stats' className={style.dropdownLink} >Stats</NavLink>
                    </div>
                </div> */}
                
                <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn} onClick={() => setIsRecordsSelected(!isRecordsSelected)}>
                        Records
                    </button>
                    {isRecordsSelected && (
                        <>
                            <div className={style.dropDownContainer}>
                                <NavLink
                                    to ='/records/career'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Career
                                </NavLink>
                                <NavLink
                                    to ='/records/game'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Game
                                </NavLink>
                                <NavLink
                                    to ='/records/season'
                                    className={style.dropdownLink}
                                    onClick={() => setIsRecordsSelected(!isRecordsSelected)}
                                    
                                >
                                    Season
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

                {/* <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn}>Records</button>
                    <div className={style.dropdownContent}>
                        <NavLink to ='/records/career' className={style.dropdownLink}>Career</NavLink>
                        <NavLink to ='/records/game' className={style.dropdownLink}>Game</NavLink>
                        <NavLink to ='/records/season' className={style.dropdownLink}>Season</NavLink>
                        <NavLink to='/hof' className={style.dropdownLink}>HOF</NavLink>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;
