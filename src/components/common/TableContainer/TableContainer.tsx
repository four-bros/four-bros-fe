import style from './tableContainer.module.scss';

const TableContainer = ({ title, children, small }: any) => {
    return (
        <>
            {small ? (
                <div className={style.smallTableContainer}>
                    <div className={style.tableTitle}>
                        <h2>{title}</h2>
                    </div>
                    {children}
                </div>
            ) : (
                <div className={style.tableContainer}>
                    <div className={style.tableTitle}>
                        <h2>{title}</h2>
                    </div>
                    {children}
                </div>
            )}
        </>
    );
};

export default TableContainer;
