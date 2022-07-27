import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
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
	const icon = isPlayerSelected ? <Icon name='caret up' size='small' /> : <Icon name='caret down' size='small' />;

	return (
		<div className={style.navDropDownContainer}>
			<button 
				className={btnClass}
				onClick={() => setIsPlayerSelected(!isPlayerSelected)}
			>
				Player{icon}
			</button>
			
			{isPlayerSelected && (
				<div className={style.subDropdownContainer}>
					<NavLink
						to ='/records/player/career'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						Career
					</NavLink>
					<NavLink
						to ='/records/player/game'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						Game
					</NavLink>
					<NavLink
						to ='/records/player/season'
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