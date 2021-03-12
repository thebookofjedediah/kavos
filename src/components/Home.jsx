import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';


const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/coffees">Coffees</Link>
                </li>
                <li>
                    <Link to="/Brands">Brands</Link>
                </li>
            </ul>
        </>
    )
}

export default Home;