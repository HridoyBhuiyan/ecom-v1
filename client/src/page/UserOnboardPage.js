import React, {Fragment} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import loginBanner from '../assets/image/loginCover.png';
function UserOnboardPage(props) {
    return (
        <Fragment>
            <NavMenu/>
            <Container className={'my-5 py-5'}>
                <Row className={'d-flex justify-content-center align-items-center'}>
                   <Col md={10} lg={10} sm={10} xs={10}>
                       <Row className={'d-flex align-items-center justify-content-center flex-row card'}>
                           <Col lg={6} xl={6} md={6} sm={12} xs={12}>
                               <div className={'py-3 text-center'}>
                                   <Card.Body>
                                       <Card.Title>Login here</Card.Title>
                                       <Form>
                                           <Form.Group className="mb-3" controlId="formBasicEmail">
                                               <Form.Label>Mobile Number</Form.Label>
                                               <Form.Control type="text" placeholder="Your Phone number" />

                                           </Form.Group>
                                       </Form>
                                       <Button variant="primary" className={'w-100'}>Next</Button>
                                   </Card.Body>
                               </div>
                           </Col>

                           <Col lg={6} xl={6} md={6} sm={0} xs={0} className={'p-0 Desktop'}>
                               <img src={loginBanner} className={'w-100'}/>
                           </Col>


                       </Row>
                   </Col>
                </Row>
            </Container>
            <Footer/>
        </Fragment>
    );
}

export default UserOnboardPage;