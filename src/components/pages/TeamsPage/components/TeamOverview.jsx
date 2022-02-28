import * as React from "react";
import { Table } from "semantic-ui-react";

import style from "./teamOverview.module.scss";

const TeamOverview = ({ simplifiedTeam, overview, overallStats }) => {
  return (
    <div className={style.teamOverview}>
      {/* <h1>Team Overview</h1> */}
      {/* 1st section */}
      <div className={style.teamName}>
        <h3>#{simplifiedTeam.bcs_rank}</h3>
        <h2>
          {simplifiedTeam.team_name} {simplifiedTeam.nickname}
        </h2>
      </div>
      {/* 2nd section */}
      <div className={style.teamSummary}>
        <h3>
          {simplifiedTeam.wins} - {simplifiedTeam.losses}
        </h3>
        <h3>Overall = {overview.avg_overall}</h3>
        <h3>Offense = {overview.avg_offense}</h3>
        <h3>Defense = {overview.avg_defense}</h3>
        <h3>Sp. Teams = {overview.avg_sp_teams}</h3>
      </div>
      {/* 3rd section */}
      <div className={style.tablesContainer}>
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
        </div>
        <div>
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
    </div>
  );
};

export default TeamOverview;
