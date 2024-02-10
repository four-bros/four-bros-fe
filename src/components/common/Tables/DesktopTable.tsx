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

const DesktopTable = ({ dataObjects, category, headers, fields, title, includePlayerDetails, includeTeamDetails }: Props) => {
    const [sortedDataObjects, setSortedDataObjects] = React.useState<any[]>(dataObjects);
    const fieldsArray = Array.from(fields);
    const headersToFieldsMap: Map<string, string> = new Map();
    const statHeaders = headers.filter(header => header !== 'Name' && header !== 'Team');

    statHeaders.map((header: string, i: number) => {
        if (header )
        headersToFieldsMap.set(header, fieldsArray[i])
    });

    const handleSort = (header: string) => {
        const field = headersToFieldsMap.get(header);
        if (!field) throw new Error('whoops');
        const sortedArray = category 
                                ? dataObjects.sort((a: any, b: any) => b[category][field] - a[category][field]) 
                                : dataObjects.sort((a: any, b: any) => b[field] - a[field]);
        setSortedDataObjects([...sortedArray]);
    }

    const table = (
        <Table className={style.table} sortable={true}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan={headers.length} className={style.tableTitle}>{title}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Header>
                <Table.Row>
                    {headers.map((text: string, idx: number) => (
                        <Table.HeaderCell key={`${text}-${idx}`} className={style.tableHeader} onClick={() => handleSort(text)}>
                            {text}
                        </Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {sortedDataObjects.map((object: any, idx: number) => {
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

export default DesktopTable;
