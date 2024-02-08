import { Table } from 'semantic-ui-react';
import style from './playerOfTheWeek.module.scss'
import { getFieldValues } from 'utils';

type Props = {
    dataObject: object;
    category: string;
    headers: string[];
    fields: Set<string>;
    title: string;
}

const SingleRowTable = ({ dataObject, category, headers, fields, title }: Props) => {
    const fieldValues = getFieldValues(dataObject[category], fields);
    const fieldsArray = Array.from(fieldValues);

    const table = (
        <div className={style.tableContainer}>
            <Table className={style.table} sortable={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className={style.tableTitle} colSpan={headers.length}>{title}</Table.HeaderCell>
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
                </Table.Body>
            </Table>
        </div>
    )

    return table;
}

export default SingleRowTable;
