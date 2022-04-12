import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import { getTableHeader } from 'utils';
import style from './teamRecords.module.scss';
import { TeamRecord, TeamRecordData } from 'api/records/teamRecords';


type Props = {
    recordData: TeamRecordData,
    recordCategory: string,
    record: string
    fieldName: string
}

const TeamRecordsTable = ( {recordData, recordCategory, record, fieldName}: Props ) => {

    const fieldRows = (
        recordData: TeamRecordData,
        recordCategory: string,
        record: string,
        fieldName: string
    ) => {

        let recordArr: TeamRecord[]

        recordArr = recordData[recordCategory][record]

        return (
            <>
                {recordArr.map((leader: any, idx: number) => {

                    const value = leader['team_stats'][fieldName]
                    const year = leader['team_stats']['year']

                    return (
                        <React.Fragment
                            key={`row-${idx}-${leader.team_info.id}`}
                        >
                            <Table.Row>
                                <Table.Cell
                                    key={`cell-${idx+1}`}
                                >
                                    {idx+1}
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${leader.team_info.id}`}
                                >
                                    <Link
                                        to={`/team/${leader.team_info.id}`}
                                        className={style.tableLink}
                                    >
                                        {leader.team_info.team_name}
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
            {recordData && (<TableContainer title={getTableHeader(fieldName)}>
                <LargeTable
                    header={['#', 'Team', 'Year', getTableHeader(fieldName)]}
                    contents={fieldRows(
                        recordData,
                        recordCategory,
                        record,
                        fieldName
                    )}
                />
            </TableContainer>
            )}
        </div>
    )
}

export default TeamRecordsTable;