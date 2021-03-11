import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard';
import KavosApi from "../KavosApi";
import Container from '@material-ui/core/Container';

const Brands = () => {

    const [brands, setBrands] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getBrands() {
            let brands = await KavosApi.getBrands();
            setBrands(brands);
            setIsLoading(false);
            
        }
        getBrands();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <Container>
        {brands.map(brand => (
            <BrandCard 
                key={brand.handle}
                name={brand.name} 
                handle={brand.handle}
            />
        ))}
        </Container>
    )
}

export default Brands;