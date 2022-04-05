import { render, screen } from '@testing-library/react';
import { LargeTable } from '..';

import TableContainer from './TableContainer';

describe('TableContainer testing suite', () => {
    it('should render a container for a table', () => {
        const tableFields = [
            ['Record', '11 - 0'],
            ['Overall', 78.4],
            ['Offense', 81],
            ['Defense', 76.1],
            ['Sp. Teams', 76.5],
        ];

        render(
            <TableContainer title='Testing Container'>
                <LargeTable contents={tableFields} />
            </TableContainer>
        );

        expect(screen.getByText('Testing Container')).toBeInTheDocument();
        expect(
            screen.getByTestId('table-body-without-header')
        ).toBeInTheDocument();
    });
});
