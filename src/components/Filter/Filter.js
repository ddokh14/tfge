import React from 'react'
import './Filter.css'
import Flag from './flag.svg'
import AutoInput from '../../containers/AutoInput/AutoInput';
import AutoInputAdd from '../../containers/AutoInputAdd/AutoInputAdd';


const locations = [];


const Filter = () => {

    //constants for label names/images
    const flagLabel = <img className="flag" alt="flag" src={Flag}></img>;
    const pickUpLabel = "Pick-Up";
    const dropOffLabel = "Drop-Off";

    return(
        <div className="filter">
            <AutoInput label={pickUpLabel}/>
            {locations.map(location => {
                <AutoInput label={flagLabel}/>
            })}
            <AutoInputAdd label={dropOffLabel}/>
        </div>
    );
}

export default Filter;