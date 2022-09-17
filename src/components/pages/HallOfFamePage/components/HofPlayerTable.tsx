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
import { mobileTotalFields, mobileTotalHeaders } from './mobileTableTransform';
import style from './hofPlayerTable.module.scss';
import { desktopTotalFields, desktopTotalHeaders } from './desktopTableTransform';


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
                        {idx === 0? 'Total' : value}
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

        console.log(fields);

        return (
            <>
                {seasonsArr.map((leader: any, idx: number) => {
                    const seasonFieldTypes = seasonStats[fieldType][idx]
                    const otherFields = getFields(seasonFieldTypes, fields);
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
                                                {fieldValue}
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
            </div>

        </>
    );

}


export default HofPlayerTable;