import * as React from 'react';
import { Button } from 'semantic-ui-react';
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
} from '../desktopTableTransform';
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
} from '../mobileTableTransform';
import type { TeamPlayerStats } from '../../../../../interfaces/Stats';
import style from './teamLeaders.module.scss';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import { Teams } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import { TeamDetails } from 'interfaces/Teams';
import MobileTable from 'components/common/Tables/MobileTable';
import DesktopTable from 'components/common/Tables/DesktopTable';


type Props = {
    infoType: string;
    teamId: string;
    teamDetails: TeamDetails;
};

const TeamLeaders = ({ infoType, teamId, teamDetails }: Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [teamLeaders, setTeamLeaders] = React.useState<TeamPlayerStats>();
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            const teamPlayerStats = await Teams.getTeamPlayerStats(teamId);
            if (!teamPlayerStats) throw new Error('unable to get team player stats');
            setTeamLeaders(teamPlayerStats);
            setIsLoading(false);
        })();
    }, [teamId]);

    const header = infoType === 'overview' ? `${teamDetails.team_name} Statistical Leaders` : `${teamDetails.team_name} Player Stats`

    const teamLeadersComponent = (
        <>
            <hr />
            <h1 className={style.header}>{header}</h1>
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

            {/* mobile rendering */}
            {mobile && teamLeaders && (
                <div className={style.mobileTableContainer}>
                    {tableType === 'offense' && teamLeaders.passing.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.passing.slice(0, 3) : teamLeaders.passing}
                            category='passing_stats'
                            headers={mobilePassingHeaders}
                            fields={mobilePassingFields}
                            title='Passing'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'offense' && teamLeaders.rushing.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.rushing.slice(0, 3) : teamLeaders.rushing}
                            category='rushing_stats'
                            headers={mobileRushingHeaders}
                            fields={mobileRushingFields}
                            title='Rushing'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'offense' && teamLeaders.receiving.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.receiving.slice(0, 3) : teamLeaders.receiving}
                            category='receiving_stats'
                            headers={mobileReceivingHeaders}
                            fields={mobileReceivingFields}
                            title='Receiving'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'defense' && teamLeaders.defense.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.defense.slice(0, 3) : teamLeaders.defense}
                            category='defensive_stats'
                            headers={mobileTackleHeaders}
                            fields={mobileTackleFields}
                            title='Defense'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'defense' && teamLeaders.defense_to.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.defense_to.slice(0, 3) : teamLeaders.defense_to}
                            category='defensive_stats'
                            headers={mobileDefToHeaders}
                            fields={mobileDefToFields}
                            title='Turnovers'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.kick_return.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.kick_return.slice(0, 3) : teamLeaders.kick_return}
                            category='kick_return_stats'
                            headers={mobileKickReturnHeaders}
                            fields={mobileKickReturnFields}
                            title='Kick Return'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.punt_return.length > 0 && (
                        <MobileTable
                            dataObjects={teamLeaders.punt_return}
                            category='punt_return_stats'
                            headers={mobilePuntReturnHeaders}
                            fields={mobilePuntReturnFields}
                            title='Punt Return'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.kicking.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.punt_return.slice(0, 3) : teamLeaders.punt_return}
                            category='kicking_stats'
                            headers={mobileKickingHeaders}
                            fields={mobileKickingFields}
                            title='Kicking'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.punting.length > 0 && (
                        <MobileTable
                            dataObjects={infoType === 'overview' ? teamLeaders.punting.slice(0, 3) : teamLeaders.punting}
                            category='punting_stats'
                            headers={mobilePuntingHeaders}
                            fields={mobilePuntingFields}
                            title='Punting'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                </div>
            )}

            {/* desktop rendering */}
            {!mobile && teamLeaders && (
                <div className={style.desktopTableContainer}>
                    {tableType === 'offense' && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.passing.slice(0, 3) : teamLeaders.passing}
                            category='passing_stats'
                            headers={desktopPassingHeaders}
                            fields={desktopPassingFields}
                            title='Passing'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'offense' && teamLeaders.rushing.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.rushing.slice(0, 3) : teamLeaders.rushing}
                            category='rushing_stats'
                            headers={desktopRushingHeaders}
                            fields={desktopRushingFields}
                            title='Rushing'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'offense' && teamLeaders.receiving.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.receiving.slice(0, 3) : teamLeaders.receiving}
                            category='receiving_stats'
                            headers={desktopReceivingHeaders}
                            fields={desktopReceivingFields}
                            title='Receiving'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'defense' && teamLeaders.defense.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.defense.slice(0, 3) : teamLeaders.defense}
                            category='defensive_stats'
                            headers={desktopDefenseHeaders}
                            fields={desktopDefenseFields}
                            title='Defense'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.kick_return.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.kick_return.slice(0, 3) : teamLeaders.kick_return}
                            category='kick_return_stats'
                            headers={desktopKickReturnHeaders}
                            fields={desktopKickReturnFields}
                            title='Kick Return'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.punt_return.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.punt_return.slice(0, 3) : teamLeaders.punt_return}
                            category='punt_return_stats'
                            headers={desktopPuntReturnHeaders}
                            fields={desktopPuntReturnFields}
                            title='Punt Return'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.kicking.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.kicking.slice(0, 3) : teamLeaders.kicking}
                            category='kicking_stats'
                            headers={desktopKickingHeaders}
                            fields={desktopKickingFields}
                            title='Kicking'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                    {tableType === 'special' && teamLeaders.punting.length > 0 && (
                        <DesktopTable
                            dataObjects={infoType === 'overview' ? teamLeaders.punting.slice(0, 3) : teamLeaders.punting}
                            category='punting_stats'
                            headers={desktopPuntingHeaders}
                            fields={desktopPuntingFields}
                            title='Punting'
                            includePlayerDetails={true}
                            includeTeamDetails={false}
                        />
                    )}
                </div>
            )}
            <hr />
        </>
    );

    return isLoading ? <LoadingSpinner /> : teamLeadersComponent;
};

export default TeamLeaders;
