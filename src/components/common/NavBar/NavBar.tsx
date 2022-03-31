import * as React from 'react';
import { NavLink } from 'react-router-dom';

import ncaaLogo from 'assets/ncaa_football_logo.png';
import homeIcon from 'assets/home_icon.png';
import style from './navBar.module.scss';



type Props = {
    typeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Navbar = ({typeHandler}: Props) => {

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
                                <NavLink to='/leaders' className={style.dropdownLink}>Leaders</NavLink>
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
                                <button className={style.dropdownLink} value='career' onClick={(e) => typeHandler(e)}>Career</button>
                                <button className={style.dropdownLink} value='game' onClick={(e) => typeHandler(e)}>Game</button>
                                <button className={style.dropdownLink} value='season' onClick={(e) => typeHandler(e)}>Season</button>
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
