
// Get player abilities
const athleticAbilitiesHeaders = [
    'Ovr.',
    'Spd.',
    'Str.',
    'Agl.',
    'Acc.',
    'Stam.',
    'Jmp.',
    'Inj.',
    'Awr.'
]

const getPlayerAthleticAbilities = (player) => {

    const playerAbilities = player.abilities;

    let renderedInfo = [[
        playerAbilities.overall,
        playerAbilities.speed,
        playerAbilities.strength,
        playerAbilities.agility,
        playerAbilities.acceleration,
        playerAbilities.stamina,
        playerAbilities.jump,
        playerAbilities.injury,
        playerAbilities.awareness
    ]]

    return renderedInfo;
}

const passingAbilityHeaders = [
    'Th. Pow.',
    'Th. Acc.',
]


const getPlayerPassingAbilities = (player) => {

    const playerAbilities = player.abilities;

    let renderedInfo = [[
        playerAbilities.throwing_power,
        playerAbilities.throwing_accuracy,
    ]]

    return renderedInfo;
}

const rushingAbilitiesHeaders = [
    'Cry',
    'Br. Tkl.',
    'Stf. Arm',
    'Tr.',
    'Elus',
    'Spin',
    'Juke',
    'BCV'
]


const getPlayerRushingAbilities = (player) => {

    const playerAbilities = player.abilities;

    let renderedInfo = [[
        playerAbilities.carry,
        playerAbilities.break_tackle,
        playerAbilities.stiff_arm,
        playerAbilities.trucking,
        playerAbilities.elusiveness,
        playerAbilities.spin_move,
        playerAbilities.juke_move,
        playerAbilities.ball_carrier_vision
    ]]

    return renderedInfo;
}

const recAbilitiesHeaders = [
    'Ctch',
    'Rte',
    'CiT',
    'Rel.',
    'Spec. Ctch.',
]


const getPlayerRecAbilities = (player) => {

    const playerAbilities = player.abilities;

    let renderedInfo = [[
        playerAbilities.catch,
        playerAbilities.route_running,
        playerAbilities.catch_in_traffic,
        playerAbilities.release,
        playerAbilities.spec_catch
    ]]

    return renderedInfo;
}

const tackleAbilitiesHeaders = [
    'Tkl',
    'Hit Pow.',
    'Bl. Shed',
    'Pow. Move',
    'Fin. Move',
    'Purs.',
    'Play Rec.'
]


const getPlayerTackleAbilities = (player) => {

    const playerAbilities = player.abilities;

    let renderedInfo = [[
        playerAbilities.tackling,
        playerAbilities.hit_power,
        playerAbilities.block_shedding,
        playerAbilities.power_moves,
        playerAbilities.finesse_moves,
        playerAbilities.pursuit,
        playerAbilities.play_recognition,
    ]]

    return renderedInfo;
}

const coverageAbilitiesHeaders = [
    'Man',
    'Zone',
    'Press',
    'Catch',
]

const getPlayerCoverageAbilities = (player) => {

    const playerAbilities = player.abilities;

    let renderedInfo = [[
        playerAbilities.man_coverage,
        playerAbilities.zone_coverage,
        playerAbilities.press,
        playerAbilities.catch,
    ]]

    return renderedInfo;
}

const playerPassingHeaders = [
    'Comp',
    'Att',
    'Yds',
    'YPG',
    'TDs',
    'INTs',
    'Rtg'
]

// Get player stats
const getPlayerPassingStats = (playerStats) => {

    let renderInfo = [[
        playerStats.completions,
        playerStats.pass_att,
        playerStats.pass_yards,
        playerStats.pass_yp_game,
        playerStats.pass_tds,
        playerStats.ints,
        playerStats.pass_rating
    ]]
    
    return renderInfo
}

const playerRushingHeaders = [
    'Att',
    'Yds',
    'YPG',
    'TDs',
    'Br Tkl',
    'Fum'
]

const getPlayerRushingStats = (rushStats) => {

    let renderInfo = [[
        rushStats.rush_att,
        rushStats.rush_yards,
        rushStats.rush_yp_game,
        rushStats.rush_tds,
        rushStats.broke_tkls,
        rushStats.fumbles
    ]]

    return renderInfo
}

const playerRecHeaders = [
    'Rec',
    'Yds',
    'YPG',
    'TDs',
    'YAC',
    'Drp'
]

const getPlayerRecStats = (recStats) => {

    let renderInfo = [[
        recStats.receptions,
        recStats.rec_yards,
        recStats.rec_yp_game,
        recStats.rec_tds,
        recStats.yac,
        recStats.drops
    ]]

    return renderInfo
}

const playerTackleHeaders = [
    'Tkls',
    'TFL',
    'Sacks',
    'Pass Def',
]

const getPlayerTackleStats = (tackleStats) => {

    let renderInfo = [[
        tackleStats.total_tkls,
        tackleStats.tfl,
        tackleStats.sacks,
        tackleStats.pass_def,
    ]]

    return renderInfo
}

const playerDefToHeaders = [
    'INTs',
    'FF',
    'FR',
    'TDs',
    'Safe.'
]

const getPlayerDefToStats = (toStats) => {

    let renderInfo = [[
        toStats.ints_made,
        toStats.forced_fumbles,
        toStats.fumbles_rec,
        toStats.def_tds,
        toStats.safeties
    ]]

    return renderInfo
}

const playerKrHeaders = [
    'Ret',
    'Yds',
    'AVG',
    'Long',
    'TDs'
]

const getPlayerKrStats = (krStats) => {

    let renderInfo = [[
        krStats.kick_returns,
        krStats.kr_yds,
        krStats.kr_avg,
        krStats.long_kr,
        krStats.kr_tds
    ]]

    return renderInfo
}

const playerPrHeaders = [
    'Ret',
    'Yds',
    'AVG',
    'Long',
    'TDs'
]

const getPlayerPrStats = (prStats) => {

    let renderInfo = [[
        prStats.punt_returns,
        prStats.pr_yds,
        prStats.pr_avg,
        prStats.long_pr,
        prStats.pr_tds
    ]]

    return renderInfo
}

const playerKickingHeaders = [
    'FG',
    'FG Att',
    'FG %',
    'Long',
    'XP',
    'XP Att',
    'XP %'
]

const getPlayerKickingStats = (kickStats) => {

    let renderInfo = [[
        kickStats.fg_made,
        kickStats.fg_att,
        kickStats.fg_pct,
        kickStats.long_fg,
        kickStats.xp_made,
        kickStats.xp_att,
        kickStats.xp_pct
    ]]

    return renderInfo
}

const playerPuntingHeaders = [
    'Punts',
    'Yds',
    'AVG',
    'Long',
    '< 20'
]

const getPlayerPuntingStats = (puntStats) => {

    let renderInfo = [[
        puntStats.number_punts,
        puntStats.total_punt_yards,
        puntStats.punt_avg,
        puntStats.long_punt,
        puntStats.inside_twenty
    ]]

    return renderInfo
}

export {
    athleticAbilitiesHeaders,
    getPlayerAthleticAbilities,
    passingAbilityHeaders,
    getPlayerPassingAbilities,
    rushingAbilitiesHeaders,
    getPlayerRushingAbilities,
    recAbilitiesHeaders,
    getPlayerRecAbilities,
    tackleAbilitiesHeaders,
    getPlayerTackleAbilities,
    coverageAbilitiesHeaders,
    getPlayerCoverageAbilities,
    playerPassingHeaders,
    getPlayerPassingStats,
    playerRushingHeaders,
    getPlayerRushingStats,
    playerRecHeaders,
    getPlayerRecStats,
    playerTackleHeaders,
    getPlayerTackleStats,
    playerDefToHeaders,
    getPlayerDefToStats,
    playerKrHeaders,
    getPlayerKrStats,
    playerPrHeaders,
    getPlayerPrStats,
    playerKickingHeaders,
    getPlayerKickingStats,
    playerPuntingHeaders,
    getPlayerPuntingStats
}
