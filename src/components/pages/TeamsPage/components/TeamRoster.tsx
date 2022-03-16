import { LargeTable, TableContainer } from 'components/common';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import { rosterHeaders } from '../tableTransform';
import { RosterPlayer } from 'api/teams';

type Props = {
    roster: RosterPlayer[];
};

const TeamRoster = ({ roster }: Props) => {
    const getRosterInfo = () => {
        return roster.map((player: RosterPlayer) => (
            <>
                <Table.Row>
                    <Table.Cell>
                        <Link to={`/players/${player.id}`}>
                            {player.first_name} {player.last_name}
                        </Link>
                        ,
                    </Table.Cell>
                    <Table.Cell>{player.player_year}</Table.Cell>
                    <Table.Cell>
                        {`${player.height} / ${player.weight}`}
                    </Table.Cell>
                    <Table.Cell>{player.jersey_number}</Table.Cell>
                    <Table.Cell>{player.position}</Table.Cell>
                    <Table.Cell>{player.overall}</Table.Cell>
                </Table.Row>
            </>
        ));
    };

    return (
        <div>
            <TableContainer title='Roster'>
                <LargeTable header={rosterHeaders} contents={getRosterInfo()} />
            </TableContainer>
        </div>
    );
};

export default TeamRoster;
