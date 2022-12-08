import React, {Fragment} from 'react';
import {ShimmerText} from "react-shimmer-effects";
import {Container} from "react-bootstrap";

const OtherLoadingAnimation = () => {
    return (
        <Fragment>
            <Container className={'card my-5 py-3'}>
                <div className={"my-5"}>
                    <ShimmerText line={20} gap={10} />
                    <ShimmerText line={20} gap={10} />
                </div>

            </Container>

        </Fragment>
    );
};

export default OtherLoadingAnimation;