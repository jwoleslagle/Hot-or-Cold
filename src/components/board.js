import React from 'react';

import Status from './status';
import GuessCounter from './guessCounter';
import GuessForm from './guessForm';
import GuessHistory from './guessHistory';
import TopNav from './topNav';

import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correctNumber: Math.floor(Math.random() * 100) + 1,
            guessCounter: 1,
            guessHistory: [],
            status: 'Guess Away!',
            buttonText: 'Make a Guess'
        }
    }

    makeDiffVerbose(diff) {
        if (diff > 50) {
            return 'Freezing cold!'
        } else if (diff > 25) {
            return 'Cold'
        } else if (diff > 15) {
            return 'Warm'
        } else if (diff > 10) {
            return 'Very Warm'
        } else if (diff > 5) {
            return 'Hot!'
        } else if (diff >= 2) {
            return 'Really Hot!'
        } else if (diff === 1) {
            return 'Scalding Hot!'
        }
    }

    processGuess(guessNum) {
        const target = this.state.correctNumber;
        //find diff between guess and correct number
        const diff = Math.abs(target - guessNum);
        if (diff > 0) {
            console.log(diff);
            //iterate guessCounter
            const currentCount = this.state.guessCounter + 1;
            //set status to give guess feedback
            const feedback = this.makeDiffVerbose(diff);
            this.setState({
                guessCounter: currentCount,
                status: feedback,
                guessHistory: [...this.state.guessHistory, guessNum]
            });
        } else {
            const winnerString = 'Winner! Guessed ' + this.state.correctNumber + ' in ' + this.state.guessCounter + ' guesses!';
            this.setState({
                status: winnerString,
                buttonText: 'New Game'
            });
        }
    }

    render() {
        return (
            document.title = 'Hot || Cold',
            <div className="board">
                <TopNav />
                <h1>HOT or COLD</h1>
                <section className="game-container">
                    <div className="game">
                        <Status currentStatus={this.state.status} />
                        <GuessForm onGuess={ guess => this.processGuess(guess)} buttonText={this.state.buttonText} />
                        <GuessCounter guessCount={this.state.guessCounter} />
                        <GuessHistory guessArray={this.state.guessHistory} />
                    </div>
                </section>
            </div>
        );
    }
}