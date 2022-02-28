import * as React from 'react';
import { Table } from 'semantic-ui-react';

import { TableContainer } from 'components/common';

const TeamLeaders = ({ leaders }) => {
    return (
        <div>
            <h1>Team Leaders</h1>
            <div>
                <TableContainer title='Passing'>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Completions</Table.HeaderCell>
                                <Table.HeaderCell>Attempts</Table.HeaderCell>
                                <Table.HeaderCell>Yards</Table.HeaderCell>
                                <Table.HeaderCell>YPG</Table.HeaderCell>
                                <Table.HeaderCell>TDs</Table.HeaderCell>
                                <Table.HeaderCell>INTs</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {leaders.passing_leaders.map((player) => (
                                <Table.Row key={player.player_details.id}>
                                    <Table.Cell>
                                        {player.player_details.first_name}
                                        {player.player_details.last_name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.passing_stats.completions}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.passing_stats.pass_att}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.passing_stats.pass_yards}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.passing_stats.pass_yp_game}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.passing_stats.pass_tds}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.passing_stats.ints}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </TableContainer>
            </div>

            <div>
                <TableContainer title='Rushing'>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Attempts</Table.HeaderCell>
                                <Table.HeaderCell>Yards</Table.HeaderCell>
                                <Table.HeaderCell>YPG</Table.HeaderCell>
                                <Table.HeaderCell>TDs</Table.HeaderCell>
                                <Table.HeaderCell>Fumbles</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {leaders.rushing_leaders.map((player) => (
                                <Table.Row key={player.player_details.id}>
                                    <Table.Cell>
                                        {player.player_details.first_name}{' '}
                                        {player.player_details.last_name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.rushing_stats.rush_att}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.rushing_stats.rush_yards}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.rushing_stats.rush_yp_game}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.rushing_stats.rush_tds}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.rushing_stats.fumbles}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </TableContainer>
            </div>

            <div>
                <TableContainer title='Receiving'>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Catches</Table.HeaderCell>
                                <Table.HeaderCell>Yards</Table.HeaderCell>
                                <Table.HeaderCell>TDs</Table.HeaderCell>
                                <Table.HeaderCell>Drops</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {leaders.receiving_leaders.map((player) => (
                                <Table.Row key={player.player_details.id}>
                                    <Table.Cell>
                                        {player.player_details.first_name}{' '}
                                        {player.player_details.last_name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.receiving_stats.receptions}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.receiving_stats.rec_yards}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.receiving_stats.rec_tds}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.receiving_stats.drops}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <TableContainer title='Defense'>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Tackles</Table.HeaderCell>
                                <Table.HeaderCell>TFL</Table.HeaderCell>
                                <Table.HeaderCell>Sacks</Table.HeaderCell>
                                <Table.HeaderCell>Pass Def.</Table.HeaderCell>
                                <Table.HeaderCell>INTs</Table.HeaderCell>
                                <Table.HeaderCell>FF</Table.HeaderCell>
                                <Table.HeaderCell>FR</Table.HeaderCell>
                                <Table.HeaderCell>TDs</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {leaders.defense_leaders.map((player) => (
                                <Table.Row key={player.player_details.id}>
                                    <Table.Cell>
                                        {player.player_details.first_name}{' '}
                                        {player.player_details.last_name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.total_tkls}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.tfl}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.sacks}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.pass_def}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.ints_made}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.forced_fumbles}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.fumbles_rec}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {player.defensive_stats.def_tds}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default TeamLeaders;
