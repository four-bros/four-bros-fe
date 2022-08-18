import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { handleCaretIcon } from 'utils/components';
import style from '../../navBar.module.scss';


type Props = {
	isRecordsSelected: boolean,
	setIsRecordsSelected: Function,
}


const PlayerDropdown = ({ 
	isRecordsSelected, 
	setIsRecordsSelected }: Props) => {

	const [isPlayerSelected, setIsPlayerSelected] = React.useState<boolean>(false);
	const btnClass = isPlayerSelected ? style.btnSelected : style.dropdownBtn;
	
	return (
		<div className={style.navDropDownContainer}>
			<button 
				className={btnClass}
				onClick={() => setIsPlayerSelected(!isPlayerSelected)}
			>
				Player{handleCaretIcon(isPlayerSelected)}
			</button>
			
			{isPlayerSelected && (
				<div className={style.subDropdownContainer}>
					<NavLink
						to ='/records/career/player'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						Career
					</NavLink>
					<NavLink
						to ='/records/game/player'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						Game
					</NavLink>
					<NavLink
						to ='/records/season/player'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						Season
					</NavLink>
				</div>
			)}
		</div>
	)

}

export default PlayerDropdown;