import React from 'react';

import './guessHistory.css';

export default function GuessHistory(props) {
    
    const arr = props.guessArray;
    const listedArray = arr.map((guess, index) => 
        <li key={index}> 
            {guess} 
        </li>
    );

    return (
        <div className="guess-history">
            <ul className="guess-list">
                {listedArray}
            </ul>
        </div>
    );
};

