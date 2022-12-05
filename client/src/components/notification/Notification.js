import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

const Notification = () => {
    return (
        <Fragment>
            <Container>
                <div className="mt-5 pt-5">
                    <h3 className="section-title h3 my-4">Check All notification for you</h3>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card"><p
                                className="notification-title">Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="text-info notification-date">
                                    <FontAwesomeIcon icon={faBell}/>
                                    Date : 20, March 2022 | Status : UNREAD
                                </p>
                            </div>
                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card"><p
                                className="notification-title">Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="text-info notification-date">
                                    <FontAwesomeIcon icon={faBell}/>
                                    Date : 20, March 2022 | Status : UNREAD
                                </p>
                            </div>
                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card"><p
                                className="notification-title">Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="text-info notification-date">
                                    <FontAwesomeIcon icon={faBell}/>
                                    Date : 20, March 2022 | Status : UNREAD
                                </p>
                            </div>
                        </Col>



                        <Col lg={6} md={6} sm={12}>
                            <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card"><p
                                className="notification-title">Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="text-success notification-date">
                                    <FontAwesomeIcon icon={faBell}/>
                                    Date : 20, March 2022 | Status : UNREAD
                                </p>
                            </div>
                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card"><p
                                className="notification-title">Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="text-success notification-date">
                                    <FontAwesomeIcon icon={faBell}/>
                                    Date : 20, March 2022 | Status : UNREAD
                                </p>
                            </div>
                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card"><p
                                className="notification-title">Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="text-success notification-date">
                                    <FontAwesomeIcon icon={faBell}/>
                                    Date : 20, March 2022 | Status : UNREAD
                                </p>
                            </div>
                        </Col>



                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default Notification;