import * as React from 'react';

import { LargeTable } from 'components/common';

import { rosterHeaders, getRosterInfo } from '../tableTransform';

const TeamRoster = ({ roster }) => {
    return (
        <div>
            <h1>Team Roster</h1>
            <LargeTable
                header={rosterHeaders}
                contents={getRosterInfo(roster)}
            />
        </div>
    );
};

export default TeamRoster;
