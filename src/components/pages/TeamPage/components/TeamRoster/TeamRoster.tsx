import * as React from 'react';
import { LargeTable, TableContainer } from 'components/common';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import { rosterHeaders } from '../tableTransform';
import { RosterPlayer } from 'api/teams';
import {getPlayerYearAndRedshirt} from 'utils';
import { playerPositions } from 'constants/constants';
import globalStyle from '../../../../../styles/global.module.scss';
import style from './teamRoster.module.scss';


type Props = {
    roster: RosterPlayer[];
    header: string
};


const TeamRoster = ({ roster, header }: Props) => {

    const [filteredRoster, setFilteredRoster] = React.useState<RosterPlayer[]>(roster);
    const [activeBtn, setActiveBtn] = React.useState<string>('All');

    React.useEffect(() => {}, [filteredRoster]);

    const handleClick = (position: string): void=> {
        const updatedRoster: RosterPlayer[] = [];

        roster.forEach((player: RosterPlayer) => {
            if (player.position === position) {
                updatedRoster.push(player);
            }
        });
        setActiveBtn(position);
        setFilteredRoster(updatedRoster);
    }

    const resetRoster = (): void  => {
        setFilteredRoster(roster);
        setActiveBtn('All');
    }

    const positionBtns = (
        <div className={style.btnContainer}>
            <button 
                className={activeBtn === 'All' ? style.activeBtn : style.btn}
                onClick={() => resetRoster()}
            >
                All
            </button>
            {playerPositions.map(pos => 
                <button 
                    className={pos === activeBtn ? style.activeBtn : style.btn}
                    onClick={() => handleClick(pos)}
                >
                    {pos}
                </button>
            )}
        </div>
    );

    const tableHeader: string = `${header} Roster`;

    const getRosterInfo = () => {
        return filteredRoster.map((player: RosterPlayer) => (
            <React.Fragment key={player.id}>
                <Table.Row>
                    <Table.Cell>
                        <Link to={`/players/${player.id}`} className={globalStyle.tableLink}>
                            {player.first_name} {player.last_name}
                        </Link>
                    </Table.Cell>
                    <Table.Cell>{getPlayerYearAndRedshirt(player)}</Table.Cell>
                    <Table.Cell>
                        {`${player.height} / ${player.weight}`}
                    </Table.Cell>
                    <Table.Cell>{player.jersey_number}</Table.Cell>
                    <Table.Cell>{player.position}</Table.Cell>
                    <Table.Cell>{player.overall}</Table.Cell>
                </Table.Row>
            </React.Fragment>
        ));
    };


    return (
        <>
            {positionBtns}
            <TableContainer title={tableHeader}>
                <LargeTable header={rosterHeaders} contents={getRosterInfo()} />
            </TableContainer>
        </>
    );
};

export default TeamRoster;
