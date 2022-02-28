import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';

import style from './teamsDropdown.module.scss';

const TeamsDropdown = ({ options, setSelection, selection }) => {
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
