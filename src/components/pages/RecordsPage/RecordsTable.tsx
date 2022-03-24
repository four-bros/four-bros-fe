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
    TotalStats,
    PlayerDetails,
} from 'api/teams';
import { 
    DefensiveRecordsCategories,
    KickingRecordsCategories,
    KickReturnRecordsCategories,
    PassingRecordsCategories,
    PuntReturnRecordsCategories,
    PuntingRecordsCategories,
    RecordsInfo,
    TotalRecordsCategories
} from 'api/records';
import { TableContainer, LargeTable } from 'components/common';


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
            {recordInfo && (<TableContainer title={fieldName}>
                <LargeTable
                    header={['Name', 'Team', fieldName]}
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