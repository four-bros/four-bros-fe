import style from './loadingSpinner.module.scss';

const LoadingSpinner = () => {
	return (
		<>
			<h1>Loading...</h1>
			<div className={style.spin}></div>
		</>
	)
}

export default LoadingSpinner;
