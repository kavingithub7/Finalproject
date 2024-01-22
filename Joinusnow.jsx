import React from 'react'
import './Joinusnow.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Joinusnow() {
  return (
    <div>
      
      <section id="contact-us" className="bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            {/* Heading Text */}
            <div className="section-heading text-center">
              <h2>Join Us Now</h2>
              <div className="line-title-center"></div>
            </div>
          </Col>
        </Row>
        {/* Contact Tags */}
        <Card>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="contact-tags text-center">
                
                <p>
                  support@email.com<br />
                  example@email.com
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="contact-tags text-center">
                <i className="icon-screen-smartphone"></i>
                <p>
                  +11 012345 6789<br />
                  +22 012345 6789
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="contact-tags text-center">
                <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
                <p>
                  345, Mountain View,<br />
                  New York, USA
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="contact-tags text-center">
                <i className="icon-social-skype"></i>
                <p>
                  support.live<br />
                  livesupport24
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
      
    </div>
  )
}

export default Joinusnow
