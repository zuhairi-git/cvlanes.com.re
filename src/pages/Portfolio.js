import React from 'react';
import TopNavGeneric from './TopNavGeneric';
import Footer from './Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
    return (

        <div className='portfolio-bg'>

            <TopNavGeneric />
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                    <h1 className='text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow primary-title'>Where Magic Happens</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center my-5 primary-title display-2">My Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                <Col md={4} className='mb-5'>
                        <Card className='border bordered-1'>
                            <Card.Img className='card-hero-top' variant="top" src={require("../img/jobseeking-cover.jpeg")} />
                           <Card.Body className='card-content'>
                                <Card.Title>Job Seeking</Card.Title>
                                <Card.Text>
                                    <p>Final Touches</p>
                                    <p>User journey and behavior analytics. User actions, awareness, consideration, loyalty, feelings, opportunities, and pain points. </p>
                                </Card.Text>
                                <Button href="/portfolio/jobseeking" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='mb-5'>
                        <Card className='border bordered-1'>
                            <Card.Img className='card-hero-top' variant="top" src={require("../img/collaboration/cwp.png")} />
                           <Card.Body className='card-content'>
                                <Card.Title>Collaboration Workflow Platform</Card.Title>
                                <Card.Text>
                                    <p>Inprogress</p>
                                    <p>Enabling a smooth and effective system for real-time collaboration on documents.</p>
                                </Card.Text>
                                <Button href="/portfolio/collaboration" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='mb-5'>
                        <Card className='border bordered-1'>
                            <Card.Img className='card-hero-top' variant="top" src={require("../img/smart-shopping/smart-shopping-cover.jpg")} />
                           <Card.Body className='card-content'>
                                <Card.Title>Smart Shopping</Card.Title>
                                <Card.Text>
                                    <p>Next</p>
                                    <p>Why not take pleasure when there is an opportunity?</p>
                                </Card.Text>
                                <Button href="#" variant="primary" disabled>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='mb-5'>
                        <Card className='border bordered-1'>
                            <Card.Img className='card-hero-top' variant="top" src={require("../img/smart-banking/hassle-free-banking.jpg")} />
                           <Card.Body className='card-content'>
                                <Card.Title>Smart Banking</Card.Title>
                                <Card.Text>
                                    <p>After Next</p>
                                    <p>Hassle free banking application. It's time to get productive.</p>
                                </Card.Text>
                                <Button href="#" variant="primary" disabled>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Footer />

        </div>
    );
};
export default Portfolio;
