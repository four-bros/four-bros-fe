import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopDefenseFields,
    desktopOffenseHeaders,
    desktopOffenseFields,
    desktopDefenseHeaders,
    desktopReturnHeaders,
    desktopReturnFields
} from './desktopTableTransform';
import {
    mobileReturnHeaders,
    mobileReturnFields,
    mobileTotalOffHeaders,
    mobileTotalOffFields,
    mobileOffenseFields,
    mobileOffenseHeaders,
    mobileDefenseHeaders,
    mobileDefenseFields,
} from './mobileTableTransform';
import { getFields } from 'utils';
import type { TeamDetails, UserTeamsStats, UserTeamsStatsData } from 'interfaces/Teams';
import style from '../userTeamsStats.module.scss';
import globalStyle from '../../../../../../styles/global.module.scss';
import useMediaQuery from '../../../../../../hooks/useMediaQuery';


type Props = {
    userTeamsStats: UserTeamsStats;
    userTeamDetails: TeamDetails[];
};

const UserTeamsStatsTable = ({ userTeamsStats, userTeamDetails }: Props) => {
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');

    const fieldRows = (
        userTeamsStatsData: UserTeamsStatsData[],
        fields: Set<string>,
    ) => {

        return (
            <>
                {userTeamsStatsData.map((team: any, idx: number) => {
                    const teamId = Number(Object.keys(team)[0]);
                    const teamStats = Object.values(team)[0];
                    const teamDetails = userTeamDetails.find(team => team.id === teamId);
                    const teamName = teamDetails?.team_name;
                    const otherFields = getFields(teamStats, fields);
                    const fieldsArr = Array.from(otherFields);

                    return (
                        <React.Fragment key={`row-${idx}-${teamId}`}>
                            <Table.Row>
                                <Table.Cell key={`cell-${teamId}`}>
                                    <Link
                                        to={`/team/${teamId}`}
                                        className={globalStyle.tableLink}
                                    >
                                        {teamName}
                                    </Link>
                                </Table.Cell>
                                {fieldsArr.map(
                                    (fieldValue: number, idx: number) => {
                                        return (
                                            <Table.Cell key={`cell-${idx}-${fieldValue}`}>
                                                {Math.floor(fieldValue).toLocaleString('en-US')}
                                            </Table.Cell>
                                        );
                                    }
                                )}
                            </Table.Row>
                        </React.Fragment>
                    );
                })}
            </>
        );
    };

    return (
        <>
            <h1 className={style.header}>User Teams Season Stats</h1>
            <div className='buttonsContainer'>
                <Button
                    name='offense'
                    active={tableType === 'offense'}
                    onClick={() => setTableType('offense')}
                >
                    Offense
                </Button>
                <Button
                    name='defense'
                    active={tableType === 'defense'}
                    onClick={() => setTableType('defense')}
                >
                    Defense
                </Button>
                <Button
                    name='specialTeams'
                    active={tableType === 'specialTeams'}
                    onClick={() => setTableType('specialTeams')}
                >
                    Special Teams
                </Button>
            </div>

            <div className={style.tableContainer}>
                {tableType === 'offense' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {userTeamsStats.data.length > 0 && mobile && (
                            <>
                                <TableContainer title='Total'>
                                    <LargeTable
                                        header={mobileTotalOffHeaders}
                                        contents={fieldRows(
                                            userTeamsStats.data,
                                            mobileTotalOffFields,
                                        )}
                                    />
                                </TableContainer>
                                <TableContainer title='Offense'>
                                    <LargeTable
                                        header={mobileOffenseHeaders}
                                        contents={fieldRows(
                                            userTeamsStats.data,
                                            mobileOffenseFields,
                                        )}
                                    />
                                    </TableContainer>
                                </>
                        )}
                        {/* If not mobile, render desktop tables */}
                        {userTeamsStats.data.length > 0 && !mobile && (
                            <TableContainer title='Offense'>
                                <LargeTable
                                    header={desktopOffenseHeaders}
                                    contents={fieldRows(
                                        userTeamsStats.data,
                                        desktopOffenseFields,
                                    )}
                                />
                            </TableContainer>
                        )}
                    </>
                )}

                {tableType === 'defense' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {userTeamsStats.data.length > 0 && mobile && (
                            <TableContainer title='Defense'>
                                <LargeTable
                                    header={mobileDefenseHeaders}
                                    contents={fieldRows(
                                        userTeamsStats.data,
                                        mobileDefenseFields,
                                    )}
                                />
                            </TableContainer>
                        )}
                        {/* If desktop, render desktop tables */}
                        {userTeamsStats.data.length > 0 && !mobile && (
                            <TableContainer title='Defense'>
                                <LargeTable
                                    header={desktopDefenseHeaders}
                                    contents={fieldRows(
                                        userTeamsStats.data,
                                        desktopDefenseFields,
                                    )}
                                />
                            </TableContainer>
                        )}
                    </>
                )} 

                {tableType === 'specialTeams' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {userTeamsStats.data.length > 0 && mobile && (
                            <TableContainer title='Return Stats'>
                                <LargeTable
                                    header={mobileReturnHeaders}
                                    contents={fieldRows(
                                        userTeamsStats.data,
                                        mobileReturnFields,
                                    )}
                                />
                            </TableContainer>
                        )}
                        {/* If mobile, render mobile tables */}
                        {userTeamsStats.data.length > 0 && !mobile && (
                            <TableContainer title='Return Stats'>
                                <LargeTable
                                    header={desktopReturnHeaders}
                                    contents={fieldRows(
                                        userTeamsStats.data,
                                        desktopReturnFields,
                                    )}
                                />
                            </TableContainer>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default UserTeamsStatsTable;
