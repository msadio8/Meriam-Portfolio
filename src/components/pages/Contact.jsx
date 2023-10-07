import React from "react";
import { Container, Row, Col, Form, Button } from "react-materialize";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    };
    
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError(false);
    };
    
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (name.length <= 5) {
            setNameError(true);
            valid = false;
        }
        if (!validateEmail(email)) {
            setEmailError(true);
            valid = false;
        }
        if (message.length <150) {
            setMessageError(true);
            valid = false;
        }

        if (valid) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            setName("");
            setEmail("");
            setMessage("");
            setMessageSent(true);
        }
    };

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <h2 className="contact-header"> Contact me</h2>
                        {messageSent && (
                            <div className="alert alert-success" role="alert">
                                message sent!
                            </div>
                        )}
                        <Form onSubmit={handleSubmit} noValidate>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name:</Form.Label>
                                <Form.Control
                                  type="text"
                                  className={nameError ? "is-invalid" : ""}
                                  id="name"
                                  name="name"
                                  value={name}
                                  onChange={handleNameChange}
                                  required
                                 />
                                {nameError && (
                                    <div className="invalid-input">
                                        Name must be at least five characters long
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control
                                  type="email"
                                  className={emailError ? "is-invalid" : ""}
                                  id="email"
                                  name="email"
                                  value={email}
                                  onChange={handleEmailChange}
                                  required
                                />
                                {emailError && (
                                    <div className="invalid-input">
                                        Please enter a valid email address
                                    </div>
                                )}    
                             
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  className={messageError ? "is-invalid": ""}
                                  id="message"
                                  rows="5"
                                  name="user_message"
                                  value={message}
                                  onChange={handleMessageChange}
                                />
                                {messageError &&(
                                    <div className="invalid-input">
                                        Please provide your message must be atleast 150 character!
                                    </div>
                                )}
                            </Form.Group>
                            <Button type="submit" className="custom-send-message-button">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </section>
    );
    
    
}
export default Contact;