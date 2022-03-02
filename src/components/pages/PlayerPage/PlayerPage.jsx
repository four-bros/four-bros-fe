import * as React from 'react';

import { NavBar } from 'components/common';

const PlayerPage = () => {
    return (
        <div>
            <NavBar />
            <div className='page-container coming-soon'>
                <h2>Coming Soon...</h2>
            </div>
        </div>
    );
};

export default PlayerPage;
