import { NavLink } from 'react-router-dom';
import ncaaLogo from 'assets/ncaa_football_logo.png';
import RecordsDropdown from './components/RecordsDropdown/RecordsDropdown';
import SeasonDropDown from './components/SeasonDropdown/SeasonDropdown';
import style from './navBar.module.scss';


const Navbar = () => {

    return (
        <div className={style.navbarContainer}>

            <div className={style.navLogoContainer}>
                <NavLink to='/' className={style.logoLink}>
                    <img src={ncaaLogo} className={style.navLogo} alt='ncaa logo' />
                </NavLink>
            </div>
            
            <div className={style.navLinksContainer}>
                <NavLink to="/teams" className={style.navLink}>Teams</NavLink>
                <SeasonDropDown />
                <RecordsDropdown />
            </div>

        </div>
    );
};

export default Navbar;
