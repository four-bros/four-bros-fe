import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import {
    athleticAbilitiesHeaders,
    getPlayerAthleticAbilities,
    passingAbilityHeaders,
    getPlayerPassingAbilities,
    rushingAbilitiesHeaders,
    getPlayerRushingAbilities,
    recAbilitiesHeaders,
    getPlayerRecAbilities,
    tackleAbilitiesHeaders,
    getPlayerTackleAbilities,
    coverageAbilitiesHeaders,
    getPlayerCoverageAbilities,
} from '../tableTransform';

const PlayerAbilities = ({ player }) => {
    
    const [tableType, setTableType] = React.useState('athletic');

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
                                contents={getPlayerAthleticAbilities(player)}
                            />
                        </TableContainer>
                    </>
                )}

                {tableType === 'offense' && (
                    <>
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={passingAbilityHeaders}
                                contents={getPlayerPassingAbilities(player)}
                            />
                        </TableContainer>

                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={rushingAbilitiesHeaders}
                                contents={getPlayerRushingAbilities(player)}
                            />
                        </TableContainer>

                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={recAbilitiesHeaders}
                                contents={getPlayerRecAbilities(player)}
                            />
                        </TableContainer>
                    </>
                )}

                {tableType === 'defense' && (
                    <>
                        <TableContainer title='Tackling'>
                            <LargeTable
                                header={tackleAbilitiesHeaders}
                                contents={getPlayerTackleAbilities(player)}
                            />
                        </TableContainer>

                        <TableContainer title='Coverage'>
                            <LargeTable
                                header={coverageAbilitiesHeaders}
                                contents={getPlayerCoverageAbilities(player)}
                            />
                        </TableContainer>
                    </>
                )}

            </div>
        </div>
    )
}

export default PlayerAbilities;
