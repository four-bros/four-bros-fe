import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Teams } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import { TeamsDropdown } from 'components/common';
import type { Team } from '../../../interfaces/Teams';

export interface DropdownTeamOption {
    key: number;
    value: number;
    text: string;
}

const TeamsPage = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [allTeams, setAllTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] = React.useState<DropdownTeamOption[]>();
    const navigate = useNavigate();

    React.useEffect(() => {
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
                setIsLoading(false);
            }
        })();
    }, []);

    const handleTeamChange = async (_: any, { value }: any) => {
        if (allTeams) {
            const team = allTeams[value];
            navigate(`/team/${team.id}`);
        }
    };

    const teamsPage = (
        <>
            {teamOptions && (
                <TeamsDropdown
                    options={teamOptions}
                    setSelection={handleTeamChange}
                />
            )}
        </>
    );

    return isLoading ? <LoadingSpinner /> : teamsPage;
};

export default TeamsPage;
