import React from 'react';
import './OptionsButton.css';
import Calendar from './calendar.svg';
import Settings from './settings.svg';


const OptionsButton = ({label,onClick}) => {
    return(
        <div className="extra-filter">
            <button className="options-button" onClick={onClick}><img alt="calendar" src={Calendar}></img></button>
            <button className="options-button" onClick={onClick}><img alt="settings" src={Settings}></img></button>
        </div>
    );
}

export default OptionsButton;