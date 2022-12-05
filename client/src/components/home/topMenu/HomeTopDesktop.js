import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "../MegaMenu";
import SliderHome from "../SliderHome";

function HomeTopDesktop(props) {
    return (
        <Fragment>
            <Container fluid={true} className={'p-0 m-0'}>
               <Row className={'m-0'}>
                  <Col lg={3} md={3} sm={12} className={'p-0'}>
                      <MegaMenu/>
                  </Col>

                   <Col lg={9} md={9} sm={12}  className={'p-0'}>
                       <SliderHome/>
                   </Col>
               </Row>
            </Container>
        </Fragment>
    );
}

export default HomeTopDesktop;