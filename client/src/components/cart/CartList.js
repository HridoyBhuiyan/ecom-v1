import React, {Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faTrash} from "@fortawesome/free-solid-svg-icons";
import product1 from '../../assets/image/watch.jpg';
import {Link} from "react-router-dom";

const CartList = () => {
    return (
        <Fragment>
            <Container className={'TopSection'}>
                <Row>



                    <Col className={'p-1'} md={12} lg={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col className={'d-flex align-items-center justify-content-center'}>
                                        <div>
                                            <h3 className={'section-title text-center'}>Cart list : All from your selection</h3>
                                            <hr/>

                                            <div className={'text-center'}>
                                                <h6>Total Product = 5</h6>
                                                <h6>Total Payment = 1500 TK</h6>

                                                <Link to={'/order'} className={'btn btn-block mt-3 site-btn'}>
                                                    <FontAwesomeIcon icon={faCartShopping}/> Check out
                                                </Link>
                                            </div>


                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>



                    <Col className={'p-1'} md={12} lg={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img src={product1} className={"w-100"}/>
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6} >
                                        <h5 className={"Product-Name"}>Asus TUF a15 Gaming laptop</h5>
                                        <div className={'pt-3'}>
                                            <h6>Quantity = 05</h6>
                                            <h6>Price = 05 x 100 = 500 TK</h6>
                                        </div>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <input type="number" value={'4'} className={'form-control text-center'}/>
                                        <Button className={'btn btn-block w-100 mt-3 site-btn'}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>





                    <Col className={'p-1'} md={12} lg={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img src={product1} className={"w-100"}/>
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6} >
                                        <h5 className={"Product-Name"}>Asus TUF a15 Gaming laptop</h5>
                                        <div className={'pt-3'}>
                                            <h6>Quantity = 05</h6>
                                            <h6>Price = 05 x 100 = 500 TK</h6>
                                        </div>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <input type="number" value={'4'} className={'form-control text-center'}/>
                                        <Button className={'btn btn-block w-100 mt-3 site-btn'}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>










                </Row>

            </Container>
        </Fragment>
    );
};

export default CartList;