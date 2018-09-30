import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return(
        <nav className="nav">
            <div className="nav-item">Home</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Trip Planner</div>
            <div className="nav-item">Tours</div>
            <div className="nav-item">Contact</div>
        </nav>
    );
}

export default Navigation;