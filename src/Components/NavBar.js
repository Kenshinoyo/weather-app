import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    console.log(props)
    return (
        // <div>
            <nav id="nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/daily">Daily Forecast</Link>
                    </li>
                    <li>
                        <Link to="/weekly">Weekly Forecast</Link>
                    </li>
                </ul>             
            </nav>
        // </div>
    )
}

export default NavBar;