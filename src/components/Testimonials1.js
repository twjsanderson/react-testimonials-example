import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// 

const Testimonials1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container>
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
                <img 
                    src={animal1}
                    width="100%"
                    
                />
            </Col>
            <Col md={6} className="text-center">
                <h3 className="p-1">Subtitle</h3>
                <p className="p-1">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin.
                </p>
            </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6}>
                <img 
                    src={animal2}
                    width="100%"
                    
                />
            </Col>
            <Col md={6} className="text-center">
                <h3 className="p-1">Subtitle</h3>
                <p className="p-1">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin.
                </p>
            </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6}>
                <img 
                    src={animal3}
                    width="100%"
                    
                />
            </Col>
            <Col md={6} className="text-center">
                <h3 className="p-1">Subtitle</h3>
                <p className="p-1">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin.
                </p>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Testimonials1;
