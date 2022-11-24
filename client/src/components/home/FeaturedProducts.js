import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import productImg from '../../assets/image/product.webp'
import watchImg from '../../assets/image/watch.jpg'
function FeaturedProducts(props) {
    return (
        <Fragment>
            <Container className={'text-center BetweenTwoSection'}>
                <h4 className={'section-title'}>FEATURED PRODUCT</h4>
                <h6 className={'section-sub-title'}>Some of our exclusive collection, you may like</h6>
                <Row>
                    <Col  xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className={'image-box card'}>
                            <img  className={'w-100'} src={productImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>




                    <Col  xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className={'image-box card'}>
                            <img  className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col  xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className={'image-box card'}>
                            <img  className={'w-100'} src={productImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>




                    <Col  xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className={'image-box card'}>
                            <img  className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>



                    <Col  xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className={'image-box card'}>
                            <img  className={'w-100'} src={productImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>




                    <Col  xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className={'image-box card'}>
                            <img  className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>





                </Row>
            </Container>
        </Fragment>
    );
}

export default FeaturedProducts;