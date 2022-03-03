import * as React from 'react';

import { LargeTable, TableContainer } from 'components/common';

import { rosterHeaders, getRosterInfo } from '../tableTransform';

const TeamRoster = ({ roster }) => {
    return (
        <div>
            <TableContainer title='Roster'>
                <LargeTable
                    header={rosterHeaders}
                    contents={getRosterInfo(roster)}
                />
            </TableContainer>
        </div>
    );
};

export default TeamRoster;
