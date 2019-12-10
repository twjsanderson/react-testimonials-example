import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import video from '../assets/video.mp4';

// 

const Testimonials3 = () => {
  return (
    <Fragment>
    <Nav1 />
        <Container>
            <Row className="h-100 justify-content-center align-items-center">
                <Col md={4} className="text-center">
                    <h1>Main Title</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                </Col>
            </Row>
        </Container>
        <Container className="videoContainer" style={{ paddingRight: 0, paddingLeft: 0 }}>
            <video className="video" autoPlay loop muted>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <Container>
                <Row className="h-100 justify-content-center align-items-center">
                    <Col md={4} className="text-center">
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Fragment>
  );
}

export default Testimonials3;
