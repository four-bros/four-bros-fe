import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { handleCaretIcon } from 'utils/components';
import style from '../../navBar.module.scss';


type Props = {
	isRecordsSelected: boolean,
	setIsRecordsSelected: Function,
}


const TeamDropdown = ({ 
	isRecordsSelected, 
	setIsRecordsSelected }: Props) => {

	const [isTeamSelected, setIsTeamSelected] = React.useState<boolean>(false);
	const btnClass = isTeamSelected ? style.btnSelected : style.dropdownBtn;

	return (
		<div className={style.navDropDownContainer}>
			<button 
				className={btnClass} 
				onClick={() => setIsTeamSelected(!isTeamSelected)}
			>
				Team{handleCaretIcon(isTeamSelected)}
			</button>
			{isTeamSelected && (
				<div className={style.subDropdownContainer}>
					<NavLink
						to ='/records/game/team'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
					>
						Game
					</NavLink>
					<NavLink
						to ='/records/season/team'
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

export default TeamDropdown;