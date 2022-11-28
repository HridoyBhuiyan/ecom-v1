import React, {Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Accordion} from "react-bootstrap";

function MegaMenu(props) {
    return (
        <Fragment>
            <div className={'accordionMenuDiv'}>
                <div className={'accordionMenuDivInside'}>

                    <Accordion className={'accordionMenuDiv p-0'}>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="0">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/> 1 Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="1">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="2">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="3">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="4">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="5">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="6">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item className={'accordionMenuDivInside'} eventKey="7">
                            <Accordion.Header className={'accordion p-0'}>
                                <FontAwesomeIcon icon={faUser} className={'accordionMenuIcon'}/>Men's Item
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                    <li><a href="" className={'accordionItem'}>Men Shirt</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>






                    </Accordion>
                </div>
            </div>
        </Fragment>
    );
}

export default MegaMenu;