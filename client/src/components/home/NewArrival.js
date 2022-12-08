import React, {Fragment, useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import {Card, Container, Row} from "react-bootstrap";
import watchImg from "../../assets/image/watch.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import APImanage from "../../route/APImanage";
import ProductLoadingAnimation from "../ProductLoadingAnimation";
function NewArrival(props) {

    const sliderRef = new useRef();

    const settings = {
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        arrows:false,
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

    const handleLeft = ()=>{
        sliderRef.current.slickPrev()
    }

    const handleRight=()=>{
        sliderRef.current.slickNext()
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData=async ()=>{
        await axios.get(APImanage.newproduct)
            .then(res=>{
                if (res.status==200){
                    setData(res.data)
                    setLoading(false)
                }
            })
            .catch(err=>console.log(err))
    }



    useEffect(()=>{
        getData().then(res=> {})
    },[])

    const productList = data.map((item, index)=>{
        return(
            <div key={index} >
                <Card className={'p-1 card'}>
                    <img   src={item.image} className={'newProductSlider'}/>
                    <Card.Body>
                        <p className={'category-name'}>{item.title}</p>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    

    const ShowProductList=()=>{
        if (loading){
            return (
                <Fragment>
                    <ProductLoadingAnimation colNum={3}/>
                </Fragment>)
        }
        else {
            return(
                <Slider {...settings} ref={sliderRef}>
                    {productList}
                </Slider>
            )
        }
    }


    return (
        <Fragment>
            <div  className={"bg-light py-5"}>
                <Container className={'text-center'}>
                    <h4 className={'section-title'}>NEW PRODUCT</h4>
                    <FontAwesomeIcon icon={faChevronLeft} className={'p-3 btn m-1 rounded text-white bg-danger'} onClick={handleLeft}/>
                    <FontAwesomeIcon icon={faChevronRight} className={'p-3 btn m-1 rounded text-white bg-danger'} onClick={handleRight}/>
                    <h6 className={'section-sub-title'}>Some of our exclusive collection, you may like.</h6>
                    <Row>
                        <ShowProductList/>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
}

export default NewArrival;