import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import {
    Defense,
    KickReturn,
    Kicking,
    Passing,
    PuntReturn,
    Punting,
    Receiving,
    Rushing,
    Total,
} from 'api/teams';
import {  RecordsInfo } from 'api/records';
import { TableContainer, LargeTable } from 'components/common';
import { getTableHeader } from 'utils';


type Props = {
    recordInfo: RecordsInfo,
    genCategory: string,
    record: string
    statCategory: string,
    fieldName: string
}

const RecordsTable = ( {recordInfo, genCategory, record, statCategory, fieldName}: Props ) => {

    const fieldRows = (
        recordInfo: RecordsInfo,
        genCategory: string,
        record: string,
        statCategory: string,
        fieldName: string
    ) => {

        let recordArr:
        | Defense[]
        | KickReturn[]
        | Kicking[]
        | Passing[]
        | PuntReturn[]
        | Punting[]
        | Receiving[]
        | Rushing[]
        | Total[]

        recordArr = recordInfo[genCategory][record]

        return (
            <>
                {recordArr.map((leader: any, idx: number) => {

                    const value = leader[statCategory][fieldName]
                    const year = leader[statCategory]['year']

                    return (
                        <React.Fragment
                            key={`row-${idx}-${leader.player_details.id}`}
                        >
                            <Table.Row>
                                <Table.Cell
                                    key={`cell-${leader.player_details.id}`}
                                >
                                    <Link
                                        to={`/players/${leader.player_details.id}`}
                                    >
                                        {leader.player_details.first_name}{' '}
                                        {leader.player_details.last_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${leader.player_details.team_id}-${leader.player_details.team_name}`}
                                >
                                    {leader.player_details.team_name}
                                </Table.Cell>

                                <Table.Cell
                                    key={`cell-${idx}-${year}`}
                                >
                                    {year}
                                </Table.Cell>

                                <Table.Cell
                                    key={`cell-${idx}-${value}`}
                                >
                                    {value}
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
            {recordInfo && (<TableContainer title={getTableHeader(fieldName)}>
                <LargeTable
                    header={['Name', 'Team', 'Years', getTableHeader(fieldName)]}
                    contents={fieldRows(
                        recordInfo,
                        genCategory,
                        record,
                        statCategory,
                        fieldName
                    )}
                />
            </TableContainer>
            )}
        </div>
    )

}

export default RecordsTable;