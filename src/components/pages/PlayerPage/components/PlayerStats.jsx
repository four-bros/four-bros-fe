import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';

import {
    playerPassingHeaders,
    getPlayerPassingStats,
    playerRushingHeaders,
    getPlayerRushingStats,
    playerRecHeaders,
    getPlayerRecStats,
    playerTackleHeaders,
    getPlayerTackleStats,
    playerDefToHeaders,
    getPlayerDefToStats,
    playerKrHeaders,
    getPlayerKrStats,
    playerPrHeaders,
    getPlayerPrStats,
    playerKickingHeaders,
    getPlayerKickingStats,
    playerPuntingHeaders,
    getPlayerPuntingStats
} from '../tableTransform';


const PlayerStats = ({ player }) => {

    const [tableType, setTableType] = React.useState('offense');
    const [statsType, setStatsType] = React.useState('season');
    let stats;

    if (statsType === 'season') {
        stats = player.season_stats
    } else {
        stats = player.career_stats
    }

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
            <hr/>
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
                                contents={
                                    (statsType === 'season' && player.season_stats.passing)
                                        ? getPlayerPassingStats(player.season_stats.passing) 
                                        : getPlayerPassingStats(player.career_stats.passing)
                                }
                            />
                        </TableContainer>
                    )}

                    {stats.rushing && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={playerRushingHeaders}
                                contents={
                                    (statsType === 'season' && player.season_stats.rushing)
                                        ? getPlayerRushingStats(player.season_stats.rushing) 
                                        : getPlayerRushingStats(player.career_stats.rushing)
                                }
                            />
                        </TableContainer>
                    )}
                    {stats.receiving && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={playerRecHeaders}
                                contents={
                                    (statsType === 'season' && player.season_stats.receiving)
                                        ? getPlayerRecStats(player.season_stats.receiving) 
                                        : getPlayerRecStats(player.career_stats.receiving)
                                }
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
                                    contents={
                                        (statsType === 'season' && player.season_stats.defensive)
                                        ? getPlayerTackleStats(player.season_stats.defensive)
                                        : getPlayerTackleStats(player.career_stats.defensive)
                                }
                                />
                        </TableContainer>
                    )}
                    {stats.defensive && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={playerDefToHeaders}
                                contents={
                                    (statsType === 'season' && player.season_stats.defensive)
                                        ? getPlayerDefToStats(player.season_stats.defensive)
                                        : getPlayerDefToStats(player.career_stats.defensive)
                                }
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
                                contents={
                                    (statsType === 'season' && player.season_stats.kick_return)
                                        ? getPlayerKrStats(player.season_stats.kick_return)
                                        : getPlayerKrStats(player.career_stats.kick_return)
                                }
                            />
                        </TableContainer>
                    )}
                    {stats.punt_return && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={playerPrHeaders}
                                contents={
                                    (statsType === 'season' && player.season_stats.punt_return)
                                        ? getPlayerPrStats(player.season_stats.punt_return)
                                        : getPlayerPrStats(player.career_stats.punt_return)
                                }
                            />
                        </TableContainer>
                    )}
                {stats.kicking && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={playerKickingHeaders}
                                contents={
                                    (statsType === 'season' && player.season_stats.kicking)
                                        ? getPlayerKickingStats(player.season_stats.kicking)
                                        : getPlayerKickingStats(player.career_stats.kicking)
                                }
                            />
                        </TableContainer>
                    )}
                    {stats.punting && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={playerPuntingHeaders}
                                contents={
                                    (statsType === 'season' && player.season_stats.punting)
                                        ? getPlayerPuntingStats(player.season_stats.punting)
                                        : getPlayerPuntingStats(player.career_stats.punting)
                                }
                            />
                        </TableContainer>
                    )}
                </>
            )}
        </div>
    );
};

export default PlayerStats;
