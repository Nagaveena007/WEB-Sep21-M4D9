import { Form, Button, Row, Col } from "react-bootstrap";
const FormData = () => {
  return (
    <Form className="mt-4 mb-4">
      <h1 className="mt-4 mb-4"> Registration Page</h1>
      <Form.Group as={Row}>
        <Form.Label column sm="4" className="d-flex justify-content-end">
          Name
        </Form.Label>
        <Col sm="8" className="d-flex justify-content-start">
          <Form.Control type="text" placeholder="User name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="4" className="d-flex justify-content-end">
          Surname
        </Form.Label>
        <Col sm="8" className="d-flex justify-content-start">
          <Form.Control type="text" placeholder="Surname" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="4" className="d-flex justify-content-end">
          Email-Id
        </Form.Label>
        <Col sm="8" className="d-flex justify-content-start">
          <Form.Control type="email" placeholder="email-id" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4" className="d-flex justify-content-end">
          Password
        </Form.Label>
        <Col sm="8" className="d-flex justify-content-start">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="4" className="d-flex justify-content-end">
          Confirm Password
        </Form.Label>
        <Col sm="8" className="d-flex justify-content-start">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default FormData;
