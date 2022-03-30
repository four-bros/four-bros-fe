import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import { TeamDetails } from 'api/teams';
import { getTableHeader } from 'utils';


type Props = {
    poll: string,
    rankingsArr: TeamDetails[]
}


const RankingsTable = ( { poll, rankingsArr }: Props ) => {

    const rankedArr: TeamDetails[] = rankingsArr.slice(0, 25);
    const others: TeamDetails[] = rankingsArr.slice(25, rankingsArr.length);

    const fieldRows = (
        poll: string,
        rankingsArr: TeamDetails[]
    ) => {


        return (
            <>
                {rankingsArr.map((leader: any, idx: number) => {

                    const fieldName: string = `${poll}_rank`;
                    const points: string = `${poll}_points`
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
                                    >
                                        {leader.team_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${idx}-${record}`}
                                >
                                    {record}
                                </Table.Cell>

                                <Table.Cell
                                    key={`cell-${idx}-${points}`}
                                >
                                    {leader[points]}
                                </Table.Cell>
                            </Table.Row>
                        </React.Fragment>
                    );
                })}
            </>
        );
    };

    return (
        <>
        {rankingsArr && (
            <TableContainer title={getTableHeader(poll)}>
                <LargeTable
                    header={['Rank', 'Team', 'Record', 'Pts']}
                    contents={fieldRows(
                        poll,
                        rankedArr
                    )}
                />
            </TableContainer>
            )}
        {others && (
            <TableContainer title='Others Receiving Votes'>
                <LargeTable
                    header={['Rank', 'Team', 'Record', 'Pts']}
                    contents={fieldRows(
                        poll,
                        others
                    )}
                />
            </TableContainer>
            )}
        </>
    )

}

export default RankingsTable;