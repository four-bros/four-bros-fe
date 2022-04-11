import * as React from 'react';
import { Dropdown, DropdownItemProps, Menu } from 'semantic-ui-react';


type Props = {
    setSelection: (_: any, { value }: any) => void;
}

const PlayerButtons = ( {setSelection}: Props ) => {



    return (
        <div>
            <Menu>
                <Dropdown item text='Abilities'>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={setSelection}>Athletic</Dropdown.Item>
                        <Dropdown.Item>Offensive</Dropdown.Item>
                        <Dropdown.Item>Defensive</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text='Stats'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Offense</Dropdown.Item>
                        <Dropdown.Item>Defense</Dropdown.Item>
                        <Dropdown.Item>Special Teams</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>

    )

}


export default PlayerButtons;