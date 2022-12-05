import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForwardFast} from "@fortawesome/free-solid-svg-icons";

const Specility = () => {
    return (
        <Fragment>
            <Container className="mb-3">
                <Row>


                    <Col lg={4} md={12} sm={12}>
                        <Card className="p-2 my-2" style={{background: "rgba(244, 224, 227, 0.68)", borderRadius:"50px"}}>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col lg={3} md={3} sm={3} className="d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faForwardFast} className={'text-danger h1'}/>
                                </Col>
                                <div className="py-3 col-lg-9 col-md-3 col-sm-9 col-9"><h3
                                    className="section-title">Fast Delivery</h3><p className="section-sub-title">We are
                                    ready to do fast delivery</p></div>
                            </Row>
                        </Card>
                    </Col>

                    <Col lg={4} md={12} sm={12}>
                        <Card className="p-2 my-2" style={{background: "rgba(244, 224, 227, 0.68)", borderRadius:"50px"}}>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col lg={3} md={3} sm={3} className="d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faForwardFast} className={'text-danger h1'}/>
                                </Col>
                                <div className="py-3 col-lg-9 col-md-3 col-sm-9 col-9"><h3
                                    className="section-title">Fast Delivery</h3><p className="section-sub-title">We are
                                    ready to do fast delivery</p></div>
                            </Row>
                        </Card>
                    </Col>

                    <Col lg={4} md={12} sm={12}>
                        <Card className="p-2 my-2" style={{background: "rgba(244, 224, 227, 0.68)", borderRadius:"50px"}}>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col lg={3} md={3} sm={3} className="d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faForwardFast} className={'text-danger h1'}/>
                                </Col>
                                <div className="py-3 col-lg-9 col-md-3 col-sm-9 col-9"><h3
                                    className="section-title">Fast Delivery</h3><p className="section-sub-title">We are
                                    ready to do fast delivery</p></div>
                            </Row>
                        </Card>
                    </Col>





                </Row>
            </Container>
        </Fragment>
    );
};

export default Specility;