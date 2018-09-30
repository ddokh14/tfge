import React from 'react';
import './AutoInputAdd.css';
import Add from '../../plus.svg'

const AutoInputAdd = ({label,handleAdd}) =>{
    return(
        <div className="auto-input">
            <label className="auto-input-lbl">{label}</label>
            <input className="auto-input-inp"></input>
            <div className="icon add" onClick={handleAdd}><img alt="add" src={Add}></img></div>
        </div>
        
    );
}

export default AutoInputAdd;