import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import {
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopReceivingHeaders,
    desktopDefenseHeaders,
    desktopKickReturnHeaders,
    desktopPuntReturnHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
    desktopPassingFields,
    desktopRushingFields,
    desktopReceivingFields,
    desktopDefenseFields,
    desktopKickReturnFields,
    desktopPuntReturnFields,
    desktopKickingFields,
    desktopPuntingFields,
} from './desktopTableTransform';
import {
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileReceivingHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKickReturnHeaders,
    mobilePuntReturnHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
    mobilePassingFields,
    mobileRushingFields,
    mobileReceivingFields,
    mobileTackleFields,
    mobileDefToFields,
    mobileKickReturnFields,
    mobilePuntReturnFields,
    mobileKickingFields,
    mobilePuntingFields,
} from './mobileTableTransform';
import { getFieldValues } from 'utils';
import type {
    TeamPlayerStats,
    Defense,
    KickReturn,
    Kicking,
    Passing,
    PuntReturn,
    Punting,
    Receiving,
    Rushing,
    Total,
} from '../../../../../interfaces/Stats';
import style from './userTeamsPlayerStats.module.scss';
import globalStyle from '../../../../../styles/global.module.scss';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import { Teams } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import DesktopTable from 'components/common/Tables/DesktopTable';
import MobileTable from 'components/common/Tables/MobileTable';
import { mobileDefenseFields, mobileDefenseHeaders } from '../UserTeamsStats/components/mobileTableTransform';

const UserTeamsPlayerStats = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [teamLeaders, setTeamLeaders] = React.useState<TeamPlayerStats>();
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            const teamPlayerStats = await Teams.getUserTeamsPlayerStats();
            if (!teamPlayerStats) throw new Error('unable to get team player stats');
            setTeamLeaders(teamPlayerStats);
            setIsLoading(false);
        })();
    }, []);

    const teamLeadersComponent = (
        <>
            <div className={style.btnContainer}>
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

            {/* mobile renders */}
            {mobile && teamLeaders && (
                <div className={style.mobileTableContainer}>
                    {tableType === 'offense' && (
                        <>
                            {teamLeaders.passing.length > 0 && (
                                <MobileTable
                                    dataObjects={teamLeaders.passing}
                                    category='passing_stats'
                                    headers={mobilePassingHeaders}
                                    fields={mobilePassingFields}
                                    title='Player Passing Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                            {teamLeaders.rushing.length > 0 && (
                                <MobileTable
                                    dataObjects={teamLeaders.rushing}
                                    category='rushing_stats'
                                    headers={mobileRushingHeaders}
                                    fields={mobileRushingFields}
                                    title='Player Rushing Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                            {teamLeaders.receiving.length > 0 && (
                                <MobileTable
                                    dataObjects={teamLeaders.receiving}
                                    category='receiving_stats'
                                    headers={mobileReceivingHeaders}
                                    fields={mobileReceivingFields}
                                    title='Player Receiving Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                        </>
                    )}
                    {tableType === 'defense' && (
                        <>
                            {teamLeaders.passing.length > 0 && (
                                <MobileTable
                                    dataObjects={teamLeaders.defense}
                                    category='defensive_stats'
                                    headers={mobileTackleHeaders}
                                    fields={mobileTackleFields}
                                    title='Player Defensive Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                            {teamLeaders.passing.length > 0 && (
                                <MobileTable
                                    dataObjects={teamLeaders.defense}
                                    category='defensive_stats'
                                    headers={mobileDefToHeaders}
                                    fields={mobileDefToFields}
                                    title='Turnovers'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                        </>
                    )}
                    {tableType === 'special' && (
                        <>
                            <MobileTable
                                dataObjects={teamLeaders.kick_return}
                                category='kick_return_stats'
                                headers={mobileKickReturnHeaders}
                                fields={mobileKickReturnFields}
                                title='Player Kick Return Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                            <MobileTable
                                dataObjects={teamLeaders.punt_return}
                                category='punt_return_stats'
                                headers={mobilePuntReturnHeaders}
                                fields={mobilePuntReturnFields}
                                title='Player Punt Return Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                            <MobileTable
                                dataObjects={teamLeaders.kicking}
                                category='kicking_stats'
                                headers={mobileKickingHeaders}
                                fields={mobileKickingFields}
                                title='Player Kicking Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                            <MobileTable
                                dataObjects={teamLeaders.punting}
                                category='punting_stats'
                                headers={mobilePuntingHeaders}
                                fields={mobilePuntingFields}
                                title='Player Punting Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                        </>
                    )}
                </div>
            )}

            {/* desktop rendering */}
            {!mobile && teamLeaders && (
                <div className={style.desktopTableContainer}>
                    {tableType === 'offense' && (
                        <>
                            {teamLeaders.passing.length > 0 && (
                                <DesktopTable
                                    dataObjects={teamLeaders.passing}
                                    category='passing_stats'
                                    headers={desktopPassingHeaders}
                                    fields={desktopPassingFields}
                                    title='Player Passing Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                            {teamLeaders.rushing.length > 0 && (
                                <DesktopTable
                                    dataObjects={teamLeaders.rushing}
                                    category='rushing_stats'
                                    headers={desktopRushingHeaders}
                                    fields={desktopRushingFields}
                                    title='Player Rushing Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                            {teamLeaders.receiving.length > 0 && (
                                <DesktopTable
                                    dataObjects={teamLeaders.receiving}
                                    category='receiving_stats'
                                    headers={desktopReceivingHeaders}
                                    fields={desktopReceivingFields}
                                    title='Player Receiving Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                        </>
                    )}
                    {tableType === 'defense' && (
                        <>
                            {teamLeaders.passing.length > 0 && (
                                <DesktopTable
                                    dataObjects={teamLeaders.defense}
                                    category='defensive_stats'
                                    headers={desktopDefenseHeaders}
                                    fields={desktopDefenseFields}
                                    title='Player Defensive Leaders'
                                    includePlayerDetails={true}
                                    includeTeamDetails={true}
                                />
                            )}
                        </>
                    )}
                    {tableType === 'special' && (
                        <>
                            <DesktopTable
                                dataObjects={teamLeaders.kick_return}
                                category='kick_return_stats'
                                headers={desktopKickReturnHeaders}
                                fields={desktopKickReturnFields}
                                title='Player Kick Return Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                            <DesktopTable
                                dataObjects={teamLeaders.punt_return}
                                category='punt_return_stats'
                                headers={desktopPuntReturnHeaders}
                                fields={desktopPuntReturnFields}
                                title='Player Punt Return Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                            <DesktopTable
                                dataObjects={teamLeaders.kicking}
                                category='kicking_stats'
                                headers={desktopKickingHeaders}
                                fields={desktopKickingFields}
                                title='Player Kicking Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                            <DesktopTable
                                dataObjects={teamLeaders.punting}
                                category='punting_stats'
                                headers={desktopPuntingHeaders}
                                fields={desktopPuntingFields}
                                title='Player Punting Leaders'
                                includePlayerDetails={true}
                                includeTeamDetails={true}
                            />
                        </>
                    )}
                </div>
            )}
        </>
    );

    return isLoading ? <LoadingSpinner /> : teamLeadersComponent;
};

export default UserTeamsPlayerStats;
