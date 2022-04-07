import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

import style from './menuNav.module.scss';
import ncaaLogo from 'assets/ncaa_football_logo.png';
import useMediaQuery from 'hooks/useMediaQuery';

const MenuNav = () => {

    const mobile = useMediaQuery('(max-width: 767px)');

    return (
        <>
            {/* {!mobile && (
                <div className={style.navbarContainer}>
                    <div className={style.navLogoContainer}>
                        <NavLink to='/' className={style.logoLink}>
                            <img src={ncaaLogo} className={style.navLogo} alt='ncaa logo' />
                        </NavLink>
                    </div>
                    <div className={style.navLinksContainer}>
                        <Menu inverted>
                            <Menu.Item href='/teams'>Teams</Menu.Item>
                            <Dropdown item text='Season'>
                              <Dropdown.Menu>
                                <Dropdown.Item href='/season/leaders'>Leaders</Dropdown.Item>
                                <Dropdown.Item href='/rankings'>Rankings</Dropdown.Item>
                                <Dropdown.Item href='/recruiting'>Recruiting</Dropdown.Item>
                                <Dropdown.Item href='/stats'>Stats</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown item text='Records'>
                              <Dropdown.Menu>
                                <Dropdown.Item href='/records/career'>Career</Dropdown.Item>
                                <Dropdown.Item href='/records/season'>Season</Dropdown.Item>
                                <Dropdown.Item href='/records/game'>Game</Dropdown.Item>
                                <Dropdown.Item href='/hof'>HOF</Dropdown.Item>
                                <Dropdown.Item href='/records/coach'>Coaching</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </div>
                </div>
            )} */}
            {mobile && (
                <div className={style.navbarContainer}>
                    <div className={style.navLinksContainer}>
                        <Menu inverted>
                            <Menu.Item href='/'>
                                <Icon name='home' size='large' className={style.mobileLogo}></Icon>
                            </Menu.Item>
                            <Menu.Item href='/teams'>Teams</Menu.Item>
                            <Dropdown item text='Season'>
                              <Dropdown.Menu>
                                <Dropdown.Item className={style.navLink} href='/season/leaders'>Leaders</Dropdown.Item>
                                <Dropdown.Item className={style.navLink} href='/rankings'>Rankings</Dropdown.Item>
                                <Dropdown.Item className={style.navLink} href='/recruiting'>Recruiting</Dropdown.Item>
                                <Dropdown.Item className={style.navLink} href='/stats'>Stats</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown item text='Records'>
                              <Dropdown.Menu>
                                <Dropdown.Item href='/records/career'>Career</Dropdown.Item>
                                <Dropdown.Item href='/records/season'>Season</Dropdown.Item>
                                <Dropdown.Item href='/records/game'>Game</Dropdown.Item>
                                <Dropdown.Item href='/hof'>HOF</Dropdown.Item>
                                <Dropdown.Item href='/records/coach'>Coaching</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </div>
                </div>
            )}
        </>
    )

}


export default MenuNav;