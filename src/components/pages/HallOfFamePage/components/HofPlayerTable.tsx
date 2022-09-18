import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

import { PlayerHofStructure } from 'api/players';
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
} from 'api/teams';
import useMediaQuery from 'hooks/useMediaQuery';
import * as React from 'react';
import { getFields } from 'utils';
import { LargeTable, TableContainer } from 'components/common';
import { mobileDefToFields, mobileDefToHeaders, mobileKickReturnFields, mobileKickReturnHeaders, mobilePassingFields, mobilePassingHeaders, mobilePuntReturnFields, mobilePuntReturnHeaders, mobileReceivingFields, mobileReceivingHeaders, mobileRushingFields, mobileRushingHeaders, mobileTackleFields, mobileTackleHeaders, mobileTotalFields, mobileTotalHeaders } from './mobileTableTransform';
import style from './hofPlayerTable.module.scss';
import { desktopDefenseFields, desktopDefenseHeaders, desktopKickReturnFields, desktopKickReturnHeaders, desktopPassingFields, desktopPassingHeaders, desktopPuntReturnFields, desktopPuntReturnHeaders, desktopReceivingFields, desktopReceivingHeaders, desktopRushingFields, desktopRushingHeaders, desktopTotalFields, desktopTotalHeaders } from './desktopTableTransform';


type Props = {
    seasonStats: PlayerHofStructure['season_stats'];
    careerStats: PlayerHofStructure['career_stats'];
};


const HofPlayerTable = ({ seasonStats, careerStats }: Props) => {
    const [tableType, setTableType] = React.useState('total');
    const mobile = useMediaQuery('(max-width: 767px)');


    const careerFieldRow = (fields: Set<string>, fieldType: string) => {
        const values = Array.from(getFields(careerStats[fieldType], fields));

        return (
            <Table.Row>
                {values.map((value, idx) => (
                    <Table.Cell key={`${value}-${idx}`}>
                        {idx === 0? 'Total' : Math.floor(value)}
                    </Table.Cell>
                ))}
            </Table.Row>
        );
    };


    const seasonFieldRows = (
        seasonsArr:
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
                {seasonsArr.map((leader: any, idx: number) => {
                    const otherFields = getFields(leader, fields);
                    const fieldsArr = Array.from(otherFields);

                    return (
                        <React.Fragment key={`row-${idx}`}>
                            <Table.Row>
                                {fieldsArr.map(
                                    (fieldValue: number, idx: number) => {
                                        return (
                                            <Table.Cell
                                                key={`cell-${idx}-${fieldValue}`}
                                            >
                                                {Math.floor(fieldValue)}
                                            </Table.Cell>
                                        );
                                    }
                                )}
                            </Table.Row>
                        </React.Fragment>
                    );
                })}
                {careerFieldRow(fields, fieldType)}
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
                        {seasonStats.total && seasonStats.total.length > 0 && mobile && (
                            <TableContainer title='Total Offense'>
                                <LargeTable
                                    header={mobileTotalHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.total,
                                        mobileTotalFields,
                                        'total'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {/* If desktop, render desktop tables */}
                        {seasonStats.total && seasonStats.total.length > 0 && !mobile && (
                            <TableContainer title='Total Offense'>
                                <LargeTable
                                    header={desktopTotalHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.total,
                                        desktopTotalFields,
                                        'total'
                                    )}
                                />
                            </TableContainer>
                        )}
                    </>
                )}

                {tableType === 'offense' && (
                    <>
                        {/* Passing  */}
                        {/* If mobile, render mobile tables */}
                        {careerStats.passing && careerStats.passing.pass_att > 0 &&
                         seasonStats.passing && mobile && (
                            <TableContainer title='Passing'>
                                <LargeTable
                                    header={mobilePassingHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.passing,
                                        mobilePassingFields,
                                        'passing'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {/* If desktop, render desktop tables */}
                        {careerStats.passing && careerStats.passing.pass_att > 0 &&
                         seasonStats.passing && !mobile && (
                            <TableContainer title='Passing'>
                                <LargeTable
                                    header={desktopPassingHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.passing,
                                        desktopPassingFields,
                                        'passing'
                                    )}
                                />
                            </TableContainer>
                        )}
                        
                        {/* Rushing */}
                        {/* If mobile, render mobile tables */}
                        {careerStats.rushing && careerStats.rushing.rush_att > 0 &&
                         seasonStats.rushing && mobile && (
                            <TableContainer title='Rushing'>
                                <LargeTable
                                    header={mobileRushingHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.rushing,
                                        mobileRushingFields,
                                        'rushing'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {/* If desktop, render desktop tables */}
                        {careerStats.rushing && careerStats.rushing.rush_att > 0 &&
                         seasonStats.rushing && !mobile && (
                            <TableContainer title='Rushing'>
                                <LargeTable
                                    header={desktopRushingHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.rushing,
                                        desktopRushingFields,
                                        'rushing'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {/* Receiving */}
                        {/* If mobile, render mobile tables */}
                        {careerStats.receiving && careerStats.receiving.receptions > 0 &&
                            seasonStats.receiving && mobile && (
                            <TableContainer title='Receiving'>
                                <LargeTable
                                    header={mobileReceivingHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.receiving,
                                        mobileReceivingFields,
                                        'receiving'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {/* If desktop, render desktop tables */}
                        {careerStats.receiving && careerStats.receiving.receptions > 0 &&
                         seasonStats.receiving && !mobile && (
                            <TableContainer title='Receiving'>
                                <LargeTable
                                    header={desktopReceivingHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.receiving,
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
                        {/* If mobile, render mobile tables */}
                        {careerStats.defensive && careerStats.defensive.total_tkls > 0 &&
                         seasonStats.defensive && mobile && (
                        <>
                            <TableContainer title='Defense'>
                                <LargeTable
                                    header={mobileTackleHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.defensive,
                                        mobileTackleFields,
                                        'defensive'
                                    )}
                                />
                            </TableContainer>
                            <TableContainer title='Defense TOs'>
                                <LargeTable
                                    header={mobileDefToHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.defensive,
                                        mobileDefToFields,
                                        'defensive'
                                    )}
                                />
                                </TableContainer>
                        </>
                        )}

                        {/* If desktop, render desktop tables */}
                        {careerStats.defensive && careerStats.defensive.total_tkls > 0 &&
                         seasonStats.defensive && !mobile && (
                            <TableContainer title='Defense'>
                                <LargeTable
                                    header={desktopDefenseHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.defensive,
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
                        {/* If mobile, render mobile tables */}
                        {careerStats.kick_return && careerStats.kick_return.kick_returns > 0 &&
                            seasonStats.kick_return && mobile && (
                            <TableContainer title='Kick Return'>
                                <LargeTable
                                    header={mobileKickReturnHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.kick_return,
                                        mobileKickReturnFields,
                                        'kick_return'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {careerStats.punt_return && careerStats.punt_return.punt_returns > 0 &&
                            seasonStats.punt_return && mobile && (
                            <TableContainer title='Punt Return'>
                                <LargeTable
                                    header={mobilePuntReturnHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.punt_return,
                                        mobilePuntReturnFields,
                                        'punt_return'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {/* If desktop, render desktop tables */}
                        {careerStats.kick_return && careerStats.kick_return.kick_returns > 0 &&
                            seasonStats.kick_return && !mobile && (
                            <TableContainer title='Kick Return'>
                                <LargeTable
                                    header={desktopKickReturnHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.kick_return,
                                        desktopKickReturnFields,
                                        'kick_return'
                                    )}
                                />
                            </TableContainer>
                        )}

                        {careerStats.punt_return && careerStats.punt_return.punt_returns > 0 &&
                            seasonStats.punt_return && !mobile && (
                            <TableContainer title='Kick Return'>
                                <LargeTable
                                    header={desktopPuntReturnHeaders}
                                    contents={seasonFieldRows(
                                        seasonStats.punt_return,
                                        desktopPuntReturnFields,
                                        'punt_return'
                                    )}
                                />
                            </TableContainer>
                        )}
                    </>
                )}

            </div>
        </>
    );

}


export default HofPlayerTable;