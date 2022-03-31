import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';

import {
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

type Props = {
    leaders: RecordsInfo;
};

const StatsTable = ({ leaders }: Props) => {
    const [tableType, setTableType] = React.useState('offense');

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
                                    {leader.player_details.team_name}
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
                    {leaders.passing.pass_yards.length > 0 && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={passingHeaders}
                                contents={fieldRows(
                                    leaders.passing.pass_yards,
                                    passingFields,
                                    'passing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.rushing.rush_yards.length > 0 && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={rushingHeaders}
                                contents={fieldRows(
                                    leaders.rushing.rush_yards,
                                    rushingFields,
                                    'rushing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.receiving.rec_yards.length > 0 && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={receivingHeaders}
                                contents={fieldRows(
                                    leaders.receiving.rec_yards,
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
                    {leaders.defense.total_tkls.length > 0 && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={defendingHeaders}
                                contents={fieldRows(
                                    leaders.defense.total_tkls,
                                    defendingFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.defense.ints_made.length > 0 && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={defensiveTurnoverHeaders}
                                contents={fieldRows(
                                    leaders.defense.ints_made,
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
                    {leaders.kick_return.kr_yards.length > 0 && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={returnsHeaders}
                                contents={fieldRows(
                                    leaders.kick_return.kr_yards,
                                    kickReturnFields,
                                    'kick_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punt_return.pr_yards.length > 0 && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={returnsHeaders}
                                contents={fieldRows(
                                    leaders.punt_return.pr_yards,
                                    puntReturnFields,
                                    'punt_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.kicking.fg_made.length > 0 && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={kickingHeaders}
                                contents={fieldRows(
                                    leaders.kicking.fg_made,
                                    kickingFields,
                                    'kicking_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {leaders.punting.punt_avg.length > 0 && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={puntingHeaders}
                                contents={fieldRows(
                                    leaders.punting.punt_avg,
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

export default StatsTable;
