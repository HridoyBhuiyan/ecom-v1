import React, {Fragment, useEffect, useState} from 'react';
import Slider from "react-slick";
import productImg1 from '../../assets/image/img.png'
import {Button} from "react-bootstrap";
import axios from "axios";
import APImanage from "../../route/APImanage";
import ProductLoadingAnimation from "../placeholer/ProductLoadingAnimation";
import {Link} from "react-router-dom";
function SliderHome(props) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    }
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData=async ()=>{
        await axios.get(APImanage.sliderInfo)
            .then(res=>{
                if (res.status==200){
                    setData(res.data)
                    setLoading(false)
                }
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getData()
    },[]);


    const sliderData = data.map((item, index)=>{
        return (
            <Fragment  key={index}>
                <div className={'container-fluid overflow-hidden w-100 shadow-sm'} style={{background:item.bg_color}}>
                    <div className={'row card-body'}  style={{height:380}}>
                        <div className={'col-md-6 slider-title-div text-center'}>
                            <h1 className={'slider-title'} style={{color:item.text_color}}>{item.title}</h1>
                            <h1 className={'slider-sub-title'} style={{color:item.text_color}}>
                                {item.subtitle}
                            </h1>
                            <Link to={'productdetails/'+item.product_code}>
                                <Button className={'btn site-btn px-5'}>More Info</Button>
                            </Link>
                        </div>
                        <div className={'col-md-6 text-center'}>
                            <img src={productImg1} className={'slider-img m-0 px-5'} style={{height:"inherit"}}/>
                        </div>
                    </div>
                </div>
            </Fragment>
            );
    })

    const ShowSliderData =()=>{
        if (loading){
            return <ProductLoadingAnimation/>
        }
        else {
            return (
                <Slider {...settings}>
                    {sliderData}
                </Slider>
            )
        }
    }

    return (
        <Fragment>
                <ShowSliderData/>
        </Fragment>
    );
}

export default SliderHome;