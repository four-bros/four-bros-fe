import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopReceivingHeaders,
    desktopDefenseHeaders,
    desktopKickReturnHeaders,
    desktopPuntReturnHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
    desktopPassingFields,
    desktopRushingFields,
    desktopReceivingFields,
    desktopDefenseFields,
    desktopKickReturnFields,
    desktopPuntReturnFields,
    desktopKickingFields,
    desktopPuntingFields,
} from '../desktopTableTransform';
import {
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileReceivingHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKickReturnHeaders,
    mobilePuntReturnHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
    mobilePassingFields,
    mobileRushingFields,
    mobileReceivingFields,
    mobileTackleFields,
    mobileDefToFields,
    mobileKickReturnFields,
    mobilePuntReturnFields,
    mobileKickingFields,
    mobilePuntingFields,
} from '../mobileTableTransform';
import { getTopThree } from '../tableTransform';
import { getFields } from 'utils';
import type {
    SingleTeamLeaders,
    Defense,
    KickReturn,
    Kicking,
    Passing,
    PuntReturn,
    Punting,
    Receiving,
    Rushing,
    Total,
    TeamDetails,
} from 'api/teams';
import style from './teamLeaders.module.scss';
import globalStyle from '../../../../../styles/global.module.scss';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import { Teams } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';


type Props = {
    infoType: string;
    teamId: string;
    teamDetails: TeamDetails;
};

const TeamLeaders = ({ infoType, teamId, teamDetails }: Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [teamLeaders, setTeamLeaders] = React.useState<SingleTeamLeaders>();
    const [tableType, setTableType] = React.useState('offense');
    const mobile = useMediaQuery('(max-width: 767px)');

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            const teamPlayerStats = await Teams.getTeamPlayerStats(teamId);
            if (!teamPlayerStats) throw new Error('unable to get team player stats');
            setTeamLeaders(teamPlayerStats);
            setIsLoading(false);
        })();
    }, [teamId]);

    const fieldRows = (
        leadersArr:
            | Defense
            | KickReturn
            | Kicking
            | Passing
            | PuntReturn
            | Punting
            | Receiving
            | Rushing
            | Total,
        fields: Set<string>,
        fieldType: string
    ) => {
        let conditionalLeaders;

        if (infoType === 'overview') {
            conditionalLeaders = getTopThree(leadersArr);
        } else {
            conditionalLeaders = leadersArr;
        }

        return (
            <>
                {conditionalLeaders.map((leader: any, idx: number) => {
                    const otherFields = getFields(leader[fieldType], fields);
                    const fieldsArr = Array.from(otherFields);

                    return (
                        <React.Fragment
                            key={`row-${idx}-${leader.player_details.id}`}
                        >
                            <Table.Row>
                                <Table.Cell
                                    key={`cell-${leader.player_details.id}`}
                                >
                                    <Link
                                        to={`/players/${leader.player_details.id}`}
                                        className={globalStyle.tableLink}
                                    >
                                        {leader.player_details.first_name}{' '}
                                        {leader.player_details.last_name}
                                    </Link>
                                </Table.Cell>
                                {fieldsArr.map(
                                    (fieldValue: number, idx: number) => {
                                        return (
                                            <Table.Cell
                                                key={`cell-${idx}-${fieldValue}`}
                                            >
                                                {Math.floor(fieldValue).toLocaleString('en-US')}
                                            </Table.Cell>
                                        );
                                    }
                                )}
                            </Table.Row>
                        </React.Fragment>
                    );
                })}
            </>
        );
    };

    const header = infoType === 'overview' ? `${teamDetails.team_name} Statistical Leaders` : `${teamDetails.team_name} Player Stats`

    const teamLeadersComponent =  (
        <>
        <h1 className={style.header}>{header}</h1>
            <div className={style.btnContainer}>
                <Button
                    name='offense'
                    active={tableType === 'offense'}
                    onClick={() => setTableType('offense')}
                >
                    Offense
                </Button>
                <Button
                    name='defense'
                    active={tableType === 'defense'}
                    onClick={() => setTableType('defense')}
                >
                    Defense
                </Button>
                <Button
                    name='special'
                    active={tableType === 'special'}
                    onClick={() => setTableType('special')}
                >
                    Special Teams
                </Button>
            </div>

            {teamLeaders && tableType === 'offense' && (
                <>
                    {teamLeaders.passing.length > 0 && mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={mobilePassingHeaders}
                                contents={fieldRows(
                                    teamLeaders.passing,
                                    mobilePassingFields,
                                    'passing_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {teamLeaders.passing.length > 0 && !mobile && (
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={desktopPassingHeaders}
                                contents={fieldRows(
                                    teamLeaders.passing,
                                    desktopPassingFields,
                                    'passing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.rushing.length > 0 && mobile && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={mobileRushingHeaders}
                                contents={fieldRows(
                                    teamLeaders.rushing,
                                    mobileRushingFields,
                                    'rushing_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {teamLeaders.rushing.length > 0 && !mobile && (
                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={desktopRushingHeaders}
                                contents={fieldRows(
                                    teamLeaders.rushing,
                                    desktopRushingFields,
                                    'rushing_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.receiving.length > 0 && mobile && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={mobileReceivingHeaders}
                                contents={fieldRows(
                                    teamLeaders.receiving,
                                    mobileReceivingFields,
                                    'receiving_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {teamLeaders.receiving.length > 0 && !mobile && (
                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={desktopReceivingHeaders}
                                contents={fieldRows(
                                    teamLeaders.receiving,
                                    desktopReceivingFields,
                                    'receiving_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {teamLeaders && tableType === 'defense' && (
                <>
                    {teamLeaders.defense.length > 0 && mobile && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={mobileTackleHeaders}
                                contents={fieldRows(
                                    teamLeaders.defense,
                                    mobileTackleFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.defense.length > 0 && mobile && (
                        <TableContainer title='Turnovers'>
                            <LargeTable
                                header={mobileDefToHeaders}
                                contents={fieldRows(
                                    teamLeaders.defense_to,
                                    mobileDefToFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.defense.length > 0 && !mobile && (
                        <TableContainer title='Defense'>
                            <LargeTable
                                header={desktopDefenseHeaders}
                                contents={fieldRows(
                                    teamLeaders.defense,
                                    desktopDefenseFields,
                                    'defensive_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {teamLeaders && tableType === 'special' && (
                <>
                    {teamLeaders.kick_return.length > 0 && mobile && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={mobileKickReturnHeaders}
                                contents={fieldRows(
                                    teamLeaders.kick_return,
                                    mobileKickReturnFields,
                                    'kick_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.kick_return.length > 0 && !mobile && (
                        <TableContainer title='Kick Return'>
                            <LargeTable
                                header={desktopKickReturnHeaders}
                                contents={fieldRows(
                                    teamLeaders.kick_return,
                                    desktopKickReturnFields,
                                    'kick_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.punt_return.length > 0 && mobile && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={mobilePuntReturnHeaders}
                                contents={fieldRows(
                                    teamLeaders.punt_return,
                                    mobilePuntReturnFields,
                                    'punt_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.punt_return.length > 0 && !mobile && (
                        <TableContainer title='Punt Return'>
                            <LargeTable
                                header={desktopPuntReturnHeaders}
                                contents={fieldRows(
                                    teamLeaders.punt_return,
                                    desktopPuntReturnFields,
                                    'punt_return_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.kicking.length > 0 && mobile && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={mobileKickingHeaders}
                                contents={fieldRows(
                                    teamLeaders.kicking,
                                    mobileKickingFields,
                                    'kicking_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {teamLeaders.kicking.length > 0 && !mobile && (
                        <TableContainer title='Kicking'>
                            <LargeTable
                                header={desktopKickingHeaders}
                                contents={fieldRows(
                                    teamLeaders.kicking,
                                    desktopKickingFields,
                                    'kicking_stats'
                                )}
                            />
                        </TableContainer>
                    )}

                    {teamLeaders.punting.length > 0 && mobile && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={mobilePuntingHeaders}
                                contents={fieldRows(
                                    teamLeaders.punting,
                                    mobilePuntingFields,
                                    'punting_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                    {teamLeaders.punting.length > 0 && !mobile && (
                        <TableContainer title='Punting'>
                            <LargeTable
                                header={desktopPuntingHeaders}
                                contents={fieldRows(
                                    teamLeaders.punting,
                                    desktopPuntingFields,
                                    'punting_stats'
                                )}
                            />
                        </TableContainer>
                    )}
                </>
            )}
        </>
    );

    return isLoading ? <LoadingSpinner /> : teamLeadersComponent;
};

export default TeamLeaders;
