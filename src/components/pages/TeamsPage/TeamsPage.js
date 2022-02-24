import * as React from "react";
import Navbar from "../../NavBar";
import { Teams } from "../../../api";

import TeamsDropdown from "../../common/TeamsDropdown";
import TeamOverview from "./components/TeamOverview";
import TeamRoster from "./components/TeamRoster";
import TeamLeaders from "./components/TeamLeaders";

const TeamsPage = () => {
  const isFirstRender = React.useRef(true);
  const [allTeams, setAllTeams] = React.useState();
  const [teamOptions, setTeamOptions] = React.useState();
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  const [singleTeam, setSingleTeam] = React.useState();
  const [teamLeaders, setTeamLeaders] = React.useState();

  React.useEffect(() => {
    if (isFirstRender.current) {
      (async () => {
        const teams = await Teams.getTeams();
        let newList = [];
        for (let i = 0; i < teams.length; i++) {
          newList.push({
            key: teams[i].id,
            value: i,
            text: `${teams[i].team_name} ${teams[i].nickname}`,
          });
        }
        setTeamOptions(newList);
        setAllTeams(teams);
      })();
      isFirstRender.current = false;
      return;
    }
  }, []);

  const handleChange = (_, { value }) => {
    setSelectedTeam(value);
    getTeam(value);
  };

  const getTeam = async (idx) => {
    const team = await Teams.getSingleTeam(allTeams[idx].id);
    const leaders = await Teams.getSingleTeamLeaders(allTeams[idx].id);
    setTeamLeaders(leaders);
    setSingleTeam(team);
  };

  return (
    <div>
      <Navbar />

      {/* Note: These tables/sections will be styled after the reset file is added in */}
      <TeamsDropdown
        options={teamOptions}
        setSelection={handleChange}
        selection={selectedTeam}
      />

      {singleTeam && (
        <div>
          <p>{singleTeam.team_details.team_name}</p>
          <TeamOverview
            simplifiedTeam={allTeams[selectedTeam]}
            overview={singleTeam.team_details}
            overallStats={singleTeam.team_stats}
          />

          <TeamLeaders leaders={teamLeaders} />

          <TeamRoster roster={singleTeam.team_roster} />
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
