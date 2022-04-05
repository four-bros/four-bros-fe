import * as React from 'react';
import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import { Commit } from 'api/recruiting';
import { getTableHeader } from 'utils';

type Props = {
    commitsArr: Commit[]
}

const RecruitingTable = ( {commitsArr}: Props ) => {

    const team: string = commitsArr[0].school;

    const fieldRows = (commitsArr: Commit[]) => {

        return (
            <>
                {commitsArr.map((commit: any, idx: number) => {

                    return (
                        <React.Fragment
                            key={`row-${idx}-${commit.rank}`}
                        >
                            <Table.Row>
                                <Table.Cell
                                    key={`cell-${commit.rank}`}
                                >
                                    {commit.rank}
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${commit.name}`}
                                >
                                    {commit.name}
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${idx}-${commit.position}`}
                                >
                                    {commit.position}
                                </Table.Cell>

                                <Table.Cell
                                    key={`cell-${idx}-${commit.stars}`}
                                >
                                    {commit.stars}
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
        {commitsArr && (
            <TableContainer title={getTableHeader(team)}>
                <LargeTable
                    header={['Rank', 'Name', 'Pos.', 'Stars']}
                    contents={fieldRows(
                        commitsArr
                    )}
                />
            </TableContainer>
            )}
        </>
    )

}

export default RecruitingTable;
