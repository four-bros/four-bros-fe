import { baseGet } from '../../baseApi';
import { TeamStats } from 'api/teams';


export type TeamInfo = {
    id: number,
    is_user: boolean,
    team_name: string,
    nickname: string
}

export type TeamRecord = {
    team_info: TeamInfo,
    team_stats: TeamStats
}

export type TeamDefensiveRecord = {
    blocked_kicks: TeamRecord[],
    def_td: TeamRecord[],
    ff: TeamRecord[],
    fr: TeamRecord[],
    ints_made: TeamRecord[],
    pass_def: TeamRecord[],
    sacks: TeamRecord[],
    safeties: TeamRecord[],
    tfl: TeamRecord[],
    to_margin: TeamRecord[],
    turnovers: TeamRecord[]
}

export type TeamOffensiveRecord = {
    drops: TeamRecord[],
    fumbles: TeamRecord[],
    ints: TeamRecord[],
    off_yards: TeamRecord[],
    off_ypg: TeamRecord[],
    pass_tds: TeamRecord[],
    pass_yards: TeamRecord[],
    points: TeamRecord[],
    ppg: TeamRecord[],
    rush_tds: TeamRecord[],
    rush_yards: TeamRecord[],
    sacked: TeamRecord[],
    total_yards: TeamRecord[],
    total_ypg: TeamRecord[],
    turnovers: TeamRecord[]
}

export type TeamSpecialTeamsRecord = {
    kr_tds: TeamRecord[],
    kr_yds: TeamRecord[],
    pr_tds: TeamRecord[],
    pr_yds: TeamRecord[]
}

export type TeamSeasonRecordData = {
    defense: TeamDefensiveRecord,
    offense: TeamOffensiveRecord,
    special_teams: TeamSpecialTeamsRecord
}


export const getTeamGameRecords = async (): Promise<TeamSeasonRecordData | void> => {
    try {
        const response = await baseGet('/records/game/team');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};


export const getTeamSeasonRecords = async (): Promise<TeamSeasonRecordData | void> => {
    try {
        const response = await baseGet('/records/season/team');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
