import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = (props) => {
    const {handle, name} = props;
    return (
        <Link to={`/coffees/${handle}`} className="CoffeeCard">
            {name}
        </Link>
    )
}

export default CoffeeCard;