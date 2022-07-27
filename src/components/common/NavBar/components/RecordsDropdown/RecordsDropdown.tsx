import * as React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../navBar.module.scss';
import PlayerDropdown from '../PlayerDropdown/PlayerDropdown';
import TeamDropdown from '../TeamDropdown/TeamDropdown';


const RecordsDropdown = () => {

	const [isRecordsSelected, setIsRecordsSelected] = React.useState<boolean>(false);

	return (
		<div className={style.navDropDownContainer}>
			<button className={style.dropdownBtn} onClick={() => setIsRecordsSelected(!isRecordsSelected)}>
                Records
            </button>

			{isRecordsSelected && (
				<div className={style.dropDownContainer}>
					<PlayerDropdown
						isRecordsSelected={isRecordsSelected}
						setIsRecordsSelected={setIsRecordsSelected}
					/>

					<TeamDropdown 
						isRecordsSelected={isRecordsSelected}
						setIsRecordsSelected={setIsRecordsSelected}
					/>

					<NavLink
						to ='/records/coach'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						Coach
					</NavLink>

					<NavLink
						to='/hof'
						className={style.dropdownLink}
						onClick={() => setIsRecordsSelected(!isRecordsSelected)}
						
					>
						HOF
					</NavLink>
				</div>
			)}
		</div>
	)
}


export default RecordsDropdown;