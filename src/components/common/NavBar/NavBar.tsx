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
                                <NavLink to='/season/leaders' className={style.dropdownLink}>Leaders</NavLink>
                                <NavLink to='/rankings' className={style.dropdownLink}>Rankings</NavLink>
                                <NavLink to="/recruiting" className={style.dropdownLink}>Recruiting</NavLink>
                                <NavLink to='/stats' className={style.dropdownLink} >Stats</NavLink>
                            </div>
                        </>
                    )}
                </div>
                
                <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn} onClick={() => setIsRecordsSelected(!isRecordsSelected)}>Records</button>
                    {isRecordsSelected && (
                        <>
                            <div className={style.dropDownContainer}>
                                <NavLink to ='/records/career' className={style.dropdownLink}>Career</NavLink>
                                <NavLink to ='/records/game' className={style.dropdownLink}>Game</NavLink>
                                <NavLink to ='/records/season' className={style.dropdownLink}>Season</NavLink>
                                <NavLink to='/hof' className={style.dropdownLink}>HOF</NavLink>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
