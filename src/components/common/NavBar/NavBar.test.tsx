import {screen, render} from '@testing-library/react';

import NavBar from './NavBar';

describe('NavBar test suite', () => {
    it('should have Teams in navbar', () => {
        render(<NavBar />);
        expect(screen.getByText('Teams')).toBeInTheDocument();
        expect(screen.getByText('Season')).toBeInTheDocument();
        expect(screen.getByText('Records')).toBeInTheDocument();
    })
})