import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Teams } from 'api';
import { TeamsDropdown } from 'components/common';
import type { Team } from 'api/teams';

export interface DropdownTeamOption {
    key: number;
    value: number;
    text: string;
}

const TeamsPage = () => {
    const isFirstRender = React.useRef(true);
    const [allTeams, setAllTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] =
        React.useState<DropdownTeamOption[]>();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isFirstRender.current) {
            (async () => {
                const teams = await Teams.getTeams();
                let newList: DropdownTeamOption[] = [];
                if (teams) {
                    for (let i = 0; i < teams.length; i++) {
                        newList.push({
                            key: teams[i].id,
                            value: i,
                            text: `${teams[i].team_name} ${teams[i].nickname}`,
                        });
                    }
                    setTeamOptions(newList);
                    setAllTeams(teams);
                }
            })();
            isFirstRender.current = false;
            return;
        }
    }, []);

    const handleTeamChange = async (_: any, { value }: any) => {
        if (allTeams) {
            const team = allTeams[value];
            navigate(`/team/${team.id}`);
        }
    };

    return (
        <>
            {teamOptions && (
                <TeamsDropdown
                    options={teamOptions}
                    setSelection={handleTeamChange}
                />
            )}
        </>
    );
};

export default TeamsPage;
