import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import { Teams } from 'api';
import { RosterPlayer, TeamDetails } from '../../../../../interfaces/Teams';
import {getPlayerYearAndRedshirt} from 'utils';
import { playerPositions } from 'constants/constants';
import globalStyle from '../../../../../styles/global.module.scss';
import style from './teamRoster.module.scss';
import useMediaQuery from 'hooks/useMediaQuery';


type Props = {
    teamId: string;
    teamDetails: TeamDetails;
};

const TeamRoster = ({ teamId, teamDetails }: Props) => {
    const [roster, setRoster] = React.useState<RosterPlayer[]>([]);
    const [filteredRoster, setFilteredRoster] = React.useState<RosterPlayer[]>([]);
    const [activeBtn, setActiveBtn] = React.useState<string>('All');
    const mobile = useMediaQuery('(max-width: 767px)');

    React.useEffect(() => {
        (async () => {
            setFilteredRoster([]);
            setActiveBtn('All');
            const roster = await Teams.getTeamRoster(teamId);
            if (!roster) {throw new Error('Failed to load roster')}
            setRoster(roster.roster);
        })();
    }, [teamId]);

    const rosterHeaders = ['Name', 'Class', 'Ht / Wt', '#', 'Pos', 'Ovr'];

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

    const tableHeader: string = activeBtn === 'All' ? `${teamDetails.team_name} Roster` : `${teamDetails.team_name} ${activeBtn}s`;
    const tableSize = mobile ? 'small' : 'large';

    const renderFullRoster = () => {
        return (
            <Table className={style.table} size={tableSize} compact={mobile} unstackable={mobile}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan={rosterHeaders.length} className={style.tableTitle}>{tableHeader}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Header>
                    <Table.Row>
                        {rosterHeaders.map((text: string, idx: number) => {
                            return <Table.HeaderCell className={style.tableHeader} key={`${text}-${idx}`}>{text}</Table.HeaderCell>
                        })}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {roster.map((player: RosterPlayer) => {
                    return (
                        <Table.Row>
                            <Table.Cell className={style.tableCell}>
                                <Link to={`/players/${player.id}`} className={globalStyle.tableLink}>
                                    {player.first_name} {player.last_name}
                                </Link>
                            </Table.Cell>
                            <Table.Cell className={style.tableCell}>{getPlayerYearAndRedshirt(player)}</Table.Cell>
                            <Table.Cell className={style.tableCell}>{`${player.height} / ${player.weight}`}</Table.Cell>
                            <Table.Cell className={style.tableCell}>{player.jersey_number}</Table.Cell>
                            <Table.Cell className={style.tableCell}>{player.position}</Table.Cell>
                            <Table.Cell className={style.tableCell}>{player.overall}</Table.Cell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        );
    };

    const renderFilteredRoster = () => {
        return (
            <Table className={style.table} size={tableSize} compact={mobile} unstackable={mobile}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan={rosterHeaders.length} className={style.tableTitle}>{tableHeader}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Header>
                    <Table.Row>
                        {rosterHeaders.map((text: string, idx: number) => {
                            return <Table.HeaderCell className={style.tableHeader}>{text}</Table.HeaderCell>
                        })}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {filteredRoster.map((player: RosterPlayer) => {
                        return (
                            <Table.Row>
                                <Table.Cell  className={style.tableCell}>
                                    <Link to={`/players/${player.id}`} className={globalStyle.tableLink}>
                                        {player.first_name} {player.last_name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell className={style.tableCell}>{getPlayerYearAndRedshirt(player)}</Table.Cell>
                                <Table.Cell className={style.tableCell}>{`${player.height} / ${player.weight}`}</Table.Cell>
                                <Table.Cell className={style.tableCell}>{player.jersey_number}</Table.Cell>
                                <Table.Cell className={style.tableCell}>{player.position}</Table.Cell>
                                <Table.Cell className={style.tableCell}>{player.overall}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        );
    }

    const teamRoster = (
        <div>
            {positionBtns}
            {filteredRoster.length === 0 ? renderFullRoster() : renderFilteredRoster()}
        </div>
    );

    return teamRoster;
};

export default TeamRoster;
