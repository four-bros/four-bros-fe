import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";

const TeamsDropdown = ({ options, setSelection, selection }) => {
  return (
    <div>
      <Dropdown
        placeholder="Select a team"
        fluid
        search
        selection
        options={options}
        onChange={setSelection}
        value={selection}
      />
    </div>
  );
};

export default TeamsDropdown;
