import React from 'react';
import { Container, Row, Col, Form, Button,InputGroup  } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-center-footer">
      <Container className="mb-5">
        <Row>
          <Col>
            {/* Section Heading Area */}
            <div className="subscribe-heading text-center">
              <h2>Subscribe Newsletter</h2>
              <div className="line-title-center-footer"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={8} className="newsletter">
          <Form>
              <InputGroup className="mb-3">
                <Form.Control className="footer-email" type="text" placeholder="Email..." />
                <div className='btn-subscribe'>
                <Button  variant="primary" type="button">
                </Button>
                </div>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <ul className="social-icons list-inline">
        <li className="list-inline-item">
          <a href="https://codeglamour.com/html/19/appize/index.html#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://codeglamour.com/html/19/appize/index.html#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://codeglamour.com/html/19/appize/index.html#">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://codeglamour.com/html/19/appize/index.html#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <p className="copy-right">
        All Rights Reserved © 2018 <a href="https://codeglamour.com/html/19/appize/index.html#">CodeGlamour</a>
      </p>
    </footer>
  );
}

export default Footer;
