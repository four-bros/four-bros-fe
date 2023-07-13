import * as React from 'react';
import { getTeamGameStats, getTeamSeasonStats } from 'api/teams';
import { TeamDetails, TeamStats } from 'interfaces/Teams';

type Props = {
    infoType: string;
    teamId: string;
    teamDetails: TeamDetails;
};

const TeamStatsComponent = ({ infoType, teamId, teamDetails }: Props) => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [teamGameStats, setTeamGameStats] = React.useState<TeamStats[]>();
    const [teamSeasonStats, setTeamSeasonStats] = React.useState<TeamStats>();

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            const teamGameStats = await getTeamGameStats(teamId);
            const teamSeasonStats = await getTeamSeasonStats(teamId);
            if (!teamGameStats) throw new Error('unable to get team game stats');
            if (!teamSeasonStats) throw new Error('unable to get team season stats');
            setTeamGameStats(teamGameStats.team_game_stats);
            setTeamSeasonStats(teamSeasonStats);
            setIsLoading(false);
        })();
    }, [teamId]);

    return (
        <div>Hi</div>
    );

} 

export default TeamStatsComponent;
