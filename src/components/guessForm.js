import React from 'react';

import './guessForm.css';

export default class GuessForm extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        if (this.props.buttonText !== 'New Game') {
          let guess = this.numInput.value;
          this.props.onGuess(guess);
          this.numInput.value = '';
        } else {
          //reset the game by reloading the page
          window.location.reload();
        }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input
                type="number"
                min={1}
                max={100}
                placeholder={"Enter a number: 1-100"}
                ref={input => this.numInput = input}
                required
            />
            <br />
            <button>{this.props.buttonText}</button>
        </form>
      );
    }
  }