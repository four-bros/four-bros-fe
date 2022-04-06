import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopReceivingHeaders,
    desktopDefenseHeaders,
    desktopKickReturnHeaders,
    desktopPuntReturnHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
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
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileReceivingHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKickReturnHeaders,
    mobilePuntReturnHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
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
import { getTopThree } from '../tableTransform';
import { getFields } from 'utils';
import type {
    SingleTeamLeaders,
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
import style from '../teamsPage.module.scss';
import useMediaQuery from '../../../../hooks/useMediaQuery';

type Props = {
    leaders: SingleTeamLeaders;
    infoType: string;
};

const TeamLeaders = ({ leaders, infoType }: Props) => {
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');

    const fieldRows = (
        leadersArr:
            | Defense
            | KickReturn
            | Kicking
            | Passing
            | PuntReturn
            | Punting
            | Receiving
            | Rushing
            | Total,
        fields: Set<string>,
        fieldType: string
    ) => {
        let conditionalLeaders;

        if (infoType === 'overview') {
            conditionalLeaders = getTopThree(leadersArr);
        } else {
            conditionalLeaders = leadersArr;
        }

        return (
            <>
                {conditionalLeaders.map((leader: any, idx: number) => {
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
                                {fieldsArr.map(
                                    (fieldValue: number, idx: number) => {
                                        const flooredValue = Math.floor(fieldValue)
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
            <div className={style.btnContainer}>
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

            {tableType === 'offense' && (
                <>
                    {leaders.passing.length > 0 && mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={mobilePassingHeaders}
                                contents={fieldRows(
                                    leaders.passing,
                                    mobilePassingFields,
                                    'passing_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {leaders.passing.length > 0 && !mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={desktopPassingHeaders}
                                contents={fieldRows(
                                    leaders.passing,
                                    desktopPassingFields,
                                    'passing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.rushing.length > 0 && mobile && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={mobileRushingHeaders}
                                contents={fieldRows(
                                    leaders.rushing,
                                    mobileRushingFields,
                                    'rushing_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {leaders.rushing.length > 0 && !mobile && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={desktopRushingHeaders}
                                contents={fieldRows(
                                    leaders.rushing,
                                    desktopRushingFields,
                                    'rushing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.receiving.length > 0 && mobile && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={mobileReceivingHeaders}
                                contents={fieldRows(
                                    leaders.receiving,
                                    mobileReceivingFields,
                                    'receiving_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {leaders.receiving.length > 0 && !mobile && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={desktopReceivingHeaders}
                                contents={fieldRows(
                                    leaders.receiving,
                                    desktopReceivingFields,
                                    'receiving_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'defense' && (
                <>
                    {leaders.defense.length > 0 && mobile && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={mobileTackleHeaders}
                                contents={fieldRows(
                                    leaders.defense,
                                    mobileTackleFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.defense.length > 0 && mobile && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={mobileDefToHeaders}
                                contents={fieldRows(
                                    leaders.defense,
                                    mobileDefToFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.defense.length > 0 && !mobile && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={desktopDefenseHeaders}
                                contents={fieldRows(
                                    leaders.defense,
                                    desktopDefenseFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'special' && (
                <>
                    {leaders.kick_return.length > 0 && mobile && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={mobileKickReturnHeaders}
                                contents={fieldRows(
                                    leaders.kick_return,
                                    mobileKickReturnFields,
                                    'kick_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.kick_return.length > 0 && !mobile && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={desktopKickReturnHeaders}
                                contents={fieldRows(
                                    leaders.kick_return,
                                    desktopKickReturnFields,
                                    'kick_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punt_return.length > 0 && mobile && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={mobilePuntReturnHeaders}
                                contents={fieldRows(
                                    leaders.punt_return,
                                    mobilePuntReturnFields,
                                    'punt_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punt_return.length > 0 && !mobile && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={desktopPuntReturnHeaders}
                                contents={fieldRows(
                                    leaders.punt_return,
                                    desktopPuntReturnFields,
                                    'punt_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.kicking.length > 0 && mobile && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={mobileKickingHeaders}
                                contents={fieldRows(
                                    leaders.kicking,
                                    mobileKickingFields,
                                    'kicking_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {leaders.kicking.length > 0 && !mobile && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={desktopKickingHeaders}
                                contents={fieldRows(
                                    leaders.kicking,
                                    desktopKickingFields,
                                    'kicking_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punting.length > 0 && mobile && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={mobilePuntingHeaders}
                                contents={fieldRows(
                                    leaders.punting,
                                    mobilePuntingFields,
                                    'punting_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {leaders.punting.length > 0 && !mobile && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={desktopPuntingHeaders}
                                contents={fieldRows(
                                    leaders.punting,
                                    desktopPuntingFields,
                                    'punting_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}
        </>
    );
};

export default TeamLeaders;
