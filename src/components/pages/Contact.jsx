import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Contact.css";

function Contact() {
  // Define state variables to manage form data, errors, and message status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the form data and reset errors for the specific field
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  // Validate the form inputs and return true if all are valid
  const validateForm = () => {
    const newErrors = {};

    // Check the name length
    if (formData.name.length <= 5) {
      newErrors.name = true;
    }
    // Check the email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }
    // Check the message length
    if (formData.message.length < 150) {
      newErrors.message = true;
    }

    // Update errors state with new errors
    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If the form is valid, log the data, reset the form, and set messageSent to true
      console.log(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setMessageSent(true);
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="contact-header">Contact me</h2>
            {messageSent && (
              <div className="alert alert-success" role="alert">
                Message sent!
              </div>
            )}
            {/* Form component for capturing user input */}
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                {/* Input for name */}
                <Form.Control
                  type="text"
                  className={errors.name ? "is-invalid" : ""}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-input">
                    Name must be at least five characters long
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                {/* Input for email */}
                <Form.Control
                  type="email"
                  className={errors.email ? "is-invalid" : ""}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-input">
                    Please enter a valid email address
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                {/* Textarea for message */}
                <Form.Control
                  as="textarea"
                  className={errors.message ? "is-invalid" : ""}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && (
                  <div className="invalid-input">
                    Message must be at least 150 characters long
                  </div>
                )}
              </Form.Group>
              {/* Submit button */}
              <Button type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
