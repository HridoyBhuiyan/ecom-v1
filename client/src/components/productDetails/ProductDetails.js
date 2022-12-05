import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import product1 from '../../assets/image/watch.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart, faShuttleVan} from "@fortawesome/free-solid-svg-icons";
const ProductDetails = () => {
    return (
        <Fragment>
            <Container className={'BetweenTwoSection'}>
                <Row className={'p-2'}>
                    <Col className={'p-3 shadow-sm bg-white pb-3 mt-4'} md={12} lg={12} sm={12} xs={12}>

                        <Row>
                            <Col className={''} md={6} lg={6} sm={12} xs={12}>
                                <img className={'w-100'} src={product1} alt=""/>
                            <Container className={'p-0 my-3'}>

                                <Row className={'p-0 m-0'}>
                                    <Col className={'p-0 m-0'} md={3} lg={3} sm={3} xs={3}>
                                        <img className={'w-100'} src={product1}/>
                                    </Col>
                                    <Col className={'p-0 m-0'} md={3} lg={3} sm={3} xs={3}>
                                        <img className={'w-100'} src={product1}/>
                                    </Col>
                                    <Col className={'p-0 m-0'} md={3} lg={3} sm={3} xs={3}>
                                        <img className={'w-100'} src={product1}/>
                                    </Col>
                                    <Col className={'p-0 m-0'} md={3} lg={3} sm={3} xs={3}>
                                        <img className={'w-100'} src={product1}/>
                                    </Col>
                                </Row>

                            </Container>
                            </Col>


                            <Col className={'px-3'} md={6} lg={6} sm={12} xs={12}>
                                <h5 className={'Product-Name'}>Asus Tuf a15 FA50243 Laptop</h5>
                                <h6 className={'section-sub-title'}>Some of our exclusive collection you may like</h6>
                                <div className={'input-group'}>
                                    <div className={'product-price-on-card d-inline'}>Regular price : 200</div>
                                    <div className={'product-price-on-card d-inline'}>50% Discount</div>
                                    <div className={'product-price-on-card d-inline'}>New Price 100Tk</div>
                                </div>

                                <h6 className={'mt-2'}>Choose Color</h6>

                                <div className={'input-group'}>
                                    <div className={'form-check mx-1'}>
                                        <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                                        <label className={'form-check-label'} htmlFor="exampleRadios1">Black</label>
                                    </div>
                                    <div className={'form-check mx-1'}>
                                        <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                                        <label className={'form-check-label'} htmlFor="exampleRadios1">Green</label>
                                    </div>
                                    <div className={'form-check mx-1'}>
                                        <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                                        <label className={'form-check-label'} htmlFor="exampleRadios1">Red</label>
                                    </div>
                                </div>

                                <h6 className={'mt-2'}>Choose Size</h6>
                                <div className={'input-group'}>
                                    <div className={'form-check mx-1'}>
                                        <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                                        <label className={'form-check-label'} htmlFor="exampleRadios1">SM</label>
                                    </div>
                                    <div className={'form-check mx-1'}>
                                        <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                                        <label className={'form-check-label'} htmlFor="exampleRadios1">MD</label>
                                    </div>
                                    <div className={'form-check mx-1'}>
                                        <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                                        <label className={'form-check-label'} htmlFor="exampleRadios1">XL</label>
                                    </div>
                                </div>


                                <h6 className={'mt-2'}>Quantity</h6>

                                <div className={'input-group mt-3'}>
                                    <select className="form-control form-select">
                                        <option value="" className="regular-text">Choose Quantity</option>
                                        <option value="01" className="regular-text">01</option>
                                        <option value="02" className="regular-text">02</option>
                                        <option value="03" className="regular-text">03</option>
                                        <option value="04" className="regular-text">04</option>
                                        <option value="05" className="regular-text">05</option>
                                        <option value="06" className="regular-text">06</option>
                                        <option value="07" className="regular-text">07</option>
                                        <option value="08" className="regular-text">08</option>
                                        <option value="09" className="regular-text">09</option>
                                        <option value="10" className="regular-text">10</option>
                                    </select>
                                </div>


                                <div className="section-sub-title h6 pt-4">
                                    <button type="button"
                                            className="btn-danger p-2 Product-price-card w-25regular-text btn btn-primary">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                        Add To Cart
                                    </button>
                                    <button type="button" className="btn-primary p-2 Product-price-card w-25regular-text btn btn-primary">
                                        <FontAwesomeIcon icon={faShuttleVan}/>Order Now
                                    </button>
                                    <button type="button"className="btn-primary p-2 Product-price-card w-25regular-text btn btn-primary">
                                        <FontAwesomeIcon icon={faHeart}/>Favourit
                                    </button>
                                </div>


                            </Col>

                        </Row>



                        <Row className="row">
                            <Col lg={6} md={6} sm={12}>


                                <div className="Product-Name">Details</div>
                                <div className="regular-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rerum dolore cum, officiis repudiandae labore pariatur ut facere vel harum repellat vitae odio, magni hic? Error perferendis ea inventore laboriosam distinctio, atque, iste repudiandae incidunt amet reiciendis veniam ipsa voluptates commodi. Quos ex inventore, andae nam atque odio repellat quae deserunt distinctio beatae alias recusandae.
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rerum dolore cum, officiis repudiandae labore pariatur ut facere vel harum repellat vitae odio, magni hic? Error perferendis ea inventore laboriosam distinctio, atque, iste repudiandae incidunt amet reiciendis veniam ipsa voluptates commodi. Quos ex inventore, repudiandae nam atque odio repellat quae deserunt distinctio beatae alias recusandae.
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rerum dolore cum, officiis repudiandae labore pariatur ut facere vel harum repellat vitae odio, magni hic? Error perferendis ea inventore laboriosam distinctio, atque, iste repudiandae incidunt amet reiciendis veniam ipsa voluptates commodi
                                </div>



                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="Product-Name">Review</div>
                                <div>
                                    <div className="mt-4">
                                        <div className="d-flex Review-Title"><p className="m-1">Cara Dilon</p> <p
                                            className="m-1"> | </p> <p className="m-1 text-primary">★★★★</p></div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rerum dolore cum,
                                            officiis repudiandae labore pariatur ut facere vel harum repellat vitae odio.</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="d-flex Review-Title"><p className="m-1">Anna Doe</p> <p
                                            className="m-1"> | </p> <p className="m-1 text-primary">★★★★★</p></div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rerum dolore cum,
                                            officiis repudiandae labore pariatur ut facere vel harum repellat vitae odio.</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="d-flex Review-Title"><p className="m-1">William watson</p> <p
                                            className="m-1"> | </p> <p className="m-1 text-primary">★★★</p></div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rerum dolore cum,
                                            officiis repudiandae labore pariatur ut facere vel harum repellat vitae odio.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </Col>




                </Row>




            </Container>
        </Fragment>
    );
};

export default ProductDetails;