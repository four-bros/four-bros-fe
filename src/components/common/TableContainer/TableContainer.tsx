import React from 'react';
import style from './tableContainer.module.scss';

type Props = {
    title: string;
    children: React.ReactNode;
    small?: boolean;
};

const TableContainer = ({ title, children, small }: Props) => {
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
