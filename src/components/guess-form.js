import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.onGuess(value);
        this.input.value = '';
    };
    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <span>Type your guess here</span>
                <input type='text' id='userGuess'
                    maxLength='3' autoComplete='off' required
                    ref={input => this.input = input} />
                <input type='submit' id='guessButton' className='button' name='submit' value='Guess!' />
            </form>

        );
    }
};