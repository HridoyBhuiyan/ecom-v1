import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "../MegaMenu";
import SliderHome from "../SliderHome";

function HomeTopMobile(props) {
    return (
        <Fragment>
            <Container fluid={true} className={'p-0 m-0'}>
                        <SliderHome/>
            </Container>
        </Fragment>
    );
}

export default HomeTopMobile;