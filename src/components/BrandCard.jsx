import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = (props) => {
    const {handle, name} = props;
    return (
        <Link to={`/brands/${handle}`} className="BrandCard">
            {name}
        </Link>
    )
}

export default BrandCard;