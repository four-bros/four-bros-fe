import * as React from 'react';

import { LargeTable, TableContainer } from 'components/common';

import style from './teamOverview.module.scss';

import {
    getOverviewInfo,
    getDefenseOverview,
    getOffenseOverview,
} from '../tableTransform';

const TeamOverview = ({ simplifiedTeam, overview, overallStats }) => {
    return (
        <div className={style.teamOverview}>
            {/* 1st section */}
            <div className={style.teamName}>
                <h3>#{simplifiedTeam.bcs_rank}</h3>
                <h2>
                    {simplifiedTeam.team_name} {simplifiedTeam.nickname}
                </h2>
            </div>
            {/* 2nd section */}
            <div className={style.teamSummary}>
                <TableContainer title='Overview' small>
                    <LargeTable
                        contents={getOverviewInfo(overview, simplifiedTeam)}
                    />
                </TableContainer>
            </div>
            {/* 3rd section */}
            <div className={style.tablesContainer}>
                <TableContainer title='Offense' small>
                    <LargeTable contents={getOffenseOverview(overallStats)} />
                </TableContainer>
                <TableContainer title='Defense' small>
                    <LargeTable contents={getDefenseOverview(overallStats)} />
                </TableContainer>
            </div>
        </div>
    );
};

export default TeamOverview;
