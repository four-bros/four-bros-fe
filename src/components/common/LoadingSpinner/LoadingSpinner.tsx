import style from './loadingSpinner.module.scss';

const LoadingSpinner = () => {
	return (
		<div className={style.spinContainer}>
			<div className={style.spin}></div>
		</div>
	)
}

export default LoadingSpinner;
