import React from 'react';
import { NavBar } from 'components/common';

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className='page-container'>
                <h1>Welcome</h1>
            </div>
        </div>
    );
};

export default HomePage;
