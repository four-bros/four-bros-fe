import * as React from 'react';
import style from './hofButtons.module.scss';


type Props = {
    setTableType: Function;
    defaultTable: string;
}


const HofButtons = ({ setTableType, defaultTable }: Props) => {

    const [activeBtn, setActiveBtn] = React.useState<string>(defaultTable);

    const handleClick = (tableType: string) => {
        setTableType(tableType);
        setActiveBtn(tableType);
    }


    return (
        <div className={style.btnContainer}>
            <button className={activeBtn === 'total'? style.activeBtn : style.btn} onClick={() => handleClick('total')}>Total</button>
            <button className={activeBtn === 'offense'? style.activeBtn : style.btn} onClick={() => handleClick('offense')}>Offense</button>
            <button className={activeBtn === 'defense'? style.activeBtn : style.btn} onClick={() => handleClick('defense')}>Defense</button>
            <button className={activeBtn === 'special'? style.activeBtn : style.btn} onClick={() => handleClick('special')}>Special Teams</button>
        </div>
    )

}


export default HofButtons;