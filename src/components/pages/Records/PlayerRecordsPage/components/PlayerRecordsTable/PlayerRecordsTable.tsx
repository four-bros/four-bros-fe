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
import {  RecordsInfo } from 'api/records/playerRecords';
import { TableContainer, LargeTable } from 'components/common';
import { getTableHeader } from 'utils';
import globalStyle from '../../../../../../styles/global.module.scss';


type Props = {
    recordInfo: RecordsInfo,
    genCategory: string,
    record: string
    statCategory: string,
    fieldName: string
}

const PlayerRecordsTable = ( {recordInfo, genCategory, record, statCategory, fieldName}: Props ) => {

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
                                    key={`cell-${idx+1}`}
                                >
                                    {idx+1}
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${leader.player_details.id}`}
                                >
                                    <Link
                                        to={`/players/${leader.player_details.id}`}
                                        className={globalStyle.tableLink}
                                    >
                                        {leader.player_details.first_name}{' '}
                                        {leader.player_details.last_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${leader.player_details.team_id}-${leader.player_details.team_name}`}
                                >
                                    <Link
                                        to={`/team/${leader.player_details.team_id}`}
                                        className={globalStyle.tableLink}
                                    >
                                        {leader.player_details.team_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${idx}-${year}`}
                                >
                                    {year}
                                </Table.Cell>

                                <Table.Cell
                                    key={`cell-${idx}-${value}`}
                                >
                                    {Math.floor(value).toLocaleString('en-US')}
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
            {recordInfo && (
            <TableContainer title={getTableHeader(fieldName)} small>
                <LargeTable
                    header={['#', 'Name', 'Team', 'Year', getTableHeader(fieldName)]}
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

export default PlayerRecordsTable;
