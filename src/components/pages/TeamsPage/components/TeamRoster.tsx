import * as React from 'react';
import { LargeTable, TableContainer } from 'components/common';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import { rosterHeaders } from '../tableTransform';
import { RosterPlayer } from 'api/teams';
import {getPlayerYearAndRedshirt} from 'utils';
import style from '../teamsPage.module.scss';

type Props = {
    roster: RosterPlayer[];
};

const TeamRoster = ({ roster }: Props) => {
    const getRosterInfo = () => {
        return roster.map((player: RosterPlayer) => (
            <React.Fragment key={player.id}>
                <Table.Row>
                    <Table.Cell>
                        <Link to={`/players/${player.id}`} className={style.tableLink}>
                            {player.first_name} {player.last_name}
                        </Link>
                    </Table.Cell>
                    <Table.Cell>{getPlayerYearAndRedshirt(player)}</Table.Cell>
                    <Table.Cell>
                        {`${player.height} / ${player.weight}`}
                    </Table.Cell>
                    <Table.Cell>{player.jersey_number}</Table.Cell>
                    <Table.Cell>{player.position}</Table.Cell>
                    <Table.Cell>{player.overall}</Table.Cell>
                </Table.Row>
            </React.Fragment>
        ));
    };

    return (
        <>
            <TableContainer title='Roster'>
                <LargeTable header={rosterHeaders} contents={getRosterInfo()} />
            </TableContainer>
        </>
    );
};

export default TeamRoster;
