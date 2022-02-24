import * as React from "react";
import { Table } from "semantic-ui-react";

const TeamOverview = ({ simplifiedTeam, overview, overallStats }) => {
  return (
    <div>
      <h1>Team Overview</h1>
      {/* 1st section */}
      <div>
        <h4>#{simplifiedTeam.bcs_rank}</h4>
        <h2>
          {simplifiedTeam.team_name} {simplifiedTeam.nickname}
        </h2>
      </div>
      {/* 2nd section */}
      <div>
        <h3>
          {simplifiedTeam.wins} - {simplifiedTeam.losses}
        </h3>
        <h3>Overall = {overview.avg_overall}</h3>
        <h3>Offense = {overview.avg_offense}</h3>
        <h3>Defense = {overview.avg_defense}</h3>
        <h3>Sp. Teams = {overview.avg_sp_teams}</h3>
      </div>
      {/* 3rd section */}
      <div>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>PPG</Table.Cell>
              <Table.Cell>{overallStats.ppg}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Total YPG</Table.Cell>
              <Table.Cell>{overallStats.total_ypg}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Rush YPG</Table.Cell>
              <Table.Cell>{overallStats.rush_ypg}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Pass YPG</Table.Cell>
              <Table.Cell>{overallStats.pass_ypg}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>TOs</Table.Cell>
              <Table.Cell>{overallStats.turnovers}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>INTs</Table.Cell>
              <Table.Cell>{overallStats.ints}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Fumbles</Table.Cell>
              <Table.Cell>{overallStats.fr}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Def. TDs</Table.Cell>
              <Table.Cell>{overallStats.def_tds}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TeamOverview;
