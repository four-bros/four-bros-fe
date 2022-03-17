import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';

import { DropdownTeamOption } from 'components/pages/TeamsPage/TeamsPage';

import style from './teamsDropdown.module.scss';

type Props = {
    options: DropdownTeamOption[];
    setSelection: (_: any, { value }: any) => void;
    selection?: string;
};
const TeamsDropdown = ({ options, setSelection, selection }: Props) => {
    // There is a known bug, for progress updates, see: https://github.com/Semantic-Org/Semantic-UI-React/pull/4233
    return (
        <div className={style.dropdownContainer}>
            {options && (
                <Dropdown
                    placeholder='Select a team'
                    fluid
                    search
                    selection
                    options={options}
                    onChange={setSelection}
                    value={selection}
                />
            )}
        </div>
    );
};

export default TeamsDropdown;
