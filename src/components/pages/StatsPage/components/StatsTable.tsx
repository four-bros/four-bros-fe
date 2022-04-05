import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
// import useMediaQuery from '@mui/material/useMediaQuery';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopTotalHeaders,
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopReceivingHeaders,
    desktopDefenseHeaders,
    desktopKickReturnHeaders,
    desktopPuntReturnHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
    desktopTotalFields,
    desktopPassingFields,
    desktopRushingFields,
    desktopReceivingFields,
    desktopDefenseFields,
    desktopKickReturnFields,
    desktopPuntReturnFields,
    desktopKickingFields,
    desktopPuntingFields,
} from './desktopTableTransform';
import {
    mobileTotalHeaders,
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileReceivingHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKickReturnHeaders,
    mobilePuntReturnHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
    mobileTotalFields,
    mobilePassingFields,
    mobileRushingFields,
    mobileReceivingFields,
    mobileTackleFields,
    mobileDefToFields,
    mobileKickReturnFields,
    mobilePuntReturnFields,
    mobileKickingFields,
    mobilePuntingFields,
} from './mobileTableTransform';

import { getFields } from 'utils';

import type {
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
import { RecordsInfo } from 'api/records';
import style from '../statsPage.module.scss';

type Props = {
    leaders: RecordsInfo;
};

const StatsTable = ({ leaders }: Props) => {
    const [tableType, setTableType] = React.useState('total');
    // const mobile = useMediaQuery('(max-width: 767px)');

    const fieldRows = (
        leadersArr:
            | Defense[]
            | KickReturn[]
            | Kicking[]
            | Passing[]
            | PuntReturn[]
            | Punting[]
            | Receiving[]
            | Rushing[]
            | Total[],
        fields: Set<string>,
        fieldType: string
    ) => {
        return (
            <>
                {leadersArr.map((leader: any, idx: number) => {
                    const otherFields = getFields(leader[fieldType], fields);
                    const fieldsArr = Array.from(otherFields);

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
                                    key={`cell-${leader.player_details.team_name}-${leader.player_details.id}`}
                                >
                                    <Link
                                        to={`/team/${leader.player_details.team_id}`}
                                    >
                                        {leader.player_details.team_name}
                                    </Link>
                                </Table.Cell>
                                {fieldsArr.map(
                                    (fieldValue: number, idx: number) => {
                                        const flooredValue =
                                            Math.floor(fieldValue);
                                        return (
                                            <Table.Cell
                                                key={`cell-${idx}-${fieldValue}`}
                                            >
                                                {flooredValue}
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
            <div className='buttonsContainer'>
                <Button
                    name='total'
                    active={tableType === 'total'}
                    onClick={() => setTableType('total')}
                >
                    Total
                </Button>
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
                    name='special'
                    active={tableType === 'special'}
                    onClick={() => setTableType('special')}
                >
                    Special Teams
                </Button>
            </div>

            <div className={style.tableContainer}>
                {tableType === 'total' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {/* {leaders.total.yards.length > 0 && mobile && (
                            <TableContainer title='Total Offense'>
                                <LargeTable
                                    header={mobileTotalHeaders}
                                    contents={fieldRows(
                                        leaders.total.yards,
                                        mobileTotalFields,
                                        'total_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}
                        {/* If desktop, render desktop tables */}
                        {/* {leaders.total.yards.length > 0 && !mobile && (
                            <TableContainer title='Total Offense'>
                                <LargeTable
                                    header={desktopTotalHeaders}
                                    contents={fieldRows(
                                        leaders.total.yards,
                                        desktopTotalFields,
                                        'total_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}
                    </>
                )}

                {tableType === 'offense' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {/* {leaders.passing.pass_yards.length > 0 && mobile && (
                            <TableContainer title='Passing'>
                                <LargeTable
                                    header={mobilePassingHeaders}
                                    contents={fieldRows(
                                        leaders.passing.pass_yards,
                                        mobilePassingFields,
                                        'passing_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.rushing.rush_yards.length > 0 && mobile && (
                            <TableContainer title='Rushing'>
                                <LargeTable
                                    header={mobileRushingHeaders}
                                    contents={fieldRows(
                                        leaders.rushing.rush_yards,
                                        mobileRushingFields,
                                        'rushing_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.receiving.rec_yards.length > 0 && mobile && (
                            <TableContainer title='Receiving'>
                                <LargeTable
                                    header={mobileReceivingHeaders}
                                    contents={fieldRows(
                                        leaders.receiving.rec_yards,
                                        mobileReceivingFields,
                                        'receiving_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* If desktop, render desktop tables */}
                        {/* {leaders.passing.pass_yards.length > 0 && !mobile && (
                            <TableContainer title='Passing'>
                                <LargeTable
                                    header={desktopPassingHeaders}
                                    contents={fieldRows(
                                        leaders.passing.pass_yards,
                                        desktopPassingFields,
                                        'passing_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.rushing.rush_yards.length > 0 && !mobile && (
                            <TableContainer title='Rushing'>
                                <LargeTable
                                    header={desktopRushingHeaders}
                                    contents={fieldRows(
                                        leaders.rushing.rush_yards,
                                        desktopRushingFields,
                                        'rushing_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.receiving.rec_yards.length > 0 && !mobile && (
                            <TableContainer title='Receiving'>
                                <LargeTable
                                    header={desktopReceivingHeaders}
                                    contents={fieldRows(
                                        leaders.receiving.rec_yards,
                                        desktopReceivingFields,
                                        'receiving_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}
                    </>
                )}

                {tableType === 'defense' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {/* {leaders.defense.total_tkls.length > 0 && mobile && (
                            <TableContainer title='Defense'>
                                <LargeTable
                                    header={mobileTackleHeaders}
                                    contents={fieldRows(
                                        leaders.defense.total_tkls,
                                        mobileTackleFields,
                                        'defensive_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.defense.ints_made.length > 0 && mobile && (
                            <TableContainer title='Turnovers'>
                                <LargeTable
                                    header={mobileDefToHeaders}
                                    contents={fieldRows(
                                        leaders.defense.ints_made,
                                        mobileDefToFields,
                                        'defensive_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}
                        {/* If desktop, render desktop tables */}
                        {/* {leaders.defense.ints_made.length > 0 && !mobile && (
                            <TableContainer title='Defense'>
                                <LargeTable
                                    header={desktopDefenseHeaders}
                                    contents={fieldRows(
                                        leaders.defense.ints_made,
                                        desktopDefenseFields,
                                        'defensive_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}
                    </>
                )}

                {tableType === 'special' && (
                    <>
                        {/* If mobile, render mobile tables */}
                        {/* {leaders.kick_return.kr_yards.length > 0 && mobile && (
                            <TableContainer title='Kick Return'>
                                <LargeTable
                                    header={mobileKickReturnHeaders}
                                    contents={fieldRows(
                                        leaders.kick_return.kr_yards,
                                        mobileKickReturnFields,
                                        'kick_return_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.punt_return.pr_yards.length > 0 && mobile && (
                            <TableContainer title='Punt Return'>
                                <LargeTable
                                    header={mobilePuntReturnHeaders}
                                    contents={fieldRows(
                                        leaders.punt_return.pr_yards,
                                        mobilePuntReturnFields,
                                        'punt_return_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.kicking.fg_made.length > 0 && mobile && (
                            <TableContainer title='Kicking'>
                                <LargeTable
                                    header={mobileKickingHeaders}
                                    contents={fieldRows(
                                        leaders.kicking.fg_made,
                                        mobileKickingFields,
                                        'kicking_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.punting.punt_avg.length > 0 && mobile && (
                            <TableContainer title='Punting'>
                                <LargeTable
                                    header={mobilePuntingHeaders}
                                    contents={fieldRows(
                                        leaders.punting.punt_avg,
                                        mobilePuntingFields,
                                        'punting_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* If desktop, render desktop tables */}
                        {/* {leaders.kick_return.kr_yards.length > 0 && !mobile && (
                            <TableContainer title='Kick Return'>
                                <LargeTable
                                    header={desktopKickReturnHeaders}
                                    contents={fieldRows(
                                        leaders.kick_return.kr_yards,
                                        desktopKickReturnFields,
                                        'kick_return_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.punt_return.pr_yards.length > 0 && !mobile && (
                            <TableContainer title='Punt Return'>
                                <LargeTable
                                    header={desktopPuntReturnHeaders}
                                    contents={fieldRows(
                                        leaders.punt_return.pr_yards,
                                        desktopPuntReturnFields,
                                        'punt_return_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.kicking.fg_made.length > 0 && !mobile && (
                            <TableContainer title='Kicking'>
                                <LargeTable
                                    header={desktopKickingHeaders}
                                    contents={fieldRows(
                                        leaders.kicking.fg_made,
                                        desktopKickingFields,
                                        'kicking_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}

                        {/* {leaders.punting.punt_avg.length > 0 && !mobile && (
                            <TableContainer title='Punting'>
                                <LargeTable
                                    header={desktopPuntingHeaders}
                                    contents={fieldRows(
                                        leaders.punting.punt_avg,
                                        desktopPuntingFields,
                                        'punting_stats'
                                    )}
                                />
                            </TableContainer>
                        )} */}
                    </>
                )}
            </div>
        </>
    );
};

export default StatsTable;
