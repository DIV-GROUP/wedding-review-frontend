import React from 'react'
import './photo.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image1 from '../images/pics1.jpg';
import Image2 from '../images/pics2.jpg';
import Image3 from '../images/pics3.jpg';
import Image4 from '../images/pics4.jpg';
import Image5 from '../images/pics5.jpg';
import Image6 from '../images/pics6.jpg';







export default function Bar() {
    return (
        <div>

            <Container fluid >
                <Row>
                    <Col className="dark-background">
                        <div>
                            <h6><hr />TASTY FRESH LOCAL DRINKS<hr /></h6>
                            <h2>LOCAL BARS</h2>

                        </div>

                    </Col>
                </Row>
            </Container>
            <div className='photo-head'><h2>LOCAL BAR VENDORS</h2></div>

            <div className='card-top1'>
                <Container >
                    <Row>

                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Image1} style={{ height: "400px", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>FLICK PHOTO STUDIOS</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Image2} style={{ height: "400px", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>ANGELS PHOTOGRAPHY</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Image3} style={{ height: "400px", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>BEAUTY AND CLASS VIDEOGRAPHY</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='card-top'>
                <Container >
                    <Row>

                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Image4} style={{ height: "400px", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>FOREVER PHOTOGRAPHY</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Image5} style={{ height: "400px", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>PERFECT STUDIOS</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Image6} style={{ height: "400px", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>WIDE AWAKE PICTURES</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col> <div className='side-button'>
                        <Button variant="outline-danger" style={{ paddingTop: "1rem", paddingLeft: "3rem", paddingRight: "3rem", paddingBottom: "1rem" }}>VIEW ALL</Button>
                    </div></Col>

                </Row>

            </Container>













        </div>
    )
}
