import React from 'react';
import FetchData from './FetchData';

function Home() {

    return (
        <>
            <div className="header">
                <span className="logo">D_Code</span>
            </div>
            <div className="container">
                <FetchData />
            </div>

        </>
    );
}

export default Home;