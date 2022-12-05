import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import facebookIcon from '../../assets/icons/facebook.svg'
import instragramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import {Link} from "react-router-dom";
function FooterDektop(props) {
    return (
        <Fragment>
           <div className={'card'}>

               <div className={'bg-danger py-4'}>
                   <h4 className={'footer-menu- text-center text-white'}>Subscribe us to get newsletter</h4>
                   <div className={'d-flex align-items-center justify-content-center'}>
                       <input type="email" placeholder={'Your Email here'} className={'border-0 rounded m-1'} style={{width:"400px", height:"35px"}}/>
                       <Button type="submit" className={'btn-light rounded border-0 m-1'}>Submit</Button>
                   </div>
               </div>


               <Container fluid={true}>
                   <Row className={'px-0 my-5'}>
                       <Col lg={3} md={3} sm={6} xs={12}>
                           <h5 className={'footer-menu-title'}>ABOUT COMPANY</h5>
                           <p>Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit </p>

                           <h5 className={'footer-menu-title pt-3'}>SOCIAL LINK</h5>
                           <a className={"footer-link"}><img src={facebookIcon} className={'iconGeneral'}/></a>
                           <a className={'footer-link'}><img src={instragramIcon} className={'iconGeneral'}/></a>
                           <a className={'footer-link'}><img src={twitterIcon} className={'iconGeneral'}/></a>
                       </Col>


                       <Col lg={3} md={3} sm={6} xs={12}>

                           <h5 className={'footer-menu-title'}>MORE INFO</h5>
                           <Link to={'/purchase'} className={"footer-link"}>How to purchase</Link> <br/>
                           <Link to={'/policy'} className={'footer-link'}>Privacy Policy</Link> <br/>
                           <Link to={'/refund'} className={'footer-link'}>Refund Policy</Link> <br/>
                       </Col>

                       <Col lg={3} md={3} sm={6} xs={12}>
                           <h5 className={'footer-menu-title'}>THE COMPANY</h5>
                           <a className={"footer-link"}>About Us</a> <br/>
                           <Link to={'/contact'} className={'footer-link'}>Contact Us</Link> <br/>
                           <a className={'footer-link'}>Our team</a> <br/>

                           <h5 className={'footer-menu-title pt-3'}>OFFICE ADDRESS</h5>
                           <p>41/1, Block# C, Chanmia Housing, Road#1, Mohammadpur, Dhaka - 1207</p>

                       </Col>

                       <Col lg={3} md={3} sm={6} xs={12}>
                           <h5 className={'footer-menu-title'}>DOWNLOAD APP</h5>
                           <a className={"footer-link"}><img src={'https://hatil.com/sites/default/files/Apple%20sign.png'} className={'iconGeneral'}/></a> <br/>
                           <a className={'footer-link'}><img src={'https://hatil.com/sites/default/files/Android%20sign.png'} className={'iconGeneral mt-2'}/></a>
                       </Col>
                   </Row>
               </Container>



               <Container fluid={true} className={'pt-3 pb-1 bg-dark text-center'}>
                   <h6 className={'text-white'}>WE DELIVERY IN</h6>
                   <p className={'text-white footer-text'}>Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit Lorem ipsum dollar sit </p>

               </Container>



           </div>
        </Fragment>
    );
}

export default FooterDektop;