import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => {
        return (
            <span className='guess' key={index}>
                {guess}
            </span>
        );
    });

    return (
        <div className='guessList'>
            {guesses}
        </div>

    )

}