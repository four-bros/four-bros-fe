import style from './loadingSpinner.module.scss';

const LoadingSpinner = () => {
	return (
		<div className={style.spinContainer}>
			<h1 className={style.loading}>Loading...</h1>
			<div className={style.spin}></div>
		</div>
	)
}

export default LoadingSpinner;
