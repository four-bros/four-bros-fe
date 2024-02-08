import { IPlayerOfTheWeek } from '../../../../../../interfaces/Player';
import style from './playerOfTheWeek.module.scss'
import MobileTable from 'components/common/Tables/MobileTable';
import DesktopTable from 'components/common/Tables/DesktopTable';
import {
    mobileDefToFields,
    mobileDefToHeaders,
    mobileKickReturnFields,
    mobileKickReturnHeaders,
    mobilePassingFields,
    mobilePassingHeaders,
    mobilePuntReturnFields,
    mobilePuntReturnHeaders,
    mobileReceivingFields,
    mobileReceivingHeaders,
    mobileRushingFields,
    mobileRushingHeaders
} from './mobileTableTransform';
import {
    desktopPassingHeaders,
    desktopPassingFields,
    desktopRushingHeaders,
    desktopRushingFields,
    desktopReceivingHeaders,
    desktopReceivingFields,
    desktopDefenseHeaders,
    desktopDefenseFields,
    desktopKickReturnHeaders,
    desktopKickReturnFields,
    desktopPuntReturnHeaders,
    desktopPuntReturnFields
} from './desktopTableTransform';

type Props = {
    playerOfTheWeek: IPlayerOfTheWeek;
    mobile: boolean;
}

const PlayerOfTheWeekTable = ({ playerOfTheWeek, mobile }: Props) => {

    return (
        <>
            {/* Mobile rendering */ }
            {mobile && playerOfTheWeek && (
            <div className={style.playerTables}>
                {playerOfTheWeek.player.game_stats.passing.pass_att > 0 && (
                    < MobileTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='passing'
                        headers={mobilePassingHeaders}
                        fields={mobilePassingFields}
                        title='Passing'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.rushing.rush_att > 0 && (
                    < MobileTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='rushing'
                        headers={mobileRushingHeaders}
                        fields={mobileRushingFields}
                        title='Rushing'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.receiving.receptions > 0 && (
                    < MobileTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='receiving'
                        headers={mobileReceivingHeaders}
                        fields={mobileReceivingFields}
                        title='Receiving'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.defensive && (
                    < MobileTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='defensive'
                        headers={mobileDefToHeaders}
                        fields={mobileDefToFields}
                        title='Defense'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.kick_return && (
                    < MobileTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='kick_return'
                        headers={mobileKickReturnHeaders}
                        fields={mobileKickReturnFields}
                        title='Kick Return'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.punt_return && (
                    < MobileTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='punt_return'
                        headers={mobilePuntReturnHeaders}
                        fields={mobilePuntReturnFields}
                        title='Punt Return'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
            </div>
        )}
        {/* Desktop rendering */ }
        {playerOfTheWeek && !mobile && (
            <div className={style.playerTables}>
                {playerOfTheWeek.player.game_stats.passing.pass_att > 0 && (
                    <DesktopTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='passing'
                        headers={desktopPassingHeaders}
                        fields={desktopPassingFields}
                        title='Passing'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.rushing.rush_att > 0 && (
                    <DesktopTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='rushing'
                        headers={desktopRushingHeaders}
                        fields={desktopRushingFields}
                        title='Rushing'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.receiving.receptions > 0 && (
                    <DesktopTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='receiving'
                        headers={desktopReceivingHeaders}
                        fields={desktopReceivingFields}
                        title='Receiving'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.defensive && (
                    <DesktopTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='defensive'
                        headers={desktopDefenseHeaders}
                        fields={desktopDefenseFields}
                        title='Defense'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.kick_return && (
                    <DesktopTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='kick_return'
                        headers={desktopKickReturnHeaders}
                        fields={desktopKickReturnFields}
                        title='Kick Return'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
                {playerOfTheWeek.player.game_stats.punt_return && (
                    <DesktopTable
                        dataObjects={[playerOfTheWeek.player.game_stats]}
                        category='punt_return'
                        headers={desktopPuntReturnHeaders}
                        fields={desktopPuntReturnFields}
                        title='Punt Return'
                        includePlayerDetails={false}
                        includeTeamDetails={false}
                    />
                )}
            </div>
        )}
        </>
    )
}

export default PlayerOfTheWeekTable;
