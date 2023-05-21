import * as React from 'react';
import { Button, Table } from 'semantic-ui-react';

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
    desktopTotalFields,
    desktopTotalHeaders,
} from '../desktopTableTransform';
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
    mobileTotalFields,
    mobileTotalHeaders,
} from '../mobileTableTransform';
import { PlayerStatsStructure } from '../../../../../interfaces/Player';
import { getFields } from 'utils';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import style from './playerStats.module.scss';
import {
    DefensiveStats,
    KickingStats,
    KickReturnStats,
    PassingStats,
    PuntingStats,
    PuntReturnsStats,
    ReceivingStats,
    RushingStats,
    TotalStats
} from '../../../../../interfaces/Stats';


type Props = {
    player: PlayerStatsStructure;
    statsType: string;
};

const Stats = ({ player, statsType }: Props) => {
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');
    let stats: any;
    const gameStats: any = player.game_stats; 
    const statsHeader: string = statsType === 'season' ? 'Season Stats' : 'Career Stats'

    if (statsType === 'season') {
        stats = player.season_stats;
    } else {
        stats = player.career_stats;
    }

    // Set Week as table header for season
    if (statsType === 'season') {
        mobileTotalHeaders[0] = 'Wk'
        mobilePassingHeaders[0] = 'Wk'
        mobileRushingHeaders[0] = 'Wk'
        mobileRecHeaders[0] = 'Wk'
        mobileTackleHeaders[0] = 'Wk'
        mobileDefToHeaders[0] = 'Wk'
        mobileKrHeaders[0] = 'Wk'
        mobilePrHeaders[0] = 'Wk'
        mobileKickingHeaders[0] = 'Wk'
        mobilePuntingHeaders[0] = 'Wk'
    
        desktopTotalHeaders[0] = 'Week'
        desktopPassingHeaders[0] = 'Week'
        desktopRushingHeaders[0] = 'Week'
        desktopRecHeaders[0] = 'Week'
        desktopDefHeaders[0] = 'Week'
        desktopKrHeaders[0] = 'Week'
        desktopPrHeaders[0] = 'Week'
        desktopKickingHeaders[0] = 'Week'
        desktopPuntingHeaders[0] = 'Week'
    }

    // Set games played as the table header for career
    if (statsType === 'career') {
        mobileTotalHeaders[0] = 'GP'
        mobilePassingHeaders[0] = 'GP'
        mobileRushingHeaders[0] = 'GP'
        mobileRecHeaders[0] = 'GP'
        mobileTackleHeaders[0] = 'GP'
        mobileDefToHeaders[0] = 'GP'
        mobileKrHeaders[0] = 'GP'
        mobilePrHeaders[0] = 'GP'
        mobileKickingHeaders[0] = 'GP'
        mobilePuntingHeaders[0] = 'GP'

        desktopTotalHeaders[0] = 'Games'
        desktopPassingHeaders[0] = 'Games'
        desktopRushingHeaders[0] = 'Games'
        desktopRecHeaders[0] = 'Games'
        desktopDefHeaders[0] = 'Games'
        desktopKrHeaders[0] = 'Games'
        desktopPrHeaders[0] = 'Games'
        desktopKickingHeaders[0] = 'Games'
        desktopPuntingHeaders[0] = 'Games'
    }
    

    const determineYearOrValue = (value: number, idx: number, statsType: string, mobile: boolean): number | string => {
        if (statsType === 'season') {
            if (idx === 0) {
                return mobile ? 'Yr' : 'Year';
            } else {
                return Math.floor(value).toLocaleString('en-US');
            }
        }
        else {
            return Math.floor(value).toLocaleString('en-US')
        }
    }

    const determineGameValue = (value: number, idx: number, i: number, arrLength: number): number | string => {
        if (idx === 0 && i === 0) {
            return arrLength - idx;
        }
        else {
            if (!value && value !== 0) {
                return '-';
            }
            return Math.floor(value).toLocaleString('en-US');
        }
    }

    const fieldRows = (fields: Set<string>, fieldType: string) => {
        const values = Array.from(getFields(stats[fieldType], fields));
        return (
            <>
                <Table.Row>
                    {values.map((value, idx) => (
                        <Table.Cell key={`${value}-${idx}`}>
                            {determineYearOrValue(value, idx, statsType, mobile)}
                        </Table.Cell>
                    ))}
                </Table.Row>
            </>
        );
    };

    const gameFieldRows = (
        gamesArr:
            | DefensiveStats[]
            | KickReturnStats[]
            | KickingStats[]
            | PassingStats[]
            | PuntReturnsStats[]
            | PuntingStats[]
            | ReceivingStats[]
            | RushingStats[]
            | TotalStats[],
        fields: Set<string>,
        fieldType: string
    ) => {

        return (
            <>
                {gamesArr.map((leader: any, idx: number) => {
                    const otherFields = getFields(leader, fields);
                    const fieldsArr = Array.from(otherFields);

                    return (
                        <React.Fragment key={`row-${idx}`}>
                            <Table.Row>
                                {fieldsArr.map(
                                    (fieldValue: number, i: number) => {
                                        return (
                                            <Table.Cell
                                                key={`cell-${i}-${fieldValue}`}
                                            >
                                                {determineGameValue(fieldValue, idx, i, gamesArr.length)}
                                            </Table.Cell>
                                        );
                                    }
                                )}
                            </Table.Row>
                        </React.Fragment>
                    );
                })}
                {fieldRows(fields, fieldType)}
            </>
        );
    };


    const careerStatsTable = (
        <>
            {tableType === 'offense' && (
                <>
                    {stats.total && mobile && (
                        <TableContainer title='Total'>
                            <LargeTable
                                header={mobileTotalHeaders}
                                contents={fieldRows(mobileTotalFields, 'total')}
                            />
                        </TableContainer>
                    )}
                    {stats.total && !mobile && (
                        <TableContainer title='Total'>
                            <LargeTable
                                header={desktopTotalHeaders}
                                contents={fieldRows(desktopTotalFields, 'total')}
                            />
                        </TableContainer>
                    )}

                    {stats.passing && mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={mobilePassingHeaders}
                                contents={fieldRows(mobilePassingFields, 'passing')}
                            />
                        </TableContainer>
                    )}
                    {stats.passing && !mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={desktopPassingHeaders}
                                contents={fieldRows(desktopPassingFields, 'passing')}
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
                        <TableContainer title='Defense'>
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
            )
            })
        </>
    );

    const seasonStatsTable = (
        <>
        { tableType === 'offense' && (
            <>
                {gameStats.total && gameStats.total.length > 0 && mobile && (
                    <TableContainer title='Total Offense'>
                        <LargeTable
                            header={mobileTotalHeaders}
                            contents={gameFieldRows(
                                gameStats.total,
                                mobileTotalFields,
                                'total'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.total && gameStats.total.length > 0 && !mobile && (
                    <TableContainer title='Total Offense'>
                        <LargeTable
                            header={desktopTotalHeaders}
                            contents={gameFieldRows(
                                gameStats.total,
                                desktopTotalFields,
                                'total'
                            )}
                        />
                    </TableContainer>
                )}

                {gameStats.passing && gameStats.passing.length > 0 && mobile && (
                    <TableContainer title='Passing'>
                        <LargeTable
                            header={mobilePassingHeaders}
                            contents={gameFieldRows(
                                gameStats.passing,
                                mobilePassingFields,
                                'passing'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.passing && gameStats.passing.length > 0 && !mobile && (
                    <TableContainer title='Passing'>
                        <LargeTable
                            header={desktopPassingHeaders}
                            contents={gameFieldRows(
                                gameStats.passing,
                                desktopPassingFields,
                                'passing'
                            )}
                        />
                    </TableContainer>
                )}

                {gameStats.rushing && gameStats.rushing.length > 0 && mobile && (
                    <TableContainer title='Rushing'>
                        <LargeTable
                            header={mobileRushingHeaders}
                            contents={gameFieldRows(
                                gameStats.rushing,
                                mobileRushingFields,
                                'rushing'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.rushing && gameStats.rushing.length > 0 && !mobile && (
                    <TableContainer title='Rushing'>
                        <LargeTable
                            header={desktopRushingHeaders}
                            contents={gameFieldRows(
                                gameStats.rushing,
                                desktopRushingFields,
                                'rushing'
                            )}
                        />
                    </TableContainer>
                )}

                {gameStats.receiving && gameStats.receiving.length > 0 && mobile && (
                    <TableContainer title='Receiving'>
                        <LargeTable
                            header={mobileRecHeaders}
                            contents={gameFieldRows(
                                gameStats.receiving,
                                mobileReceivingFields,
                                'receiving'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.receiving && gameStats.receiving.length > 0 && !mobile && (
                    <TableContainer title='Receiving'>
                        <LargeTable
                            header={desktopRecHeaders}
                            contents={gameFieldRows(
                                gameStats.receiving,
                                desktopReceivingFields,
                                'receiving'
                            )}
                        />
                    </TableContainer>
                )}
            </>
        )}
        {tableType === 'defense' && (
            <>
                {gameStats.defensive && gameStats.defensive.length > 0 && mobile && (
                    <TableContainer title='Tackles'>
                        <LargeTable
                            header={mobileTackleHeaders}
                            contents={gameFieldRows(
                                gameStats.defensive,
                                mobileTackleFields,
                                'defensive'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.defensive && gameStats.defensive.length > 0 && mobile && (
                    <TableContainer title='Def. Turnovers'>
                        <LargeTable
                            header={mobileDefToHeaders}
                            contents={gameFieldRows(
                                gameStats.defensive,
                                mobileDefToFields,
                                'defensive'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.defensive && gameStats.defensive.length > 0 && !mobile && (
                    <TableContainer title='Defense'>
                        <LargeTable
                            header={desktopDefHeaders}
                            contents={gameFieldRows(
                                gameStats.defensive,
                                desktopDefenseFields,
                                'defensive'
                            )}
                        />
                    </TableContainer>
                )}
            </>
        )}

        {tableType === 'special' && (
            <>
                {gameStats.kick_return && gameStats.kick_return.length > 0 && mobile && (
                    <TableContainer title='Kick Return'>
                        <LargeTable
                            header={mobileKrHeaders}
                            contents={gameFieldRows(
                                gameStats.kick_return,
                                mobileKickReturnFields,
                                'kick_return'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.kick_return && gameStats.kick_return.length > 0 && !mobile && (
                    <TableContainer title='Kick Return'>
                        <LargeTable
                            header={desktopKrHeaders}
                            contents={gameFieldRows(
                                gameStats.kick_return,
                                desktopKickReturnFields,
                                'kick_return'
                            )}
                        />
                    </TableContainer>
                )}

                {gameStats.punt_return && gameStats.punt_return.length > 0 && mobile && (
                    <TableContainer title='Punt Return'>
                        <LargeTable
                            header={mobilePrHeaders}
                            contents={gameFieldRows(
                                gameStats.punt_return,
                                mobilePuntReturnFields,
                                'punt_return'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.punt_return && gameStats.punt_return.length > 0 && !mobile && (
                    <TableContainer title='Punt Return'>
                        <LargeTable
                            header={desktopPrHeaders}
                            contents={gameFieldRows(
                                gameStats.punt_return,
                                desktopPuntReturnFields,
                                'punt_return'
                            )}
                        />
                    </TableContainer>
                )}

                {gameStats.kicking && gameStats.kicking.length > 0 && mobile && (
                    <TableContainer title='Kicking'>
                        <LargeTable
                            header={mobileKickingHeaders}
                            contents={gameFieldRows(
                                gameStats.kicking,
                                mobileKickingFields,
                                'kicking'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.kicking && gameStats.kicking.length > 0 && !mobile && (
                    <TableContainer title='Kicking'>
                        <LargeTable
                            header={desktopKickingHeaders}
                            contents={gameFieldRows(
                                gameStats.kicking,
                                desktopKickingFields,
                                'kicking'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.punting && gameStats.punting.length > 0 && mobile && (
                    <TableContainer title='Punting'>
                        <LargeTable
                            header={mobilePuntingHeaders}
                            contents={gameFieldRows(
                                gameStats.punting,
                                mobilePuntingFields,
                                'punting'
                            )}
                        />
                    </TableContainer>
                )}
                {gameStats.punting && gameStats.punting.length > 0 && !mobile && (
                    <TableContainer title='Punting'>
                        <LargeTable
                            header={desktopPuntingHeaders}
                            contents={gameFieldRows(
                                gameStats.punting,
                                desktopPuntingFields,
                                'punting'
                            )}
                        />
                    </TableContainer>
                )}
            </>
        )}
    </>
)



    return (
        <div>
            <h1 className={style.header}>{statsHeader}</h1>

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
            
            {statsType === 'season' ? seasonStatsTable : careerStatsTable}
            
        </div>
    );
};

export default Stats;
