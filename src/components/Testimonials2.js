import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

// 

const Testimonials2 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid>
        <Row className="p-3 justify-content-center align-items-center">
            <Col md={8} className="text-center">
                <h1 className="text-black">Main Title</h1>
                <p className="text-black pt-3">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                    scelerisque purus semper eget duis
                </p>
            </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6}>
               <p className="p-2">
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                    scelerisque purus semper eget duis
               </p>
               </Col>
               <Col md={6}>
               <p className="p-2">
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                    scelerisque purus semper eget duis
               </p>
            </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-center">
            <Col md={12} className="text-center">
                <h1>Title</h1>
            </Col>
            <Col md={3}>
                <img 
                    src={image1}
                    width="500em"
                    height="400em"
                />
            </Col>
            <Col md={3}>
                <img 
                    src={image2}
                    width="500em"
                    height="400em"
                />
            </Col>
            <Col md={3}>
                <img 
                    src={image3}
                    width="500em"
                    height="400em"
                />
            </Col>
            <Col md={3}>
                <img 
                    src={image4}
                    width="500em"
                    height="400em"
                />
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Testimonials2;
