import React from 'react';

import './topNav.css';

export default function topNav() {
    const right = '+ NEW GAME';
    return (
        <div className="top-nav">
            <div className="right">
                <a href=".">{right}</a>
            </div>
        </div>
    );
};