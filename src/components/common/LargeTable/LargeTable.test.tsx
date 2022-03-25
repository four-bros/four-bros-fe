import React from 'react';
import {render, screen} from '@testing-library/react';
import { Table } from 'semantic-ui-react';

import LargeTable from './LargeTable';

describe('LargeTable testing suite', () => {
    it('should render a table with no headers', () => {
        const contents = [
            [
                "TOs",
                10
            ],
            [
                "INTs",
                5
            ],
            [
                "Fumbles",
                5
            ],
            [
                "Def. TDs",
                0
            ]
        ];

        render(<LargeTable contents={contents} />)
        expect(screen.getByTestId('table-body-without-header')).toBeInTheDocument();
    })

    it('should render a table with headers and jsx contents', () => {
        const values = ['Player Name', 1, 2, 3, 4, 5, 6];
        const headers = ['Name', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

        const contents = () => {
            return <>
                <Table.Row>
                {values.map(value => {
                    <h2>{value}</h2>
                })}
                </Table.Row>
            </>
        }

        render(<LargeTable header={headers} contents={contents()} />);
        expect(screen.getByTestId('table-body-with-header')).toBeInTheDocument();
        expect(screen.getByTestId('table-header')).toBeInTheDocument();
    })
})