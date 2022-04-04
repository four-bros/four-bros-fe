import * as React from 'react';
import { Button, Table } from 'semantic-ui-react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopRecHeaders,
    desktopDefHeaders,
    desktopKrHeaders,
    desktopPrHeaders,
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
    mobileRecHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKrHeaders,
    mobilePrHeaders,
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

import { PlayerStatsStructure } from 'api/players';
import { getFields } from 'utils';

type Props = {
    player: PlayerStatsStructure;
};

const Stats = ({ player }: Props) => {
    const [tableType, setTableType] = React.useState('offense');
    const [statsType, setStatsType] = React.useState('season');
    const mobile = useMediaQuery('(max-width: 767px)');
    let stats: any;

    if (statsType === 'season') {
        stats = player.season_stats;
    } else {
        stats = player.career_stats;
    }

    const fieldRows = (fields: Set<string>, fieldType: string) => {
        const values = Array.from(getFields(stats[fieldType], fields));

        return (
            <>
                <Table.Row>
                    {values.map((value, idx) => (
                        <Table.Cell key={`${value}-${idx}`}>
                            {Math.floor(value)}
                        </Table.Cell>
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
                    {stats.passing && mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={mobilePassingHeaders}
                                contents={fieldRows(mobilePassingFields,'passing')}
                            />
                        </TableContainer>
                    )}
                    {stats.passing && !mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={desktopPassingHeaders}
                                contents={fieldRows(desktopPassingFields,'passing')}
                            />
                        </TableContainer>
                    )}

                    {stats.rushing && mobile && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={mobileRushingHeaders}
                                contents={fieldRows(mobileRushingFields, 'rushing')}
                            />
                        </TableContainer>
                    )}
                    {stats.rushing && !mobile && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={desktopRushingHeaders}
                                contents={fieldRows(desktopRushingFields, 'rushing')}
                            />
                        </TableContainer>
                    )}

                    {stats.receiving && mobile && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={mobileRecHeaders}
                                contents={fieldRows(mobileReceivingFields, 'receiving'
                                )}
                            />
                        </TableContainer>
                    )}
                    {stats.receiving && !mobile && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={desktopRecHeaders}
                                contents={fieldRows(desktopReceivingFields, 'receiving'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}
            {tableType === 'defense' && (
                <>
                    {stats.defensive && mobile && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={mobileTackleHeaders}
                                contents={fieldRows(mobileTackleFields, 'defensive')}
                            />
                        </TableContainer>
                    )}

                    {stats.defensive && mobile && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={mobileDefToHeaders}
                                contents={fieldRows(mobileDefToFields, 'defensive')}
                            />
                        </TableContainer>
                    )}
                    {stats.defensive && !mobile && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={desktopDefHeaders}
                                contents={fieldRows(desktopDefenseFields, 'defensive')}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'special' && (
                <>
                    {stats.kick_return && mobile && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={mobileKrHeaders}
                                contents={fieldRows(mobileKickReturnFields, 'kick_return'
                                )}
                            />
                        </TableContainer>
                    )}
                    {stats.kick_return && !mobile && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={desktopKrHeaders}
                                contents={fieldRows(desktopKickReturnFields, 'kick_return'
                                )}
                            />
                        </TableContainer>
                    )}

                    {stats.punt_return && mobile && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={mobilePrHeaders}
                                contents={fieldRows(mobilePuntReturnFields, 'punt_return'
                                )}
                            />
                        </TableContainer>
                    )}
                    {stats.punt_return && !mobile && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={desktopPrHeaders}
                                contents={fieldRows(desktopPuntReturnFields, 'punt_return'
                                )}
                            />
                        </TableContainer>
                    )}

                    {stats.kicking && mobile && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={mobileKickingHeaders}
                                contents={fieldRows(mobileKickingFields, 'kicking')}
                            />
                        </TableContainer>
                    )}
                    {stats.kicking && !mobile && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={desktopKickingHeaders}
                                contents={fieldRows(desktopKickingFields, 'kicking')}
                            />
                        </TableContainer>
                    )}

                    {stats.punting && mobile && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={mobilePuntingHeaders}
                                contents={fieldRows(mobilePuntingFields, 'punting')}
                            />
                        </TableContainer>
                    )}
                    {stats.punting && !mobile && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={desktopPuntingHeaders}
                                contents={fieldRows(desktopPuntingFields, 'punting')}
                            />
                        </TableContainer>
                    )}
                </>
            )}
        </div>
    );
};

export default Stats;
