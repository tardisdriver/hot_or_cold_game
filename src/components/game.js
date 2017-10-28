import React from 'react';

import Title from './title';
import Info from './info';
import Instructions from './instructions';
import Feedback from './guess-feedback';
import GuessForm from './guess-form';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Guess a number!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
        };
    }

    newGame() {
        this.setState({
            guesses: [],
            feedback: 'Guess a number!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
        });
    }

    showInstructions() {
        this.setState({
            instructions: true,
        });
    }

    hideInstructions() {
        this.setState({
            instructions: false,
        });
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'That\'s not a number!'
            });
            return;
        }
        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re so cold, an Eskimo tried to make a house out of you!';
        } else if (difference >= 30) {
            feedback = 'You\'re cold';
        } else if (difference >= 10) {
            feedback = 'Getting warmer...';
        } else if (difference >= 5) {
            feedback = 'So warm you\'re almost hot!';
        } else if (difference >= 1) {
            feedback = 'You\'re so hot, you could eat bread and poop toast!';
        } else {
            feedback = 'That\'s correct!!!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    }

    render() {
        const instructions = this.state.instructions ? <Instructions hideInstructions={() => this.hideInstructions()} /> : null;
        return (
            <div>
                <Title />
                <Info showInstructions={() => this.showInstructions()} newGame={() => this.newGame()} />
                {instructions}
                <Feedback feedback={this.state.feedback} />
                <GuessForm count={this.state.guesses.length}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}