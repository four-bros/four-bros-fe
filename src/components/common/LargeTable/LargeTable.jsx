import * as React from 'react';

import { Table } from 'semantic-ui-react';

const LargeTable = ({ header, contents }) => {
    return (
        <div>
            <Table unstackable small='true'>
                {header && (
                    <Table.Header>
                        <Table.Row>
                            {header.map((text, idx) => (
                                <Table.HeaderCell key={`${text}-${idx}`}>
                                    {text}
                                </Table.HeaderCell>
                            ))}
                        </Table.Row>
                    </Table.Header>
                )}

                <Table.Body>
                    {contents.map((row, idx) => (
                        <Table.Row key={`row-${idx}`}>
                            {row.map((player, idx) => (
                                <Table.Cell key={`${player[0]}-${idx}`}>
                                    {player}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default LargeTable;
