import React, {Fragment, useEffect, useState} from 'react';
import {Col, Container, Navbar, Row, Offcanvas, Nav, NavDropdown, Form, Button, Accordion} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faHeart, faMobile, faSearch, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/image/logo.png";
import {Link} from "react-router-dom";
import axios from "axios";
import ApImanage from "../../../route/APImanage";

function NavMenuMobile(props) {
    const [sidenav, setSidenav]= useState('sideNavClose');
    const [navOverlay, setNavOverlay]= useState("ContentOverlayClose");
    const [data, setData] = useState([]);
    const getData = async ()=>{
        await axios.get(ApImanage.categorydetails)
            .then(response=>{
                setData(response.data)
            })
    }

    useEffect(()=>{
        getData();
    },[])




    const sideNavOpenClose=()=>{
        if (sidenav==='sideNavClose'){
            setSidenav('sideNavOpen')
            setNavOverlay('ContentOverlayOpen')
        }
        else{
            setSidenav('sideNavClose')
            setNavOverlay('ContentOverlayClose')
        }

    }


    const CategoryItem = data.map((item, index)=>{
        return (
            <Accordion.Item className={'accordionMenuDivInside'} eventKey={index} key={index}>
                <Accordion.Header className={'accordion p-0'}>
                    <img src={item['parent_icon']} className={'accordionMenuIcon'}/>{item['parent_category']}
                </Accordion.Header>
                <Accordion.Body>
                    <ul>
                        {item['child_category'].map((item, index)=>{
                            return (<li key={item.id}>
                                <a href="" className={'accordionItem'}>{item.cat2_name}</a>
                            </li>)
                        })}

                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        );
    })


    const NavElement = ()=>{
        return(<Accordion className={' p-0'}>{CategoryItem}</Accordion>)
    }


    return (
        <Fragment>

            <Container fluid={true} className={'fixed-top shadow-sm p-2 m-0 bg-white'}>
            <Row className={'d-flex align-items-center'}>
                <Col lg={4} md={4} sm={4} xs={4} className={'d-flex align-items-center'}>
                    <Link to={'/cart'}>
                        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:25}} className={'text-danger p-2 px-3 bg-light rounded'}/>
                    </Link>

                </Col>


                <Col lg={4} md={4} sm={4} xs={4} className={'d-flex align-items-center justify-content-center'}>
                    <Navbar.Brand href="" >
                        <Link to={'/'}><img src={Logo} height={45}/></Link>
                    </Navbar.Brand>
                </Col>


                <Col lg={4} md={4} sm={4} xs={4} className={'d-flex align-items-center justify-content-end'}>
                        <FontAwesomeIcon icon={faBars}  style={{fontSize:25}} className={'text-danger p-2 px-3 bg-light rounded'} onClick={sideNavOpenClose}/>
                </Col>
            </Row>

            </Container>



            <div id={'SideNavID'} className={sidenav}>


                {/*Start: Nav Page*/}
                <div className={'d-flex align-items-center justify-content-center'}>
                    <Link to={'/favourite'} className={'mx-2 pb-2'}>
                        <FontAwesomeIcon icon={faHeart} className={'text-dark'} style={{fontSize:18}}/><sup className={'badge text-white p-1 bg-danger rounded'} >2</sup>
                    </Link>
                    <Link to={'/notification'} className={'mx-2 pb-2'}>
                        <FontAwesomeIcon icon={faBell} className={'text-dark'} style={{fontSize:18}}/><sup className={'badge text-white p-1 bg-danger rounded'} >4</sup>
                    </Link>
                    <div className={'mx-2 pb-2'}>
                        <FontAwesomeIcon icon={faSearch} className={'text-dark'} style={{fontSize:18}}/>
                    </div>
                    <div className={'mx-2 pb-2'}>
                        <span><Link to={'/login'}>Login</Link></span>
                    </div>
                </div>
                {/*End: Nav Page*/}




                <div className={'list-group'}>
                    <NavElement/>
                </div>


            </div>

            <div className={navOverlay} onClick={sideNavOpenClose}></div>



        </Fragment>
    );
}

export default NavMenuMobile;