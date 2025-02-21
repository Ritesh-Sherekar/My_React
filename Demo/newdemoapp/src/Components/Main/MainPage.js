import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const MainPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-white">
        <Button variant="warning" size="lg">Get Started</Button>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Features</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Fast & Secure</Card.Title>
                <Card.Text>Our services are optimized for speed and security.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Easy to Use</Card.Title>
                <Card.Text>We provide a simple and user-friendly interface.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>Our team is always available to assist you.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer text-center text-white">
        <p>© 2025 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
