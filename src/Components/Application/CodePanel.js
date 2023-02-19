import React from 'react';
import './CodePanel.css';
import FromText from './FromText.js';
import ToText from './ToText';

const CodePanel = ({type="fromText", layout="fromLayout"}) => {
    return (
        <div className={`CodePanel-shape ${layout}`}>
            {type==="fromText"?<FromText />:<ToText />}
        </div>
    );
};

export default CodePanel;