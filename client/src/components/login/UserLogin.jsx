import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
const UserLogin = () => {
  return (
    <Card
      style={{
        display: "flex",
        width: "35%",
        margin: "100px auto",
        borderRadius: "5px",
        background: "rgba(255,255,255, 0.15)",
        padding: 30,
      }}
      className="mx-auto"
    >
      <Form style={{ borderColor: "red" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div class="d-flex justify-content-center">  
          <Button variant="dark" type="submit">
            Get me in
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default UserLogin;
