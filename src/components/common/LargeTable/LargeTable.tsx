import { Table } from 'semantic-ui-react';

type Props = {
    header?: string[];
    contents: any;
};

const LargeTable = ({ header, contents }: Props) => {
    return (
        <div>
            <Table unstackable small='true'>
                {header ? (
                    <>
                        <Table.Header>
                            <Table.Row>
                                {header.map((text: string, idx: number) => (
                                    <Table.HeaderCell key={`${text}-${idx}`}>
                                        {text}
                                    </Table.HeaderCell>
                                ))}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>{contents}</Table.Body>
                    </>
                ) : (
                    <Table.Body>
                        {contents.map((row: any, idx: number) => (
                            <Table.Row key={`row-${idx}`}>
                                {row.map((player: string, idx: number) => (
                                    <Table.Cell key={`${player[0]}-${idx}`}>
                                        {player}
                                    </Table.Cell>
                                ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                )}
            </Table>
        </div>
    );
};

export default LargeTable;
