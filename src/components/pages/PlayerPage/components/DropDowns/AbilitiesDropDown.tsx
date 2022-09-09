import * as React from 'react';
import style from './dropDown.module.scss';
import { handleCaretIcon } from 'utils/components';


type Props = {
	setInfoType: Function;
	setAbilityType: Function;
}


const AbilitiesDropDown = ({ setInfoType, setAbilityType }: Props) => {

	const [isSelected, setIsSelected] = React.useState<boolean>(false);
	const btnClass = isSelected ? style.btnSelected : style.dropdownBtn;

	const handleClick = (abilityType: string) => {
		setInfoType('abilities');
		setAbilityType(abilityType);
		setIsSelected(!isSelected)
	}


	return (
		<div className={style.dropDownContainer}>
			<button
				className={btnClass}
				onClick={() => setIsSelected(!isSelected)}
			>
				Abilities{handleCaretIcon(isSelected)}
			</button>

			{isSelected && (
				<div className={style.btnContainer}>
					<button className={style.btn} onClick={() => handleClick('athletic')}>Athletic</button>
					<button className={style.btn} onClick={() => handleClick('offensive')}>Offensive</button>
					<button className={style.btn} onClick={() => handleClick('defensive')}>Defensive</button>
				</div>
			)}
		</div>
	)

}


export default AbilitiesDropDown;
