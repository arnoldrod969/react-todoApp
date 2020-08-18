import React, {useState} from 'react';
import {Button, Container, Form, Alert} from "react-bootstrap";

function HooksForm(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError,setPasswordError ] = useState("")
    const [success, setSuccess] = useState("")

    const handlesubmit = e => {
        e.preventDefault();
        let emailValid = false
        if(email.length===0 || password.length===0){
            setEmailError("Email is required !!!")
            setPasswordError("Password is required !!!")
        }else if ( email.length < 6 && password.length < 6){
            setEmailError("Email should be minimum 6 characters")
            setPasswordError("Password should be minimum 6 characters !!!")
        }else if (email.indexOf(' ')>=0){
            setEmailError("Email cannot contain spaces")
        }else {
            setEmailError("")
            setPasswordError("")
            emailValid = true
        }
        if (emailValid){
            // alert(`Email : ${email} \n Password : ${password}`);
            setSuccess("Sign up successfully");
            setEmail("")
            setPassword("")
        }
    }

    return (
        <Container >
            {success? <Alert className="mt-2" variant="success">{success}</Alert> : ''}
            <Form onSubmit={handlesubmit} >
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="enter email"
                onChange={event => setEmail(event.target.value)} value={email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else
                </Form.Text>
                </Form.Group>
                {emailError? <Alert variant="danger">{emailError}</Alert> : '' }
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    onChange={e=>setPassword(e.target.value)} value={password} />
                </Form.Group>
                {passwordError? <Alert variant="danger">{passwordError}</Alert> : '' }
                <Button variant="primary" type="submit"> Submit</Button>
            </Form>
        </Container>
    );
}

export default HooksForm;