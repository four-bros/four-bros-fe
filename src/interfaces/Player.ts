import {
    DefensiveStats,
    KickReturnStats, 
    KickingStats, 
    PassingStats, 
    PuntReturnsStats, 
    PuntingStats, 
    ReceivingStats, 
    RushingStats, 
    TotalStats
} from "./Stats";

export interface Abilities {
    acceleration: number;
    agility: number;
    awareness: number;
    ball_carrier_vision: number;
    block_shedding: number;
    break_tackle: number;
    carry: number;
    catch: number;
    catch_in_traffic: number;
    elusiveness: number;
    finesse_moves: number;
    hit_power: number;
    impact_blocking: number;
    injury: number;
    juke_move: number;
    jump: number;
    kick_accuracy: number;
    kick_power: number;
    kick_return: number;
    man_coverage: number;
    overall: number;
    pass_blocking: number;
    play_recognition: number;
    power_moves: number;
    press: number;
    pursuit: number;
    release: number;
    route_running: number;
    run_blocking: number;
    spec_catch: number;
    speed: number;
    spin_move: number;
    stamina: number;
    stiff_arm: number;
    strength: number;
    tackling: number;
    throwing_accuracy: number;
    throwing_power: number;
    trucking: number;
    zone_coverage: number;
}

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

export interface PlayerHofStructure {
    abilities: Abilities;
    career_stats: {
        defensive?: DefensiveStats;
        kick_return?: KickReturnStats;
        kicking?: KickingStats;
        passing?: PassingStats;
        punt_return?: PuntReturnsStats;
        punting?: PuntingStats;
        receiving?: ReceivingStats;
        rushing?: RushingStats;
        total?: TotalStats;
    };
    details: PlayerDetails;
    season_stats: {
        defensive?: DefensiveStats[];
        kick_return?: KickReturnStats[];
        kicking?: KickingStats[];
        passing?: PassingStats[];
        punt_return?: PuntReturnsStats[];
        punting?: PuntingStats[];
        receiving?: ReceivingStats[];
        rushing?: RushingStats[];
        total?: TotalStats[];
    };
}

export interface PlayerStatsStructure {
    abilities: Abilities;
    career_stats: {
        defensive?: DefensiveStats;
        kick_return?: KickReturnStats;
        kicking?: KickingStats;
        passing?: PassingStats;
        punt_return?: PuntReturnsStats;
        punting?: PuntingStats;
        receiving?: ReceivingStats;
        rushing?: RushingStats;
        total?: TotalStats;
    };
    details: PlayerDetails;
    game_stats: {
        defensive?: DefensiveStats[];
        kick_return?: KickReturnStats[];
        kicking?: KickingStats[];
        passing?: PassingStats[];
        punt_return?: PuntReturnsStats[];
        punting?: PuntingStats[];
        receiving?: ReceivingStats[];
        rushing?: RushingStats[];
        total?: TotalStats[];
    }
    season_stats: {
        defensive?: DefensiveStats;
        kick_return?: KickReturnStats;
        kicking?: KickingStats;
        passing?: PassingStats;
        punt_return?: PuntReturnsStats;
        punting?: PuntingStats;
        receiving?: ReceivingStats;
        rushing?: RushingStats;
        total?: TotalStats;
    };
}
