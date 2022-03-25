import * as React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import style from './navBar.module.scss';

// type HTMLElementEvent<T extends HTMLElement> = Event & {
//     target: T;
//   }

type Props = {
    typeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// const DropDownLinks = ({typeHandler}: Props) => {
const DropDownLinks = ({typeHandler}: Props) => {


    // const navigate = useNavigate();

    // const handleCareer = (recordType: string): void => {
    //     // setRecordType(recordType);
    //     navigate(`/records/${recordType}`, {replace: true});
    // }

    return (
        <div className={style.navDropDownContainer}>
            
            <button value='career' onClick={(e) => typeHandler(e)}>Career</button>
            <button value='game' onClick={(e) => typeHandler(e)}>Game</button>
            <button value='season' onClick={(e) => typeHandler(e)}>Season</button>
            {/* <NavLink to="/records/career" className={style.navLink}>Career</NavLink> */}
            {/* <NavLink to="/records/game" className={style.navLink}>Game</NavLink>
            <NavLink to="/records/season" className={style.navLink}>Season</NavLink> */}
        </div>
    )
}

export default DropDownLinks;