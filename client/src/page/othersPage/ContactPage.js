import React, {Fragment} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import loginBanner from "../../assets/image/loginCover.png";

function ContactPage(props) {
    return (
        <Fragment>
            <NavMenu/>
            <Container className={'my-5 py-5'}>
                <Row className={'d-flex justify-content-center align-items-center'}>
                    <Col md={10} lg={10} sm={10} xs={10}>
                        <Row className={'d-flex align-items-center justify-content-center flex-row card'}>
                            <Col lg={6} xl={6} md={6} sm={12} xs={12}>
                                <h4 className={'text-center'}>Contact US</h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Email Address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your Text</Form.Label>
                                        <textarea className={'form-control'} placeholder="Drop Your text" />
                                    </Form.Group>
                                </Form>
                                <Button variant="primary" className={'w-100'}>Next</Button>
                            </Col>

                            <Col lg={6} xl={6} md={6} sm={0} xs={0} className={'p-0 Desktop'}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.604769279451!2d90.36629660107944!3d23.761469444193434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1669880070693!5m2!1sen!2sbd"
                                    width="600" height="450" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Col>


                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Fragment>

    );
}

export default ContactPage;