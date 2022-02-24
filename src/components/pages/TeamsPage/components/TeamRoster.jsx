import * as React from "react";
import { Table } from "semantic-ui-react";

const TeamRoster = ({ roster }) => {
  return (
    <div>
      <h1>Team Roster</h1>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Class</Table.HeaderCell>
            <Table.HeaderCell>Ht/Wt</Table.HeaderCell>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Overall</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {roster.map((player) => (
            <Table.Row key={player.id}>
              <Table.Cell>
                {player.first_name} {player.last_name}
              </Table.Cell>
              <Table.Cell>{player.player_year}</Table.Cell>
              <Table.Cell>
                {player.height} / {player.weight}
              </Table.Cell>
              <Table.Cell>{player.jersey_number}</Table.Cell>
              <Table.Cell>{player.position}</Table.Cell>
              <Table.Cell>{player.overall}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TeamRoster;
