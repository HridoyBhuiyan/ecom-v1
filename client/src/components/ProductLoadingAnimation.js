import React, {Fragment} from 'react';
import {ShimmerPostItem} from "react-shimmer-effects";
import {Col} from "react-bootstrap";

const ProductLoadingAnimation = (props) => {
    if (props.colNum==6){
        return (
            <Fragment>
                <Col  xl={2} lg={2} md={2} sm={4} xs={6}><ShimmerPostItem card title/></Col>
                <Col  xl={2} lg={2} md={2} sm={4} xs={6}><ShimmerPostItem card title/></Col>
                <Col  xl={2} lg={2} md={2} sm={4} xs={6}><ShimmerPostItem card title/></Col>
                <Col  xl={2} lg={2} md={2} sm={4} xs={6}><ShimmerPostItem card title/></Col>
                <Col  xl={2} lg={2} md={2} sm={4} xs={6}><ShimmerPostItem card title/></Col>
                <Col  xl={2} lg={2} md={2} sm={4} xs={6}><ShimmerPostItem card title/></Col>
            </Fragment>
        );
    }

    else if (props.colNum==4){
        return (
            <Fragment>
                <Col xl={3} lg={3}  md={3} sm={6} xs={6} ><ShimmerPostItem card title/></Col>
                <Col xl={3} lg={3}  md={3} sm={6} xs={6} ><ShimmerPostItem card title/></Col>
                <Col xl={3} lg={3}  md={3} sm={6} xs={6} ><ShimmerPostItem card title/></Col>
                <Col xl={3} lg={3}  md={3} sm={6} xs={6} ><ShimmerPostItem card title/></Col>
            </Fragment>
        );
    }


    else {
        return (<Fragment><ShimmerPostItem card title/></Fragment>)
    }



};

export default ProductLoadingAnimation;