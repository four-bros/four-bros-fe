import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';

import {
    passingHeaders,
    getPassingInfo,
    rushingHeaders,
    getRushingInfo,
    receivingHeaders,
    getReceivingInfo,
    defendingHeaders,
    getDefendingInfo,
    defTurnoverHeaders,
    getDefTurnoverInfo,
    getTopThree,
    returnsHeaders,
    getKickReturnsInfo,
    getPuntReturnsInfo,
    kickingHeaders,
    getKickingInfo,
    puntingHeaders,
    getPuntingInfo,
} from '../tableTransform';

const TeamLeaders = ({ leaders, infoType }) => {
    const [tableType, setTableType] = React.useState('offense');

    return (
        <div>
            <div className='buttonsContainer'>
                <Button onClick={() => setTableType('offense')}>Offense</Button>
                <Button onClick={() => setTableType('defense')}>Defense</Button>
                <Button onClick={() => setTableType('special')}>Special Teams</Button>
            </div>

            {tableType === 'offense' && (
                <>
                    {leaders.passing.length > 0 && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={passingHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getPassingInfo(
                                              getTopThree(leaders.passing)
                                          )
                                        : getPassingInfo(leaders.passing)
                                }
                            />
                        </TableContainer>
                    )}

                    {leaders.rushing.length > 0 && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={rushingHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getRushingInfo(
                                              getTopThree(leaders.rushing)
                                          )
                                        : getRushingInfo(leaders.rushing)
                                }
                            />
                        </TableContainer>
                    )}

                    {leaders.receiving.length > 0 && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={receivingHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getReceivingInfo(
                                              getTopThree(leaders.receiving)
                                          )
                                        : getReceivingInfo(leaders.receiving)
                                }
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'defense' && (
                <>
                    {leaders.defense.length > 0 && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={defendingHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getDefendingInfo(
                                              getTopThree(leaders.defense)
                                          )
                                        : getDefendingInfo(leaders.defense)
                                }
                            />
                        </TableContainer>
                    )}

                    {leaders.defense.length > 0 && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={defTurnoverHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getDefTurnoverInfo(
                                              getTopThree(leaders.defense)
                                          )
                                        : getDefTurnoverInfo(leaders.defense)
                                }
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {tableType === 'special' && (
                <>
                    {leaders.kick_return.length > 0 && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={returnsHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getKickReturnsInfo(
                                              getTopThree(leaders.kick_return)
                                          )
                                        : getKickReturnsInfo(
                                              leaders.kick_return
                                          )
                                }
                            />
                        </TableContainer>
                    )}

                    {leaders.punt_return.length > 0 && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={returnsHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getPuntReturnsInfo(
                                              getTopThree(leaders.punt_return)
                                          )
                                        : getPuntReturnsInfo(
                                              leaders.punt_return
                                          )
                                }
                            />
                        </TableContainer>
                    )}

                    {leaders.kicking.length > 0 && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={kickingHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getKickingInfo(
                                              getTopThree(leaders.kicking)
                                          )
                                        : getKickingInfo(leaders.kicking)
                                }
                            />
                        </TableContainer>
                    )}

                    {leaders.punting.length > 0 && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={puntingHeaders}
                                contents={
                                    infoType === 'overview'
                                        ? getPuntingInfo(
                                              getTopThree(leaders.punting)
                                          )
                                        : getPuntingInfo(leaders.punting)
                                }
                            />
                        </TableContainer>
                    )}
                </>
            )}
        </div>
    );
};

export default TeamLeaders;
