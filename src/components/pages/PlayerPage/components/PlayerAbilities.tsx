import * as React from 'react';
import { Button, Table } from 'semantic-ui-react';
// import useMediaQuery from '@mui/material/useMediaQuery';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopAthleticAbilitiesHeaders,
    desktopAthleticAbilityFields,
    desktopOffenseAbilitiesHeaders,
    desktopOffenseAbilitiesFields,
    desktopDefenseAbilitiesHeaders,
    desktopDefenseAbilitiesFields,
} from './desktopTableTransform';
import {
    mobileAthleticAbilitiesHeaders,
    mobilePassingAbilityHeaders,
    mobileRushingAbilitiesHeaders,
    mobileRecAbilitiesHeaders,
    mobileTackleAbilitiesHeaders,
    mobileCoverageAbilitiesHeaders,
    mobileAthleticAbilityFields,
    mobilePassingAbilityFields,
    mobileRushingAbilityFields,
    mobileRecAbilityFields,
    mobileTackleAbilityFields,
    mobileCoverageAbilityFields,
} from './mobileTableTransform';
import { PlayerStatsStructure } from 'api/players';
import { getFields } from 'utils';

type Props = {
    player: PlayerStatsStructure;
};

const PlayerAbilities = ({ player }: Props) => {
    const [tableType, setTableType] = React.useState('athletic');
    // const mobile = useMediaQuery('(max-width: 767px)');

    const fieldRows = (fields: Set<string>) => {
        const values = Array.from(getFields(player.abilities, fields));

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
                    name='athletic'
                    active={tableType === 'athletic'}
                    onClick={() => setTableType('athletic')}
                >
                    Athletic
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
            </div>

            <div>
                {/* {tableType === 'athletic' && (
                    <>
                        {mobile && (
                            <TableContainer title='Athletic Abilities'>
                                <LargeTable
                                    header={mobileAthleticAbilitiesHeaders}
                                    contents={fieldRows(mobileAthleticAbilityFields)}
                                />
                            </TableContainer>
                        )}
                        {!mobile && (
                            <TableContainer title='Athletic Abilities'>
                                <LargeTable
                                    header={desktopAthleticAbilitiesHeaders}
                                    contents={fieldRows(desktopAthleticAbilityFields)}
                                />
                            </TableContainer>
                        )}
                    </>
                )} */}

                {/* {tableType === 'offense' && (
                    <>
                    {mobile && (
                        <>
                            <TableContainer title='Passing'>
                                <LargeTable
                                    header={mobilePassingAbilityHeaders}
                                    contents={fieldRows(mobilePassingAbilityFields)}
                                />
                            </TableContainer>
    
                            <TableContainer title='Rushing'>
                                <LargeTable
                                    header={mobileRushingAbilitiesHeaders}
                                    contents={fieldRows(mobileRushingAbilityFields)}
                                />
                            </TableContainer>
    
                            <TableContainer title='Receiving'>
                                <LargeTable
                                    header={mobileRecAbilitiesHeaders}
                                    contents={fieldRows(mobileRecAbilityFields)}
                                />
                            </TableContainer>
                        </>
                    )}
                    {!mobile && (
                        <>
                            <TableContainer title='Offensive Abilities'>
                                <LargeTable
                                    header={desktopOffenseAbilitiesHeaders}
                                    contents={fieldRows(desktopOffenseAbilitiesFields)}
                                />
                            </TableContainer>
                        </>
                    )}
                    </>
                )} */}

                {/* {tableType === 'defense' && (
                    <>
                    {mobile && (
                        <>
                            <TableContainer title='Tackling'>
                                <LargeTable
                                    header={mobileTackleAbilitiesHeaders}
                                    contents={fieldRows(mobileTackleAbilityFields)}
                                />
                            </TableContainer>

                            <TableContainer title='Coverage'>
                                <LargeTable
                                    header={mobileCoverageAbilitiesHeaders}
                                    contents={fieldRows(mobileCoverageAbilityFields)}
                                />
                            </TableContainer>
                        </>
                    )}
                    {!mobile && (
                        <>
                            <TableContainer title='Defensive Abilities'>
                                <LargeTable
                                    header={desktopDefenseAbilitiesHeaders}
                                    contents={fieldRows(desktopDefenseAbilitiesFields)}
                                />
                            </TableContainer>
                        </>
                    )}
                    </>
                )} */}
            </div>
        </div>
    );
};

export default PlayerAbilities;
