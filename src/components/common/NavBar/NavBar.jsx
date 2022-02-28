import React from "react";
import ncaaLogo from "../../../assets/ncaa_football_logo.png";
import style from "./navBar.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <a href="/" className={style.logoLink}>
        <img src={ncaaLogo} className={style.navLogo} alt="ncaa logo" />
      </a>
      <div className={style.navLinksContainer}>
        <a href="/teams" className={style.navLink}>
          Teams
        </a>
        <a href="/stats" className={style.navLink}>
          Stats
        </a>
        <a href="/records" className={style.navLink}>
          Records
        </a>
        {/* <a href="/recruiting" className="nav_link">Recruiting</a> */}
        <a href="/hof" className={style.navLink}>
          HOF
        </a>
      </div>
    </div>
  );
};

export default Navbar;
