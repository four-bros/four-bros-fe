import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import { TeamDetails } from 'api/teams';
import style from './rankingsPage.module.scss';


type Props = {
    poll: string,
    rankingsArr: TeamDetails[]
}


const BcsTable = ( { poll, rankingsArr }: Props ) => {

    const fieldRows = (
        poll: string,
        rankingsArr: TeamDetails[]
    ) => {


        return (
            <>
                {rankingsArr.map((leader: any, idx: number) => {

                    const fieldName: string = `${poll}_rank`;
                    const record: string = `${leader.wins}-${leader.losses}`;

                    return (
                        <React.Fragment
                            key={`row-${idx}-${leader.id}`}
                        >
                            <Table.Row>
                                <Table.Cell
                                    key={`cell-${leader.fieldName}`}
                                >
                                    {leader[fieldName]}
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${leader.id}`}
                                >
                                    <Link
                                        to={`/teams/${leader.id}`}
                                        className={style.tableLink}
                                    >
                                        {leader.team_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${idx}-${record}`}
                                >
                                    {record}
                                </Table.Cell>
                            </Table.Row>
                        </React.Fragment>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            {rankingsArr && (<TableContainer title='BCS'>
                <LargeTable
                    header={['Rank', 'Team', 'Record']}
                    contents={fieldRows(
                        poll,
                        rankingsArr
                    )}
                />
            </TableContainer>
            )}
        </div>
    )

}

export default BcsTable;