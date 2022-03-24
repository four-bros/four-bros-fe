import { baseGet } from '../baseApi';

import {
    Defense,
    KickReturn,
    Kicking,
    Passing,
    PuntReturn,
    Punting,
    Receiving,
    Rushing,
    Total,
} from '../teams';


export interface DefensiveRecordsCategories {
    blocked_kicks_leaders: Defense[],
    def_tds_leaders: Defense[],
    forced_fumbles_leaders: Defense[],
    fum_rec_yards_leaders: Defense[],
    fumbles_rec_leaders: Defense[],
    int_ret_yards_leaders: Defense[],
    ints_made_leaders: Defense[],
    long_int_ret_leaders: Defense[],
    pass_def_leaders: Defense[],
    sacks_leaders: Defense[],
    safeties_leaders: Defense[],
    tfl_leaders: Defense[],
    total_sack_leaders: Defense[],
    total_tkls_leaders: Defense[]
}

export interface KickReturnRecordsCategories {
    kick_returns: KickReturn[],
    kr_avg: KickReturn[],
    kr_tds: KickReturn[],
    kr_yards: KickReturn[],
    long_kr: KickReturn[]
}

export interface KickingRecordsCategories {
    fg_50_plus_made: Kicking[],
    fg_50_plus_pct: Kicking[],
    fg_att: Kicking[],
    fg_made: Kicking[],
    fg_pct: Kicking[],
    long_fg: Kicking[]
}

export interface PassingRecordsCategories {
    completions: Passing[],
    interceptions: Passing[],
    longest_pass: Passing[],
    pass_att: Passing[],
    pass_tds: Passing[],
    pass_yards: Passing[],
    pass_yp_attempt: Passing[],
    pass_yp_game: Passing[]
}

export interface PuntReturnRecordsCategories {
    long_pr: PuntReturn[],
    pr_avg: PuntReturn[],
    pr_tds: PuntReturn[],
    pr_yards: PuntReturn[],
    punt_returns: PuntReturn[]
}

export interface PuntingRecordsCategories {
    inside_twenty: Punting[],
    long_punt: Punting[],
    net_punting: Punting[],
    number_punts: Punting[],
    punt_avg: Punting[],
    total_punt_yards: Punting[]
}

export interface ReceivingRecordsCategories {
    drops: Receiving[],
    rec_tds: Receiving[],
    rec_yards: Receiving[],
    rec_yp_catch: Receiving[],
    rec_yp_game: Receiving[],
    receptions: Receiving[],
    yac: Receiving[]
}

export interface RushingRecordsCategories {
    broken_tackles: Rushing[],
    fumbles: Rushing[],
    rush_att: Rushing[],
    rush_yards: Rushing[],
    rush_yp_carry: Rushing[],
    rush_yp_game: Rushing[],
    twenty_plus_runs: Rushing[],
    ya_contact: Rushing[]
}

export interface TotalRecordsCategories {
    tds: Total[],
    turnovers: Total[],
    yards: Total[],
    ypg: Total[]
}

export interface RecordsInfo {
    defense: DefensiveRecordsCategories,
    kick_return: KickReturnRecordsCategories,
    kicking: KickingRecordsCategories,
    passing: PassingRecordsCategories,
    punt_return: PuntReturnRecordsCategories,
    punting: PuntingRecordsCategories,
    receiving: ReceivingRecordsCategories,
    rushing: RushingRecordsCategories,
    total: TotalRecordsCategories
}


export const getCareerRecords = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/records/career/');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getGameRecords = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/records/game/');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getSeasonRecords = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/records/season/');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getRecords = async (recordType: string): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet(`/records/${recordType}/`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
