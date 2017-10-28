import React from 'react';

import './guess-feedback.css';

export default function Feedback(props) {
    return (
        <div>
            <h2 id='feedback'>{props.feedback}</h2>
        </div>
    )
}