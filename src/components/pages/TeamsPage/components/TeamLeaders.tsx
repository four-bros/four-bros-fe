import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';

import {
    getFields,
    getTopThree,
    passingHeaders,
    passingFields,
    rushingHeaders,
    rushingFields,
    receivingHeaders,
    receivingFields,
    defendingHeaders,
    defendingFields,
    defensiveTurnoverHeaders,
    defensiveTurnoverFields,
    returnsHeaders,
    kickReturnFields,
    puntReturnFields,
    kickingHeaders,
    kickingFields,
    puntingHeaders,
    puntingFields,
} from '../tableTransform';

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

type Props = {
    leaders: SingleTeamLeaders;
    infoType: string;
};

const TeamLeaders = ({ leaders, infoType }: Props) => {
    const [tableType, setTableType] = React.useState('offense');

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
                                    (fieldValue: string, idx: number) => {
                                        return (
                                            <Table.Cell
                                                key={`cell-${idx}-${fieldValue}`}
                                            >
                                                {fieldValue}
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
                    {leaders.passing.length > 0 && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={passingHeaders}
                                contents={fieldRows(
                                    leaders.passing,
                                    passingFields,
                                    'passing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.rushing.length > 0 && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={rushingHeaders}
                                contents={fieldRows(
                                    leaders.rushing,
                                    rushingFields,
                                    'rushing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.receiving.length > 0 && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={receivingHeaders}
                                contents={fieldRows(
                                    leaders.receiving,
                                    receivingFields,
                                    'receiving_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'defense' && (
                <>
                    {leaders.defense.length > 0 && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={defendingHeaders}
                                contents={fieldRows(
                                    leaders.defense,
                                    defendingFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.defense.length > 0 && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={defensiveTurnoverHeaders}
                                contents={fieldRows(
                                    leaders.defense,
                                    defensiveTurnoverFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'special' && (
                <>
                    {leaders.kick_return.length > 0 && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={returnsHeaders}
                                contents={fieldRows(
                                    leaders.kick_return,
                                    kickReturnFields,
                                    'kick_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punt_return.length > 0 && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={returnsHeaders}
                                contents={fieldRows(
                                    leaders.punt_return,
                                    puntReturnFields,
                                    'punt_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.kicking.length > 0 && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={kickingHeaders}
                                contents={fieldRows(
                                    leaders.kicking,
                                    kickingFields,
                                    'kicking_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punting.length > 0 && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={puntingHeaders}
                                contents={fieldRows(
                                    leaders.punting,
                                    puntingFields,
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
