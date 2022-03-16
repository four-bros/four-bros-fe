import * as React from 'react';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';

import {
    playerPassingHeaders,
    playerRushingHeaders,
    playerRecHeaders,
    playerTackleHeaders,
    playerDefToHeaders,
    playerKrHeaders,
    playerPrHeaders,
    playerKickingHeaders,
    playerPuntingHeaders,
    passingFields,
    rushingFields,
    receivingFields,
    tackleFields,
    defToFields,
    kickReturnFields,
    puntReturnFields,
    kickingFields,
    puntingFields,
} from '../tableTransform';
import { PlayerStatsStructure } from 'api/players';
import { getFields } from 'utils';

type Props = {
    player: PlayerStatsStructure;
};

const PlayerStats = ({ player }: Props) => {
    const [tableType, setTableType] = React.useState('offense');
    const [statsType, setStatsType] = React.useState('season');
    let stats: any;

    if (statsType === 'season') {
        stats = player.season_stats;
    } else {
        stats = player.career_stats;
    }

    const fieldRows = (fields: Set<string>, fieldType: string) => {
        console.log(stats);
        const values = Array.from(getFields(stats[fieldType], fields));
        console.log(values);

        return (
            <>
                <Table.Row>
                    {values.map((value, idx) => (
                        <Table.Cell key={`${value}-${idx}`}>{value}</Table.Cell>
                    ))}
                </Table.Row>
            </>
        );
    };

    return (
        <div>
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
            <hr />
            <div className='buttonsContainer'>
                <Button
                    name='season'
                    active={statsType === 'season'}
                    onClick={() => setStatsType('season')}
                >
                    Season
                </Button>
                <Button
                    name='career'
                    active={statsType === 'career'}
                    onClick={() => setStatsType('career')}
                >
                    Career
                </Button>
            </div>

            {tableType === 'offense' && (
                <>
                    {stats.passing && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={playerPassingHeaders}
                                contents={fieldRows(passingFields, 'passing')}
                            />
                        </TableContainer>
                    )}

                    {stats.rushing && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={playerRushingHeaders}
                                contents={fieldRows(rushingFields, 'rushing')}
                            />
                        </TableContainer>
                    )}

                    {stats.receiving && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={playerRecHeaders}
                                contents={fieldRows(
                                    receivingFields,
                                    'receiving'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}
            {tableType === 'defense' && (
                <>
                    {stats.defensive && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={playerTackleHeaders}
                                contents={fieldRows(tackleFields, 'defensive')}
                            />
                        </TableContainer>
                    )}

                    {stats.defensive && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={playerDefToHeaders}
                                contents={fieldRows(defToFields, 'defensive')}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'special' && (
                <>
                    {stats.kick_return && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={playerKrHeaders}
                                contents={fieldRows(
                                    kickReturnFields,
                                    'kick_return'
                                )}
                            />
                        </TableContainer>
                    )}

                    {stats.punt_return && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={playerPrHeaders}
                                contents={fieldRows(
                                    puntReturnFields,
                                    'punt_return'
                                )}
                            />
                        </TableContainer>
                    )}

                    {stats.kicking && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={playerKickingHeaders}
                                contents={fieldRows(kickingFields, 'kicking')}
                            />
                        </TableContainer>
                    )}

                    {stats.punting && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={playerPuntingHeaders}
                                contents={fieldRows(puntingFields, 'punting')}
                            />
                        </TableContainer>
                    )}
                </>
            )}
        </div>
    );
};

export default PlayerStats;
