import * as React from 'react';
import { NavLink } from 'react-router-dom';

import ncaaLogo from 'assets/ncaa_football_logo.png';
import style from './navBar.module.scss';

type Props = {
    typeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Navbar = ({typeHandler}: Props) => {

    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <div className={style.navbarContainer}>
            <NavLink to='/' className={style.logoLink}>
                <img src={ncaaLogo} className={style.navLogo} alt='ncaa logo' />
            </NavLink>
            <div className={style.navLinksContainer}>
                <NavLink to="/teams" className={style.navLink}>Teams</NavLink>
                <NavLink to="/stats" className={style.navLink}>Stats</NavLink>
                <div className={style.navDropDownContainer}>
                    <button className={style.dropdownBtn} onClick={() => setIsSelected(!isSelected)}>Records</button>
                    {isSelected && (
                        <>
                            <div className={style.dropDownContainer}>
                                <button className={style.dropdownLink} value='career' onClick={(e) => typeHandler(e)}>Career</button>
                                <button className={style.dropdownLink} value='game' onClick={(e) => typeHandler(e)}>Game</button>
                                <button className={style.dropdownLink} value='season' onClick={(e) => typeHandler(e)}>Season</button>
                            </div>
                        </>
                    )}
                </div>
                <NavLink to="/recruiting" className={style.navLink}>Recruiting</NavLink>
                <NavLink to="/hof" className={style.navLink}>HOF</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
