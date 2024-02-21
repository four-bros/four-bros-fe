import * as React from 'react';
import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import { getTableHeader } from 'utils';
import { Commit } from 'interfaces/Commits';
import style from './recruitingTable.module.scss';

type Props = {
    commitsArr: Commit[];
    tableHeaders: string[];
    tableSize: 'small' | 'large';
    compact: boolean;
    unstackable: boolean;
}

const RecruitingTable = ({ commitsArr, tableHeaders, tableSize, compact, unstackable }: Props) => {

    return (
        <Table className={style.table} size={tableSize} compact={compact} unstackable={unstackable}>
            <Table.Header>
                <Table.Row>
                    {tableHeaders.map((text: string, idx: number) => (
                        <Table.HeaderCell key={`${text}-${idx}`} className={style.tableHeader}>
                            {text}
                        </Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <React.Fragment>
                {commitsArr.length && (
                    commitsArr.map((commit: any, idx: number) => {
                        return (
                                <Table.Row>
                                    <Table.Cell key={`cell-${commit.rank}`} className={style.tableCell}>
                                        {commit.rank}
                                    </Table.Cell>
                                    <Table.Cell key={`cell-${commit.name}`} className={style.tableCell}>
                                        {commit.name}
                                    </Table.Cell>
                                    <Table.Cell key={`cell-${idx}-${commit.position}`} className={style.tableCell}>
                                        {commit.position}
                                    </Table.Cell>
                                    <Table.Cell key={`cell-${idx}-${commit.stars}`} className={style.tableCell}>
                                        {commit.stars}
                                    </Table.Cell>
                                </Table.Row>
                        )
                    }))}
                </React.Fragment>
            </Table.Body>
        </Table>
    )
}

export default RecruitingTable;
