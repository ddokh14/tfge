import React from 'react';
import './SideMenu.css';
import Filter from '../Filter/Filter'
import OptionsButton from '../OptionsButton/OptionsButton';

const SideMenu = () => {
    return(
        <div className='side-menu'>
            <div className='side-menu-header'>Trip Planner</div>
            <Filter/>
            <OptionsButton label={"Options"}/>
        </div>
    );
}

export default SideMenu;