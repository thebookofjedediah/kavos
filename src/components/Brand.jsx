import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KavosApi from '../KavosApi';
import Container from '@material-ui/core/Container';

const Brand = () => {

    const [brand, setBrand] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { handle } = useParams();

    useEffect(() => {
        async function getBrand() {
            let brand = await KavosApi.getBrand(handle);
            setBrand(brand);
            console.log(brand)
            setIsLoading(false);
        }
        getBrand();
    }, [handle]);

    if (isLoading) {
        return <h1>Loading</h1>
    }
    return (
        <Container>
            <h1>{brand.name}</h1>
        </Container>
    )
}

export default Brand;