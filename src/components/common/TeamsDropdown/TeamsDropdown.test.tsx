import { screen, render } from '@testing-library/react';

import TeamsDropdown from './TeamsDropdown';

describe('TeamsDropdown testing suite', () => {
    it('Should render a dropdown', () => {
        const dropdownOptons = [
            { key: 1, value: 1, text: 'one' },
            { key: 2, value: 2, text: 'two' },
            { key: 3, value: 3, text: 'three' },
        ];

        render(
            <TeamsDropdown options={dropdownOptons} setSelection={() => {}} />
        );

        expect(screen.getByText('one')).toBeInTheDocument();
    });
});
