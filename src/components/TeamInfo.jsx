import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TeamInfo() {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    const fetchTeam = () => {
      axios
        .get(`https://four-bros-be.herokuapp.com/teams/${teamId}`)
        .then((res) => {
          setTeam(res.data);
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchTeam();
    // eslint-disable-next-line
  }, []);

  if (!team) {
    return <h1>Could not find a team for ID {teamId}</h1>;
  } else {
    return (
      <div>
        <div className="team_info_container">
          <div className="team_rank_and_name_container">
            <p className="team_rank"># {team.coachs_poll_rank}</p>
            <h1 className="team_name">
              {team.team_name} {team.nickname}
            </h1>
          </div>
          <div className="team_record">
            {team.wins} - {team.losses}
          </div>
        </div>
      </div>
    );
  }
}
