import { Col, Container, Row } from "react-bootstrap";
import FormData from "./FormData";
const Register = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <FormData />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
