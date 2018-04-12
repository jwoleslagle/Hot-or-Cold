import React from 'react';

import './guessCounter.css';

export default function GuessCounter(props) {
    const count  = props.guessCount;
    return (
        <div className="guess-counter">
            Guess # <span className="guess-number">{count}</span> !
        </div>
    );
};