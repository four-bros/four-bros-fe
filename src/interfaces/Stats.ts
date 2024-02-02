import { PlayerDetails } from './Player';

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

export type TeamPlayerStats = {
    defense: Defense;
    defense_to: Defense;
    kick_return: KickReturn;
    kicking: Kicking;
    passing: Passing;
    punt_return: PuntReturn;
    punting: Punting;
    receiving: Receiving;
    rushing: Rushing;
    total: Total;
};

export interface DefensiveLeadersCategories {
    blocked_kicks: Defense[],
    def_tds: Defense[],
    forced_fumbles: Defense[],
    fum_rec_yards: Defense[],
    fumbles_rec: Defense[],
    int_ret_yards: Defense[],
    ints_made: Defense[],
    long_int_ret: Defense[],
    pass_def: Defense[],
    sacks: Defense[],
    safeties: Defense[],
    tfl: Defense[],
    total_sack: Defense[],
    total_tkls: Defense[]
}

export interface KickReturnLeadersCategories {
    kick_returns: KickReturn[],
    kr_avg: KickReturn[],
    kr_tds: KickReturn[],
    kr_yards: KickReturn[],
    long_kr: KickReturn[]
}

export interface KickingLeadersCategories {
    fg_50_plus_made: Kicking[],
    fg_50_plus_pct: Kicking[],
    fg_att: Kicking[],
    fg_made: Kicking[],
    fg_pct: Kicking[],
    long_fg: Kicking[]
}

export interface PassingLeadersCategories {
    completions: Passing[],
    interceptions: Passing[],
    longest_pass: Passing[],
    pass_att: Passing[],
    pass_tds: Passing[],
    pass_yards: Passing[],
    pass_yp_attempt: Passing[],
    pass_yp_game: Passing[]
}

export interface PuntReturnLeadersCategories {
    long_pr: PuntReturn[],
    pr_avg: PuntReturn[],
    pr_tds: PuntReturn[],
    pr_yards: PuntReturn[],
    punt_returns: PuntReturn[]
}

export interface PuntingLeadersCategories {
    inside_twenty: Punting[],
    long_punt: Punting[],
    net_punting: Punting[],
    number_punts: Punting[],
    punt_avg: Punting[],
    total_punt_yards: Punting[]
}

export interface ReceivingLeadersCategories {
    drops: Receiving[],
    rec_tds: Receiving[],
    rec_yards: Receiving[],
    rec_yp_catch: Receiving[],
    rec_yp_game: Receiving[],
    receptions: Receiving[],
    yac: Receiving[]
}

export interface RushingLeadersCategories {
    broken_tackles: Rushing[],
    fumbles: Rushing[],
    rush_att: Rushing[],
    rush_yards: Rushing[],
    rush_yp_carry: Rushing[],
    rush_yp_game: Rushing[],
    twenty_plus_runs: Rushing[],
    ya_contact: Rushing[]
}

export interface TotalLeadersCategories {
    tds: Total[],
    turnovers: Total[],
    yards: Total[],
    ypg: Total[]
}

export interface RecordsInfo {
    defense: DefensiveLeadersCategories,
    kick_return: KickReturnLeadersCategories,
    kicking: KickingLeadersCategories,
    passing: PassingLeadersCategories,
    punt_return: PuntReturnLeadersCategories,
    punting: PuntingLeadersCategories,
    receiving: ReceivingLeadersCategories,
    rushing: RushingLeadersCategories,
    total: TotalLeadersCategories
}
