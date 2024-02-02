
export interface Team {
    bcs_rank: number;
    coachs_poll_1st_votes: number;
    coachs_poll_points: number;
    coachs_poll_rank: number;
    id: number;
    is_user: boolean;
    losses: number;
    media_poll_points: number;
    media_poll_rank: number;
    nickname: string;
    team_name: string;
    team_short_name: string;
    wins: number;
}

export interface TeamDetails {
    avg_defense: number;
    avg_offense: number;
    avg_overall: number;
    avg_sp_teams: number;
    bcs_rank: number;
    coachs_poll_1st_votes: number;
    coachs_poll_points: number;
    coachs_poll_rank: number;
    id: number;
    is_user: boolean;
    losses: number;
    media_poll_points: number;
    media_poll_rank: number;
    nickname: string;
    team_name: string;
    team_short_name: string;
    wins: number;
}

export interface UserTeamDetails {
    data: TeamDetails[]
}

export interface UserTeamsStats {
    data: UserTeamsStatsData[]
}

export interface UserTeamsStatsData {
    [key: string]: TeamStats
}

export interface RosterPlayer {
    first_name: string;
    height: string;
    hometown_desc: number;
    id: number;
    jersey_number: number;
    last_name: string;
    overall: number;
    player_year: string;
    position: string;
    redshirt: boolean;
    weight: number;
}

export interface TeamRoster {
    roster: RosterPlayer[]
}

export interface TeamStats {
    blocked_kicks: number,
    def_tds: number,
    def_turnovers: number,
    drops: number,
    ff: number,
    fr: number,
    fumbles: number,
    games_played: number,
    ints: number,
    kr_tds: number,
    kr_yds: number,
    off_turnovers: number,
    off_yards: number,
    off_ypg: number,
    pass_def: number,
    pass_tds: number,
    pass_yds: number,
    pass_ypg: number,
    ppg: number,
    pr_tds: number,
    pr_yds: number,
    rec_tds: number,
    rec_yds: number,
    rec_ypg: number,
    rush_tds: number,
    rush_yds: number,
    rush_ypg: number,
    sacked: number,
    sacks: number,
    safeties: number,
    tfl: number,
    to_margin: number,
    total_points: number,
    total_yards: number,
    total_ypg: number,
    year: number
}

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

export type TeamGameOffensiveRecord = {
    drops: TeamRecord[],
    fumbles: TeamRecord[],
    ints: TeamRecord[],
    off_yards: TeamRecord[],
    pass_tds: TeamRecord[],
    pass_yards: TeamRecord[],
    points: TeamRecord[],
    rush_tds: TeamRecord[],
    rush_yards: TeamRecord[],
    sacked: TeamRecord[],
    total_yards: TeamRecord[],
    turnovers: TeamRecord[]
}

export type TeamSeasonOffensiveRecord = {
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

export type TeamGameRecordData = {
    defense: TeamDefensiveRecord,
    offense: TeamGameOffensiveRecord,
    special_teams: TeamSpecialTeamsRecord
}

export type TeamSeasonRecordData = {
    defense: TeamDefensiveRecord,
    offense: TeamSeasonOffensiveRecord,
    special_teams: TeamSpecialTeamsRecord
}
