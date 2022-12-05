import React, {Fragment} from 'react';
import product1 from '../../assets/image/watch.jpg';
import {Card, Col, Container, Row} from "react-bootstrap";

const SuggestedProducts = () => {
    return (
        <Fragment>
            <Container className="py-3 mt-5 p-3 mb-5">
                <h5 className="text-center section-title">Related Products</h5>
                <p className="text-center section-sub-title">All the related product for you</p>
                <Row>

                    <Col xl={2} lg={2} md={2} sm={4}>
                        <Card className="image-box"><img src={product1} alt=""/>
                            <div className="text-center card-body">
                                <p className="product-name-on-card">Asus TUF A15 Carry bag</p>
                                <p className="product-price-on-card">Price: 2000BDT</p>
                            </div>
                        </Card>
                    </Col>


                    <Col xl={2} lg={2} md={2} sm={4}>
                        <Card className="image-box"><img src={product1} alt=""/>
                            <div className="text-center card-body">
                                <p className="product-name-on-card">Asus TUF A15 Carry bag</p>
                                <p className="product-price-on-card">Price: 2000BDT</p>
                            </div>
                        </Card>
                    </Col>


                    <Col xl={2} lg={2} md={2} sm={4}>
                        <Card className="image-box"><img src={product1} alt=""/>
                            <div className="text-center card-body">
                                <p className="product-name-on-card">Asus TUF A15 Carry bag</p>
                                <p className="product-price-on-card">Price: 2000BDT</p>
                            </div>
                        </Card>
                    </Col>

                    <Col xl={2} lg={2} md={2} sm={4}>
                        <Card className="image-box"><img src={product1} alt=""/>
                            <div className="text-center card-body">
                                <p className="product-name-on-card">Asus TUF A15 Carry bag</p>
                                <p className="product-price-on-card">Price: 2000BDT</p>
                            </div>
                        </Card>
                    </Col>

                    <Col xl={2} lg={2} md={2} sm={4}>
                        <Card className="image-box"><img src={product1} alt=""/>
                            <div className="text-center card-body">
                                <p className="product-name-on-card">Asus TUF A15 Carry bag</p>
                                <p className="product-price-on-card">Price: 2000BDT</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={4}>
                        <Card className="image-box"><img src={product1} alt=""/>
                            <div className="text-center card-body">
                                <p className="product-name-on-card">Asus TUF A15 Carry bag</p>
                                <p className="product-price-on-card">Price: 2000BDT</p>
                            </div>
                        </Card>
                    </Col>



                </Row>
            </Container>
        </Fragment>
    );
};

export default SuggestedProducts;