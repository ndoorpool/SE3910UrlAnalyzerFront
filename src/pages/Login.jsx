import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {

    const[url, setCreds] = useState({
        username:'',
        password:'',
    });

    const changeValue=(e)=>{
        console.log(e);
        setCreds({
            ...url, [e.target.name]:e.target.value
        });
        console.log(e.target.name + " name ");
        console.log(e.target.value + " value ");
    }
    
    const navigate = useNavigate();

    const submitCreds = async (e) =>{
        e.preventDefault();
        
        navigate("/url");
        closeModal();
    }

    return (
        <div>
            <Form onSubmit = {submitCreds}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange = {changeValue} name = "username"/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" onChange = {changeValue} name = "password" />
            </Form.Group>  

            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
        </div>
      ); 
}

export default Login;