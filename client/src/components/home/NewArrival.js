import React, {Fragment} from 'react';
import Slider from 'react-slick';
import {Card, Col, Container, Row} from "react-bootstrap";
import watchImg from "../../assets/image/watch.jpg";
function NewArrival(props) {
    
    const settings = {
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
    return (
        <Fragment>
            <Container className={'text-center'}>
                <h4 className={'section-title'}>FEATURED PRODUCT</h4>
                <h6 className={'section-sub-title'}>Some of our exclusive collection, you may like</h6>
                <Row>
                    <Slider {...settings}>
                        <div>
                                <Card className={'p-1 card'}>
                                    <img   src={watchImg}/>
                                    <Card.Body>
                                        <p className={'category-name'}>CATEGORY NAME</p>
                                    </Card.Body>
                                </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className={'p-1 card'}>
                                <img   src={watchImg}/>
                                <Card.Body>
                                    <p className={'category-name'}>CATEGORY NAME</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </Fragment>
    );
}

export default NewArrival;