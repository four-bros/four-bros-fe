import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import ncaaLogo from 'assets/ncaa_football_logo.png';
import style from './footer.module.scss';


const Footer = () => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={style.footerContainer}>
            <NavLink to='/' className={style.logoLink}>
                <img src={ncaaLogo} className={style.navLogo} alt='ncaa logo' />
            </NavLink>
            <Icon name='angle double up' size='large' link onClick={handleClick} className={style.arrow} />
        </div>
    );
};

export default Footer;
