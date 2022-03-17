import { baseGet } from '../baseApi';

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

export const getTeams = async (): Promise<Team[] | void> => {
    try {
        const response = await baseGet('/teams');
        return response.data.teams;
    } catch (err) {
        console.log(err);
    }
};

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

export interface TeamStats {
    def_tds: number;
    ff: number;
    fr: number;
    ints: number;
    kr_tds: number;
    kr_yds: number;
    pass_def: number;
    pass_tds: number;
    pass_yds: number;
    pass_ypg: number;
    ppg: number;
    pr_tds: number;
    pr_yds: number;
    rec_tds: number;
    rec_yds: number;
    rec_ypg: number;
    rush_tds: number;
    rush_yds: number;
    rush_ypg: number;
    sacks: number;
    safeties: number;
    total_points: number;
    total_ypg: number;
    turnovers: number;
}

// type SingleTeamInfo = TeamDetails & RosterPlayer & TeamStats;
export type SingleTeamInfo = {
    team_details: TeamDetails;
    team_roster: RosterPlayer[];
    team_stats: TeamStats;
};

export const getSingleTeam = async (
    teamId: string
): Promise<SingleTeamInfo | void> => {
    try {
        const response = await baseGet(`/teams/${teamId}`);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export interface PlayerDetails {
    first_name: string;
    height: string;
    hometown_desc: number;
    id: number;
    jersey_number: number;
    last_name: string;
    player_year: string;
    position: string;
    redshirt: string;
    team_id: number;
    team_name: string;
    weight: number;
}

export interface DefensiveStats {
    asst_tkls: number;
    blocked_kicks: number;
    def_tds: number;
    forced_fumbles: number;
    fum_rec_yards: number;
    fumbles_rec: number;
    games_played: number;
    half_a_sack: number;
    int_ret_yards: number;
    ints_made: number;
    long_int_ret: number;
    pass_def: number;
    sacks: number;
    safeties: number;
    solo_tkls: number;
    tfl: number;
    total_sacks: number;
    total_tkls: number;
    year: string;
}

export interface KickReturnStats {
    games_played: number;
    kick_returns: number;
    kr_avg: number;
    kr_tds: number;
    kr_yds: number;
    long_kr: number;
    year: string;
}

export interface KickingStats {
    fg_50_plus_pct: number;
    fg_att: number;
    fg_att_17_29: number;
    fg_att_30_39: number;
    fg_att_40_49: number;
    fg_att_50_plus: number;
    fg_blocked: number;
    fg_made: number;
    fg_made_17_29: number;
    fg_made_30_39: number;
    fg_made_40_49: number;
    fg_made_50_plus: number;
    fg_pct: number;
    games_played: number;
    kickoffs: number;
    ko_touchbacks: number;
    long_fg: number;
    xp_att: number;
    xp_blocked: number;
    xp_made: number;
    xp_pct: number;
    year: string;
}

export interface PassingStats {
    completions: number;
    games_played: number;
    ints: number;
    longest_pass: number;
    pass_att: number;
    pass_rating: number;
    pass_tds: number;
    pass_yards: number;
    pass_yp_attempt: number;
    pass_yp_game: number;
    sacked: number;
    year: number;
}

export interface PuntReturnsStats {
    games_played: number;
    long_pr: number;
    pr_avg: number;
    pr_tds: number;
    pr_yds: number;
    punt_returns: number;
    year: string;
}

export interface PuntingStats {
    games_played: number;
    inside_twenty: number;
    long_punt: number;
    net_punting: number;
    number_punts: number;
    punt_avg: number;
    punt_touchbacks: number;
    punts_blocked: number;
    total_punt_yards: number;
    year: number;
}

export interface ReceivingStats {
    drops: number;
    games_played: number;
    longest_rec: number;
    rec_tds: number;
    rec_yards: number;
    rec_yp_catch: number;
    rec_yp_game: number;
    receptions: number;
    yac: number;
    year: string;
}

export interface RushingStats {
    broke_tkls: number;
    fumbles: number;
    games_played: number;
    longest_run: number;
    rush_att: number;
    rush_tds: number;
    rush_yards: number;
    rush_yp_carry: number;
    rush_yp_game: number;
    twenty_plus_yd_runs: number;
    ya_contact: number;
    year: number;
}

export interface TotalStats {
    games_played: number;
    total_tds: number;
    total_yards: number;
    total_ypg: number;
    turnovers: number;
    year: number;
}

export type Defense = [PlayerDetails, DefensiveStats?];
export type KickReturn = [PlayerDetails, KickReturnStats?];
export type Kicking = [PlayerDetails, KickingStats?];
export type Passing = [PlayerDetails, PassingStats?];
export type PuntReturn = [PlayerDetails, PuntReturnsStats?];
export type Punting = [PlayerDetails, PuntingStats?];
export type Receiving = [PlayerDetails, ReceivingStats?];
export type Rushing = [PlayerDetails, RushingStats?];
export type Total = [PlayerDetails, TotalStats?];

export type SingleTeamLeaders = {
    defense: Defense;
    kick_return: KickReturn;
    kicking: Kicking;
    passing: Passing;
    punt_return: PuntReturn;
    punting: Punting;
    receiving: Receiving;
    rushing: Rushing;
    total: Total;
};

export const getSingleTeamLeaders = async (
    teamId: string
): Promise<SingleTeamLeaders | void> => {
    try {
        const response = await baseGet(`/teams/${teamId}/stats`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
