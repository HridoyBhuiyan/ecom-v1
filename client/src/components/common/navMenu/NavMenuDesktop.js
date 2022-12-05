import React, {Fragment} from 'react';
import {Col, Form, Container, InputGroup, Navbar, Row} from "react-bootstrap";
import Logo from '../../../assets/image/logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faHeart, faMobile, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
function NavMenuDesktop(props) {
    return (
        <Fragment>
            <Navbar fixed={"top"} bg="light">
                <Container fluid={true}>
                    <Row className={'w-100'}>

                        <Col xl={4} lg={2} md={4} className={'d-flex align-items-center'}>
                            <Navbar.Brand className={'px-2'}>
                                <Link to={'/'}>
                                    <img src={Logo} height={45}/>
                                </Link>
                            </Navbar.Brand>
                            <Link to={'/cart'} className={'bg-danger text-white cart-btn d-flex align-items-center'} style={{height:"fit-content"}}>
                                <FontAwesomeIcon icon={faShoppingCart}/> 4 Items
                            </Link>
                        </Col>


                        <Col xl={4} lg={8} md={4} className={'d-flex justify-content-center align-items-center '}>
                            <InputGroup className={'w-75'}>
                                <Form.Control className={'searchBox'}/>
                                <InputGroup.Text className={"m-0 p-0"}>
                                    <button className={'w-100 rounded-2 border-0 bg-danger text-white px-3 h-100'}>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col xl={4} lg={2} md={4} className={'d-flex justify-content-end align-items-center'}>
                            <Link to={'/favourite'} className={'mx-3'}>
                                <FontAwesomeIcon icon={faHeart} className={'text-dark'} style={{fontSize:24}}/><sup className={'text-white p-1 px-2 bg-danger rounded'} >2</sup>
                            </Link>
                            <Link to={'/notification'} className={'mx-3'}>
                                <FontAwesomeIcon icon={faBell} className={'text-dark'} style={{fontSize:24}}/><sup className={'text-white p-1 px-2 bg-danger rounded'} >4</sup>
                            </Link>
                            <div className={'mx-3'}>
                                <FontAwesomeIcon icon={faMobile} className={'text-dark'} style={{fontSize:24}}/>
                            </div>
                            <div className={'mx-3'}>
                                <span><Link to={'/login'}>Login</Link></span>
                            </div>

                        </Col>

                    </Row>

                </Container>
            </Navbar>
        </Fragment>
    );
}

export default NavMenuDesktop;