import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import globalStyle from '../../../styles/global.module.scss';
import style from './commonTable.module.scss';
import { getFieldValues } from 'utils';
import { PlayerDetails } from 'interfaces/Player';

type Props = {
    dataObjects: any[];
    category?: string;
    headers: string[];
    fields: Set<string>;
    title: string;
    includePlayerDetails: boolean;
    includeTeamDetails: boolean;
}

const MobileTable = ({ dataObjects, category, headers, fields, title, includePlayerDetails, includeTeamDetails }: Props) => {
    const table = (
        <Table className={style.table} size='small' compact={true} unstackable={true}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan={headers.length} className={style.tableTitle}>{title}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Header>
                <Table.Row>
                    {headers.map((text: string, idx: number) => (
                        <Table.HeaderCell key={`${text}-${idx}`} className={style.tableHeader}>
                            {text}
                        </Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {dataObjects.map((object: any, idx: number) => {
                    const data = category ? object[category] : object;
                    const fieldValues = getFieldValues(data, fields);
                    const fieldsArray = Array.from(fieldValues);
                    const playerDetails: PlayerDetails = object.player_details || undefined;
                    const teamId = playerDetails ? playerDetails.team_id : data.teamId;
                    const teamName = playerDetails ? playerDetails.team_name : data.teamName;

                    return (
                        <React.Fragment>
                            {includePlayerDetails && includeTeamDetails && (
                                <Table.Row>
                                    <Table.Cell key={`cell-${playerDetails.id}`} className={style.tableCell}>
                                        <Link
                                            to={`/players/${playerDetails.id}`}
                                            className={globalStyle.tableLink}
                                        >
                                            {playerDetails.first_name}{' '}
                                            {playerDetails.last_name}
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell key={`cell-${playerDetails.team_id}`} className={style.tableCell}>
                                        <Link
                                            to={`/team/${teamId}`}
                                            className={globalStyle.tableLink}
                                        >
                                            {teamName}
                                        </Link>
                                    </Table.Cell>
                                    {fieldsArray.map(
                                        (fieldValue: number, idx: number) => {
                                            return (
                                                <Table.Cell
                                                    key={`cell-${idx}-${fieldValue}`}
                                                    className={style.tableCell}
                                                >
                                                    {Math.floor(fieldValue).toLocaleString('en-US')}
                                                </Table.Cell>
                                            );
                                        }
                                    )}
                                </Table.Row>
                            )}

                            {includePlayerDetails && !includeTeamDetails && (
                                <Table.Row>
                                    <Table.Cell key={`cell-${playerDetails.id}`} className={style.tableCell}>
                                        <Link
                                            to={`/players/${playerDetails.id}`}
                                            className={globalStyle.tableLink}
                                        >
                                            {playerDetails.first_name}{' '}
                                            {playerDetails.last_name}
                                        </Link>
                                    </Table.Cell>
                                    {fieldsArray.map(
                                        (fieldValue: number, idx: number) => {
                                            return (
                                                <Table.Cell
                                                    key={`cell-${idx}-${fieldValue}`}
                                                    className={style.tableCell}
                                                >
                                                    {Math.floor(fieldValue).toLocaleString('en-US')}
                                                </Table.Cell>
                                            );
                                        }
                                    )}
                                </Table.Row>
                            )}

                            {!includePlayerDetails && includeTeamDetails && (
                                <Table.Row>
                                    <Table.Cell key={`cell-${teamId}`} className={style.tableCell}>
                                        <Link
                                            to={`/team/${teamId}`}
                                            className={globalStyle.tableLink}
                                        >
                                            {teamName}
                                        </Link>
                                    </Table.Cell>
                                    {fieldsArray.map(
                                        (fieldValue: number, idx: number) => {
                                            return (
                                                <Table.Cell
                                                    key={`cell-${idx}-${fieldValue}`}
                                                    className={style.tableCell}
                                                >
                                                    {Math.floor(fieldValue).toLocaleString('en-US')}
                                                </Table.Cell>
                                            );
                                        }
                                    )}
                                </Table.Row>
                            )}

                            {!includePlayerDetails && !includeTeamDetails && (
                                <Table.Row>
                                    {fieldsArray.map(
                                        (fieldValue: number, idx: number) => {
                                            return (
                                                <Table.Cell
                                                    key={`cell-${idx}-${fieldValue}`}
                                                    className={style.tableCell}
                                                >
                                                    {Math.floor(fieldValue).toLocaleString('en-US')}
                                                </Table.Cell>
                                            );
                                        }
                                    )}
                                </Table.Row>
                            )}
                        </React.Fragment>
                    )
                })}
            </Table.Body>
        </Table>
    )

    return table;
}

export default MobileTable;
