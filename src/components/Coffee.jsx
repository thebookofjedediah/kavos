import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KavosApi from '../KavosApi';
import Container from '@material-ui/core/Container';

const Coffee = () => {

    const [coffee, setCoffee] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { handle } = useParams();

    useEffect(() => {
        async function getCoffee() {
            let coffee = await KavosApi.getCoffee(handle);
            setCoffee(coffee);
            console.log(coffee)
            setIsLoading(false);
        }
        getCoffee();
    }, [handle]);

    if (isLoading) {
        return <h1>Loading</h1>
    }
    return (
        <Container>
            <h1>{coffee.name}</h1>
        </Container>
    )
}

export default Coffee;