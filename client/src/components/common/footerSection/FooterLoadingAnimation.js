import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import {ShimmerText} from "react-shimmer-effects";

const FooterLoadingAnimation = () => {
    return (
        <Fragment>
            <Container fluid={true} className={'my-2'}>
                <ShimmerText line={10} gap={10} />
            </Container>
        </Fragment>
    );
};

export default FooterLoadingAnimation;