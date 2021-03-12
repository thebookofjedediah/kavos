import React, { useEffect, useState } from 'react';
import KavosApi from "../KavosApi";
import CoffeeCard from "./CoffeeCard";
import Container from '@material-ui/core/Container';

const Coffees = () => {

    const [coffees, setCoffees] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getCoffees() {
            let coffees = await KavosApi.getCoffees();
            setCoffees(coffees);
            setIsLoading(false);
            
        }
        getCoffees();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <Container>
        {coffees.map(coffee => (
            <li key={coffee.handle}>
                <CoffeeCard 
                    key={coffee.handle}
                    name={coffee.name} 
                    handle={coffee.handle}
                />
            </li>
        ))}
        </Container>
    )
}

export default Coffees;