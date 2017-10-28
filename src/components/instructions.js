import React from 'react';

import './instructions.css'

export default function Instructions(props) {
    return (
        <div className='instructions'>
            <p>
                Hot or Cold is a simple guessing game.  Guess a number in the box below and the game will let you know if you're getting closer to or further away from the correct number.
            </p>
            <button className='instructionButton' onClick={props.hideInstructions}>Close</button>
        </div>
    );
}