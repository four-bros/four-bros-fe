import React from 'react';
import ncaaLogo from '../assets/ncaa_football_logo.png';

const Navbar = () => {
    return (
        <div className="navbar_container">
            <a href='/' className='logo_link'><img src={ncaaLogo} className="nav_logo" alt="ncaa logo" /></a>
            <div className="nav_links_container">
                <a href="/teams" className="nav_link">Teams</a>
                <a href="/stats" className="nav_link">Stats</a>
                <a href="/records" className="nav_link">Records</a>
                <a href="/recruiting" className="nav_link">Recruiting</a>
                <a href="/hof" className="nav_link">HOF</a>
            </div>
        </div>
    )
}

export default Navbar;