import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import productImg from "../../assets/image/product.webp";
import watchImg from "../../assets/image/watch.jpg";

function Categories(props) {
    return (
        <Fragment>
            <Container className={'text-center BetweenTwoSection'}>
                <h4 className={'section-title'}>CATEGORIES</h4>
                <h6 className={'section-sub-title'}>Some of our exclusive Categories, you may like</h6>

                <Row>

                    <Col  xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Row>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>




                        </Row>
                    </Col>



                    <Col  xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Row>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col  xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className={' card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                            </Col>




                        </Row>
                    </Col>


                </Row>
            </Container>
        </Fragment>
    );
}

export default Categories;