import React from 'react';

import './status.css';

export default function Status(props) {
    const text  = props.currentStatus;
    return (
        <div className="status">
            {text}
        </div>
    );
};