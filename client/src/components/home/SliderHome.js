import React, {Fragment} from 'react';
import Slider from "react-slick";
import productImg1 from '../../assets/image/img.png'
import productImg2 from '../../assets/image/productCover2.jpg'
import productImg3 from '../../assets/image/productCover3.webp'
import {Button} from "react-bootstrap";
function SliderHome(props) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:false,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <Fragment>
            <Slider {...settings}>

                <div className={'container-fluid bg-secondary overflow-hidden w-100 shadow-sm'}>
                    <div className={'row card-body'}  style={{height:380}}>
                        <div className={'col-md-6 slider-title-div text-center'}>
                            <h1 className={'slider-title text-white'}>Microsoft Surface 3</h1>
                            <h1 className={'slider-sub-title text-white'}>
                            fule your orginally made good and have a good happy life with your skillset and many things
                            </h1>
                            <Button className={'btn site-btn px-5'}>More Info</Button>
                        </div>
                        <div className={'col-md-6 text-center'}>
                            <img src={productImg1} className={'slider-img m-0 px-5'} style={{height:"inherit"}}/>
                        </div>
                    </div>
                </div>

                <div>
                    <img className={'w-100  slider-img m-0 p-0'} src={productImg1} alt=""/>
                </div>



                <div>
                    <img className={'w-100  slider-img m-0 p-0'} src={productImg2} alt=""/>
                </div>
                <div>
                    <img className={'w-100  slider-img m-0 p-0'} src={productImg3} alt=""/>
                </div>
            </Slider>
        </Fragment>
    );
}

export default SliderHome;