import * as React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../navBar.module.scss';


const SeasonDropDown = () => {

	const [isSeasonSelected, setIsSeasonSelected] = React.useState<boolean>(false);

	return (
		<div className={style.navDropDownContainer}>
			<button className={style.dropdownBtn} onClick={() => setIsSeasonSelected(!isSeasonSelected)}>
				Season
			</button>
			
			{isSeasonSelected && (
				<div className={style.dropDownContainer}>
					<NavLink 
						to='/season/leaders/players'
						className={style.dropdownLink}
						onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
					>
						Leaders
					</NavLink>
					<NavLink
						to='/season/rankings'
						className={style.dropdownLink}
						onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
					>
						Rankings
					</NavLink>
					<NavLink
						to="/season/recruiting"
						className={style.dropdownLink}
						onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
					>
						Recruiting
					</NavLink>
					<NavLink
					to='/season/stats'
					className={style.dropdownLink}
					onClick={() => {setIsSeasonSelected(!isSeasonSelected)}}
					>
						Stats
					</NavLink>
				</div>
			)}
		</div>

	)

}

export default SeasonDropDown;
