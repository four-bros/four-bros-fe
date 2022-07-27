import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
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
				Team<Icon name='caret down' size='small' />
			</button>
			{isTeamSelected && (
				<div className={style.subDropdownContainer}>
					<NavLink
						to ='/records/team'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
					>
						Game
					</NavLink>
					<NavLink
						to ='/records/team'
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