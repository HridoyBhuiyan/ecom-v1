import React, {Fragment} from 'react';
import product1 from '../../assets/image/watch.jpg';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Favourite = () => {
    return (
        <Fragment>
            <Container>
                <div className="mt-5 pt-5">
                    <p className="text-center section-title"> All the product you all
                    ready liked</p><p className="text-center section-sub-title">All our exclusive collection</p>
                    <Row className="mb-5 d-flex flex-row ">




                        <Col xl={2} lg={2} md={2} sm={4}>
                            <Card className="image-box card shadow-lg card"><a href=""><img
                                src={product1} alt=""/>
                                <div className="text-center card-body"><p className="product-name-on-card">Asus TUF A15
                                    Carry bag</p><p className="product-price-on-card">Price: 2000BDT</p></div></a>
                                <Button className="btn-primary">Remove</Button>
                            </Card>
                        </Col>


                        <Col xl={2} lg={2} md={2} sm={4}>
                            <Card className="image-box card shadow-lg card"><a href=""><img
                                src={product1} alt=""/>
                                <div className="text-center card-body"><p className="product-name-on-card">Asus TUF A15
                                    Carry bag</p><p className="product-price-on-card">Price: 2000BDT</p></div></a>
                                <Button className="btn-primary">Remove</Button>
                            </Card>
                        </Col>


                        <Col xl={2} lg={2} md={2} sm={4}>
                            <Card className="image-box card shadow-lg card"><a href=""><img
                                src={product1} alt=""/>
                                <div className="text-center card-body"><p className="product-name-on-card">Asus TUF A15
                                    Carry bag</p><p className="product-price-on-card">Price: 2000BDT</p></div></a>
                                <Button className="btn-primary">Remove</Button>
                            </Card>
                        </Col>


                        <Col xl={2} lg={2} md={2} sm={4}>
                            <Card className="image-box card shadow-lg card"><a href=""><img
                                src={product1} alt=""/>
                                <div className="text-center card-body"><p className="product-name-on-card">Asus TUF A15
                                    Carry bag</p><p className="product-price-on-card">Price: 2000BDT</p></div></a>
                                <Button className="btn-primary">Remove</Button>
                            </Card>
                        </Col>


                        <Col xl={2} lg={2} md={2} sm={4}>
                            <Card className="image-box card shadow-lg card"><a href=""><img
                                src={product1} alt=""/>
                                <div className="text-center card-body"><p className="product-name-on-card">Asus TUF A15
                                    Carry bag</p><p className="product-price-on-card">Price: 2000BDT</p></div></a>
                                <Button className="btn-primary">Remove</Button>
                            </Card>
                        </Col>

                        <Col xl={2} lg={2} md={2} sm={4}>
                            <Card className="image-box card shadow-lg card"><a href=""><img
                                src={product1} alt=""/>
                                <div className="text-center card-body"><p className="product-name-on-card">Asus TUF A15
                                    Carry bag</p><p className="product-price-on-card">Price: 2000BDT</p></div></a>
                                <Button className="btn-primary">Remove</Button>
                            </Card>
                        </Col>



                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default Favourite;