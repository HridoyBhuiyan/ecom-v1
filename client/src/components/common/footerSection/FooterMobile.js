import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import facebookIcon from "../../../assets/icons/facebook.svg";
import instragramIcon from "../../../assets/icons/instagram.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import appleStore from '../../../assets/image/Apple sign.png';
import androidStore from '../../../assets/image/Android sign.png';
import axios from "axios";
import APImanage from "../../../route/APImanage";
import FooterLoadingAnimation from "./FooterLoadingAnimation";

function FooterMobile(props) {

    const [loading, setLoading] = useState(true)

    const getData=async ()=>{
        await axios.get(APImanage.siteInfo)
            .then(response=>{
                if (response.status==200){
                    sessionStorage.setItem("f_about",response.data[0]['about_company'])
                    sessionStorage.setItem("f_fb",response.data[0]['facebook_link'])
                    sessionStorage.setItem("f_in",response.data[0]['instragram_link'])
                    sessionStorage.setItem("f_tw",response.data[0]['twitter_link'])
                    sessionStorage.setItem("f_address",response.data[0]['address'])
                    sessionStorage.setItem("f_delivery",response.data[0]['delivery_notice'])
                    sessionStorage.setItem("f_ios",response.data[0]['ios_app_link'])
                    sessionStorage.setItem("f_android",response.data[0]['android_app_link'])
                    sessionStorage.setItem("f_status",true)
                    setLoading(false)
                }
            })
            .catch(error=>{console.error()})
    }
    useEffect(()=>{
        if (!sessionStorage.getItem('f_status')==true){
            getData()
        }
        else {
            setLoading(false)
        }

    },[])


    if (loading){
        return (<FooterLoadingAnimation/>)
    }
    else {
        return (
            <Fragment>
                <div className={'card'}>

                    <div className={'bg-danger py-4'}>
                        <h4 className={'footer-menu- text-center text-white'}>Subscribe us to get newsletter</h4>
                        <div className={'d-flex align-items-center justify-content-center px-3'}>
                            <input type="email" placeholder={'Your Email here'} className={'border-0 rounded m-1'} style={{width:"400px", height:"35px"}}/>
                            <Button type="submit" className={'btn-light rounded border-0 m-1'}>Submit</Button>
                        </div>
                    </div>


                    <Container fluid={true}>
                        <Row className={'px-0 my-5 text-center'}>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h5 className={'footer-menu-title'}>ABOUT COMPANY</h5>
                                <p>{sessionStorage.getItem('f_about')}</p>

                                <h5 className={'footer-menu-title pt-3'}>SOCIAL LINK</h5>
                                <a href={sessionStorage.getItem('f_fb')} className={"footer-link"}><img src={facebookIcon} className={'iconGeneral'}/></a>
                                <a href={sessionStorage.getItem('f_in')} className={'footer-link'}><img src={instragramIcon} className={'iconGeneral'}/></a>
                                <a href={sessionStorage.getItem('f_twitter')} className={'footer-link'}><img src={twitterIcon} className={'iconGeneral'}/></a>
                            </Col>




                            <Col lg={3} md={3} sm={6} xs={12}>
                                <h5 className={'footer-menu-title'}>DOWNLOAD APP</h5>
                                <a href={sessionStorage.getItem('f_ios')} className={"footer-link"}><img src={appleStore} className={'iconGeneral'}/></a>
                                <a href={sessionStorage.getItem('f_android')} className={'footer-link'}><img src={androidStore} className={'iconGeneral mt-2'}/></a>
                            </Col>
                        </Row>
                    </Container>



                    <Container fluid={true} className={'pt-3 pb-1 bg-dark text-center'}>
                        <h6 className={'text-white'}>WE DELIVERY IN</h6>
                        <p className={'text-white footer-text'}>{sessionStorage.getItem('f_delivery')}</p>

                    </Container>



                </div>
            </Fragment>
        );
    }
}

export default FooterMobile;