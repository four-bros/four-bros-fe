import * as React from 'react';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import {
    athleticAbilitiesHeaders,
    passingAbilityHeaders,
    rushingAbilitiesHeaders,
    recAbilitiesHeaders,
    tackleAbilitiesHeaders,
    coverageAbilitiesHeaders,
    athleticAbilityFields,
    passingAbilityFields,
    rushingAbilityFields,
    recAbilityFields,
    tackleAbilityFields,
    coverageAbilityFields,
} from '../tableTransform';
import { PlayerStatsStructure } from 'api/players';
import { getFields } from 'utils';

type Props = {
    player: PlayerStatsStructure;
};

const PlayerAbilities = ({ player }: Props) => {
    const [tableType, setTableType] = React.useState('athletic');

    const fieldRows = (fields: Set<string>) => {
        const values = Array.from(getFields(player.abilities, fields));
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
                {tableType === 'athletic' && (
                    <>
                        <TableContainer title='Athletic'>
                            <LargeTable
                                header={athleticAbilitiesHeaders}
                                contents={fieldRows(athleticAbilityFields)}
                            />
                        </TableContainer>
                    </>
                )}

                {tableType === 'offense' && (
                    <>
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={passingAbilityHeaders}
                                contents={fieldRows(passingAbilityFields)}
                            />
                        </TableContainer>

                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={rushingAbilitiesHeaders}
                                contents={fieldRows(rushingAbilityFields)}
                            />
                        </TableContainer>

                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={recAbilitiesHeaders}
                                contents={fieldRows(recAbilityFields)}
                            />
                        </TableContainer>
                    </>
                )}

                {tableType === 'defense' && (
                    <>
                        <TableContainer title='Tackling'>
                            <LargeTable
                                header={tackleAbilitiesHeaders}
                                contents={fieldRows(tackleAbilityFields)}
                            />
                        </TableContainer>

                        <TableContainer title='Coverage'>
                            <LargeTable
                                header={coverageAbilitiesHeaders}
                                contents={fieldRows(coverageAbilityFields)}
                            />
                        </TableContainer>
                    </>
                )}
            </div>
        </div>
    );
};

export default PlayerAbilities;
