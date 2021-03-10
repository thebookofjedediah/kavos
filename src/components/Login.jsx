
import React, { useState } from 'react';
import KavosApi from "../KavosApi";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';

const Login = ({ setToken }) => {

    let INITIAL_DATA = {
        username: '',
        password: ''
    }

    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_DATA);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        let newToken;
        console.log(formData)
        try {
            newToken = await KavosApi.login(formData);
        } catch (e) {
            return setFormData(data => ({ ...data }));
        }
    
        setToken(newToken);
        history.push("/");
    }

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input onChange={changeHandler} value={formData.username} type="text" id="username" name="username" placeholder="username" aria-describedby="my-helper-text" />

                <InputLabel htmlFor="password">Password</InputLabel>
                <Input onChange={changeHandler} value={formData.password} type="text" id="password" name="password" placeholder="password" aria-describedby="my-helper-text" />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
                
        </Container>
    )
}

export default Login;