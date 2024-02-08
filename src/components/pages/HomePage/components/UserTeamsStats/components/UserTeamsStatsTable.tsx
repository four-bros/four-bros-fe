import * as React from 'react';
import { Button } from 'semantic-ui-react';
import {
    desktopDefenseFields,
    desktopOffenseHeaders,
    desktopOffenseFields,
    desktopDefenseHeaders,
    desktopReturnHeaders,
    desktopReturnFields
} from './desktopTableTransform';
import {
    mobileReturnHeaders,
    mobileReturnFields,
    mobileTotalOffHeaders,
    mobileTotalOffFields,
    mobileOffenseFields,
    mobileOffenseHeaders,
    mobileDefenseHeaders,
    mobileDefenseFields,
} from './mobileTableTransform';
import type { TeamDetails, UserTeamsStats } from 'interfaces/Teams';
import style from '../userTeamsStats.module.scss';
import useMediaQuery from '../../../../../../hooks/useMediaQuery';
import MobileTable from 'components/common/Tables/MobileTable';
import DesktopTable from 'components/common/Tables/DesktopTable';


type Props = {
    userTeamsStats: UserTeamsStats;
    userTeamDetails: TeamDetails[];
};

const UserTeamsStatsTable = ({ userTeamsStats, userTeamDetails }: Props) => {
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');

    const userTeamsStatistics: any[] = []

    userTeamsStats.data.forEach((userTeam) => {
        Object.entries(userTeam).forEach((team) => {
            const [teamId, teamStats] = team;
            const teamDetails = userTeamDetails.find(team => team.id.toString() === teamId);
            const teamName = teamDetails?.team_name;
     
            userTeamsStatistics.push({
                teamId,
                teamName,
                ...teamStats
            })
        })
    })

    return (
        <>
            <div className='buttonsContainer'>
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
                    name='specialTeams'
                    active={tableType === 'specialTeams'}
                    onClick={() => setTableType('specialTeams')}
                >
                    Special Teams
                </Button>
            </div>

            <div className={style.mobileTableContainer}>
                {mobile && userTeamsStatistics.length && (
                    <>
                        {tableType === 'offense' && (
                        <>
                            <MobileTable
                                dataObjects={userTeamsStatistics}
                                headers={mobileTotalOffHeaders}
                                fields={mobileTotalOffFields}
                                title='Team Totals'
                                includePlayerDetails={false}
                                includeTeamDetails={true}
                            />
                            <MobileTable
                                dataObjects={userTeamsStatistics}
                                headers={mobileOffenseHeaders}
                                fields={mobileOffenseFields}
                                title='Team Offense'
                                includePlayerDetails={false}
                                includeTeamDetails={true}
                            />
                        </>
                    )}
                    {tableType === 'defense' && (
                        <MobileTable
                            dataObjects={userTeamsStatistics}
                            headers={mobileDefenseHeaders}
                            fields={mobileDefenseFields}
                            title='Team Defense'
                            includePlayerDetails={false}
                            includeTeamDetails={true}
                        />
                    )}
                    {tableType === 'specialTeams' && (
                        <MobileTable
                            dataObjects={userTeamsStatistics}
                            headers={mobileReturnHeaders}
                            fields={mobileReturnFields}
                            title='Team Return Stats'
                            includePlayerDetails={false}
                            includeTeamDetails={true}
                        />
                    )}
                </>
                )}
            </div>

            <div className={style.desktopTableContainer}>
                {!mobile && userTeamsStatistics.length && (
                    <>
                        {tableType === 'offense' && (
                            <DesktopTable
                                dataObjects={userTeamsStatistics}
                                headers={desktopOffenseHeaders}
                                fields={desktopOffenseFields}
                                title='Team Offense'
                                includePlayerDetails={false}
                                includeTeamDetails={true}
                            />
                        )}
                        {tableType === 'defense' && (
                            <DesktopTable
                                dataObjects={userTeamsStatistics}
                                headers={desktopDefenseHeaders}
                                fields={desktopDefenseFields}
                                title='Team Defense'
                                includePlayerDetails={false}
                                includeTeamDetails={true}
                            />
                        )}
                        {tableType === 'specialTeams' && (
                            <DesktopTable
                                dataObjects={userTeamsStatistics}
                                headers={desktopReturnHeaders}
                                fields={desktopReturnFields}
                                title='Team Return Stats'
                                includePlayerDetails={false}
                                includeTeamDetails={true}
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default UserTeamsStatsTable;
