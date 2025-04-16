import { useState, useRef } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: false, password: false });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!emailRef.current.value.length) {
            setErrors({ ...errors, email: true });
            alert('Email vacío.');
            return;
        } else if (!password.length || password.length < 7) {
            setErrors({ ...errors, password: true });
            alert('Password inválida.');
            return;
        }

        setErrors({ email: false, password: false });
        alert(`El email ingresado es: ${email} y el password es ${password}`)
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow container">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            required
                            className={errors.email && "border border-danger"}
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            ref={emailRef}
                            value={email} />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            required
                            className={errors.password && "border border-danger"}
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            ref={passwordRef}
                            value={password}
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;