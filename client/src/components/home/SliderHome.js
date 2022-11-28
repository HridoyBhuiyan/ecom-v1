import React, {Fragment} from 'react';
import Slider from "react-slick";
import productImg1 from '../../assets/image/productCover1.png'
import productImg2 from '../../assets/image/productCover2.jpg'
import productImg3 from '../../assets/image/productCover3.webp'
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
    };
    return (
        <Fragment>
            <Slider {...settings}>
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