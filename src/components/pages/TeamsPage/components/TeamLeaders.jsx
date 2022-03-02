import * as React from 'react';

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
} from '../tableTransform';

const TeamLeaders = ({ leaders }) => {
    return (
        <div>
            <h1>Team Leaders</h1>
            <div>
                <TableContainer title='Passing'>
                    <LargeTable
                        header={passingHeaders}
                        contents={getPassingInfo(leaders.passing_leaders)}
                    />
                </TableContainer>
            </div>

            <div>
                <TableContainer title='Rushing'>
                    <LargeTable
                        header={rushingHeaders}
                        contents={getRushingInfo(leaders.rushing_leaders)}
                    />
                </TableContainer>
            </div>

            <div>
                <TableContainer title='Receiving'>
                    <LargeTable
                        header={receivingHeaders}
                        contents={getReceivingInfo(leaders.receiving_leaders)}
                    />
                </TableContainer>
            </div>
            <div>
                <TableContainer title='Defense'>
                    <LargeTable
                        header={defendingHeaders}
                        contents={getDefendingInfo(leaders.defense_leaders)}
                    />
                </TableContainer>
            </div>
        </div>
    );
};

export default TeamLeaders;
