import { baseGet } from '../../baseApi';

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
} from '../../teams';


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


export const getCareerRecords = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/records/career');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getGameRecords = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/records/game/player');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getSeasonRecords = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/records/season/player');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getRecords = async (recordType: string, recordGroup: string): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet(`/records/${recordType}/${recordGroup}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
