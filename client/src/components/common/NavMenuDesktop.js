import React, {Fragment} from 'react';
import {Col, Form, Container, InputGroup, Navbar, Row} from "react-bootstrap";
import Logo from '../../assets/image/logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faHeart, faMobile, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
function NavMenuDesktop(props) {
    return (
        <Fragment>
            <Navbar fixed={"top"} bg="light">
                <Container fluid={true}>
                    <Row className={'w-100'}>

                        <Col xl={2} lg={2} md={3} className={'d-flex align-items-center'}>
                            <Navbar.Brand href="#home" className={'px-2'}>
                                <img src={Logo} height={45}/>
                            </Navbar.Brand>
                            <div className={'bg-danger text-white cart-btn d-flex align-items-center'} style={{height:"fit-content"}}>
                                <FontAwesomeIcon icon={faShoppingCart}/> 4 Items
                            </div>
                        </Col>



                        <Col xl={8} lg={8} md={6} className={'d-flex justify-content-center align-items-center '}>
                            <InputGroup className={'w-75'}>
                                <Form.Control className={'searchBox'}/>
                                <InputGroup.Text className={"m-0 p-0"}>
                                    <button className={'w-100 rounded-2 border-0 bg-danger text-white px-3 h-100'}>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col xl={2} lg={2} md={3} className={'d-flex justify-content-end align-items-center'}>
                            <div className={'mx-3'}>
                                <FontAwesomeIcon icon={faHeart} className={'text-dark'} style={{fontSize:24}}/><sup className={'text-white p-1 px-2 bg-danger rounded'} >2</sup>
                            </div>
                            <div className={'mx-3'}>
                                <FontAwesomeIcon icon={faBell} className={'text-dark'} style={{fontSize:24}}/><sup className={'text-white p-1 px-2 bg-danger rounded'} >4</sup>
                            </div>
                            <div className={'mx-3'}>
                                <FontAwesomeIcon icon={faMobile} className={'text-dark'} style={{fontSize:24}}/>
                            </div>
                            <div className={'mx-3'}>
                                <span>Login</span>
                            </div>

                        </Col>

                    </Row>

                </Container>
            </Navbar>
        </Fragment>
    );
}

export default NavMenuDesktop;