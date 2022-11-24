import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import watchImg from "../../assets/image/watch.jpg";

function Collection(props) {
    return (
        <Fragment>
            <Container className={'text-center'}>
                <h4 className={'section-title'}>CATEGORIES</h4>
                <h6 className={'section-sub-title'}>Some of our exclusive Categories, you may like</h6>
                <Row>




                   <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                       <Card className={'card'}>
                           <img className={'w-100'} src={watchImg}/>
                           <Card.Body>
                               <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                               <p className={'product-price-on-card'}>Price: 3000TK</p>
                           </Card.Body>
                       </Card>
                   </Col>


                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
                            <Card.Body>
                                <p className={'product-name-on-card'}>Rayban - good sunglasses for men</p>
                                <p className={'product-price-on-card'}>Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={3} lg={3}  md={3} sm={6} xs={6}>
                        <Card className={'card'}>
                            <img className={'w-100'} src={watchImg}/>
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

export default Collection;