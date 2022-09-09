import * as React from 'react';
import style from './dropDown.module.scss';
import { handleCaretIcon } from 'utils/components';


type Props = {
	setInfoType: Function;
	setStatsType: Function;
}


const StatsDropDown = ({ setInfoType, setStatsType }: Props) => {

	const [isSelected, setIsSelected] = React.useState<boolean>(false);
	const btnClass = isSelected ? style.btnSelected : style.dropdownBtn;

	const handleClick = (statType: string): void => {
		setInfoType('stats');
		setStatsType(statType);
		setIsSelected(!isSelected);
	}

	return (
		<div className={style.dropDownContainer}>

			<button
				className={btnClass}
				onClick={() => setIsSelected(!isSelected)}
			>
				Stats{handleCaretIcon(isSelected)}
			</button>

			{isSelected && (
				<div className={style.btnContainer}>
					<button className={style.btn} onClick={() => handleClick('season')}>Season</button>
					<button className={style.btn} onClick={() => handleClick('career')}>Career</button>
				</div>
			)}
		</div>
	)

}


export default StatsDropDown;