import React, { useState } from 'react';
import KavosApi from "../KavosApi";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: '10px'
    }
  }));

const Register = ({ setToken }) => {
    const classes = useStyles();

    let INITIAL_DATA = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
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
            newToken = await KavosApi.register(formData);
        } catch (e) {
            return setFormData(data => ({ ...data }));
        }
    
        setToken(newToken);
        history.push("/");
    }

    return (
        <Container>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
            <InputLabel htmlFor="username">Username</InputLabel>
                <Input 
                    onChange={changeHandler} 
                    value={formData.username} 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Username" 
                    aria-describedby="my-helper-text" 
                />

                <InputLabel htmlFor="password">Password</InputLabel>
                <Input onChange={changeHandler} 
                    value={formData.password} 
                    type="text" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                    aria-describedby="my-helper-text"
                />

                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input onChange={changeHandler} 
                    value={formData.firstName} 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="First Name" 
                    aria-describedby="my-helper-text"
                />

                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input onChange={changeHandler} 
                    value={formData.lastName} 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Last Name" 
                    aria-describedby="my-helper-text"
                />

                <InputLabel htmlFor="email">Email</InputLabel>
                <Input onChange={changeHandler} 
                    value={formData.email} 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    aria-describedby="my-helper-text"
                />

                <Button className={classes.button} type="submit" variant="contained">Submit</Button>
            </form>
                
        </Container>
    )
}

export default Register;