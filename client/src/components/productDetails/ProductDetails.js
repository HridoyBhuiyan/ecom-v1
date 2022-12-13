import React, {Fragment, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import product1 from '../../assets/image/watch.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart, faShuttleVan} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import APImanage from "../../route/APImanage";
import {useParams} from "react-router-dom";
import ProductDetailsAnimation from "../placeholer/ProductDetailsAnimation";
const ProductDetails = () => {
    const params = useParams();
    const [detailedData, setDetailedData] = useState()
    const [listedData, setListedData]= useState();
    const [loading, setLoading]= useState(true)
    const [largeImage, setLargeImage]= useState("");

    const getData=async ()=>{
        await axios.get(APImanage.productDetails(params.productCode))
            .then(response=>{
                if (response.status==200){
                    setDetailedData(response.data.detailsData)
                    setListedData(response.data.listedData)
                    setLoading(false)
                    setLargeImage(response.data.listedData.image)
                }
            })
            .catch(error=>console.log(error))
    }
    useEffect(()=>{
        window.scroll(0, 0)
        getData()
    },[])




    const productColor = detailedData && detailedData.color.split(",").map((item, index)=>{
        return(
                <div className={'form-check mx-1'} key={index}>
                    <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                    <label className={'form-check-label'} htmlFor="exampleRadios1">{item}</label>
                </div>
            )
        })

    const productSize = detailedData && detailedData.size.split(",").map((item, index)=>{
        return(
            <div className={'form-check mx-1'} key={index}>
                <input className={'form-check-input'} type="radio" name={'exampleRadios1'}/>
                <label className={'form-check-label'} htmlFor="exampleRadios1">{item}</label>
            </div>
        )
    })

    const handleLargeImage=(e)=>{setLargeImage(e.target.src)}

    const ProductSection=()=>{
        return(<Fragment>
            <Row>
                <Col className={''} md={6} lg={6} sm={12} xs={12}>
                    <img className={'w-100'} src={largeImage} alt=""/>
                    <Container className={'p-0 my-3'}>

                        <Row className={'p-0 m-0'}>
                            <Col className={'p-0 btn m-0'} md={3} lg={3} sm={3} xs={3}>
                                <div className={'image-box'}>
                                <img onClick={handleLargeImage} className={'w-100'} src={detailedData && detailedData.img1}/>
                                    </div>
                            </Col>
                            <Col className={'p-0 btn m-0'} md={3} lg={3} sm={3} xs={3}>
                                <div className={'image-box'}>
                                <img onClick={handleLargeImage} className={'w-100'} src={detailedData && detailedData.img2}/>
                                    </div>
                            </Col>
                            <Col className={'p-0 btn m-0'} md={3} lg={3} sm={3} xs={3}>
                                <div className={'image-box'}>
                                <img onClick={handleLargeImage} className={'w-100'} src={detailedData && detailedData.img3}/>
                                    </div>
                            </Col>
                            <Col className={'p-0 btn m-0'} md={3} lg={3} sm={3} xs={3}>
                                <div className={'image-box'}>
                                <img onClick={handleLargeImage} className={'w-100'} src={detailedData && detailedData.img4}/>
                                    </div>
                            </Col>
                        </Row>

                    </Container>
                </Col>


                <Col className={'px-3'} md={6} lg={6} sm={12} xs={12}>
                    <h5 className={'Product-Name'}>{listedData && listedData.title}</h5>
                    <h6 className={'section-sub-title'}>{detailedData && detailedData.short_details}</h6>


                    {!listedData.special_price=="Null" ?
                        <div className={'input-group'}>
                            <div className={'product-price-on-card d-inline productPrice mx-1'}>Regular price : {listedData && listedData.price}TK</div>
                            <div className={'product-price-on-card d-inline productPrice mx-1'}>50% Discount</div>
                            <div className={'product-price-on-card d-inline productPrice mx-1'}>New Price {listedData && listedData.special_price}Tk</div>
                        </div> :

                            <div className={'input-group'}>
                                <div className={'product-price-on-card d-inline productPrice mx-1'}>Regular price : {listedData && listedData.price}TK</div>
                            </div>
                    }



                    {detailedData.color=="Null"?<div></div>
                            :<div>
                                <h6 className={'mt-2'}>Choose Color</h6>
                                <form className={'input-group'}>{productColor}</form>
                            </div>}

                    {detailedData.size=="Null"?<div></div>
                            :<div>
                                <h6 className={'mt-2'}>Choose Color</h6>
                                <form className={'input-group'}>{productSize}</form>
                            </div>}


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
                <Row>
                    <Col lg={6} md={6} sm={12}>


                        <div className="Product-Name">Details</div>
                        <div className="regular-text" dangerouslySetInnerHTML={{__html:detailedData && detailedData.details}}/>



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
            </Fragment>
        )
    }


    return (
        <Fragment>
            <Container className={'BetweenTwoSection'}>
                <Row className={'p-2'}>
                    <Col className={'p-3 shadow-sm bg-white pb-3 mt-4'} md={12} lg={12} sm={12} xs={12}>

                        {loading? <ProductDetailsAnimation/> : <ProductSection/> }

                    </Col>
                </Row>

            </Container>
        </Fragment>
    );
};

export default ProductDetails;