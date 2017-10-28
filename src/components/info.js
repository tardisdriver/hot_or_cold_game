import React from 'react';

import './info.css';

export default function Info(props) {
    return (
        <div id='info'>
            <ul>
                <li><button onClick={props.showInstructions}>Instructions</button></li>
                <li><button onClick={props.newGame}>New Game</button></li>
            </ul>
        </div>
    );
}