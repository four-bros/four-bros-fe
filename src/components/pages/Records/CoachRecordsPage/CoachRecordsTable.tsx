import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import { CoachSeasonRecord, CoachData } from 'api/records/coachRecords';
import style from './coachRecords.module.scss';


type Props = {
    coachData: CoachData
}


const CoachRecordsTable = ( { coachData }: Props ) => {

    const getCoachOverview = (coachData: CoachData): [
        (string | number)[],
        (string | number)[],
        (string | number)[]
    ] => {
        return [
            ['Wins', coachData.wins],
            ['Losses', coachData.losses],
            ['Titles', coachData.titles],
        ];
    };

    const convertTitle = (title: boolean): string => {

        if (title) {
            return 'Yes'
        } else {
            return 'No'
        }

    }
    

    const getTableContent = (seasonRecordsArr: CoachSeasonRecord[]) => {

        return (
            <>
                {seasonRecordsArr.map((season: any, idx: number) => {
                    return (
                        <React.Fragment
                            key={`row-${idx}-${season.team_id}`}
                        >
                            <Table.Row>
                                <Table.Cell
                                    key={`cell-${season.year}`}
                                >
                                    {season.year}
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${season.team_name}`}
                                >
                                    <Link
                                        to={`/team/${season.team_id}`}
                                        className={style.tableLink}
                                    >
                                        {season.team_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell
                                    key={`cell-${season.wins}-${season.losses}`}
                                >
                                    {season.wins}-{season.losses}
                                </Table.Cell>

                                <Table.Cell
                                    key={`cell-${idx}-${season.title}`}
                                >
                                    {convertTitle(season.title)}
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
            {coachData && (
                <div className={style.tableContainer}>
                    <TableContainer title={coachData.name} small>
                        <LargeTable contents={getCoachOverview(coachData)} />
                    </TableContainer>
                    <TableContainer title={'Season Records'}>
                        <LargeTable
                            header={['Year','Team', 'Record', 'Title']}
                            contents={getTableContent(coachData.season_records)}
                        />
                    </TableContainer>
                </div>
            )}
        </div>
    )
}

export default CoachRecordsTable;
