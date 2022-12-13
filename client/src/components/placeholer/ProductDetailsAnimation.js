import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
    ShimmerPostDetails,
    ShimmerThumbnail
} from "react-shimmer-effects";

const ProductDetailsAnimation = () => {
    return (
        <Fragment>
           <Container>
               <Row>
                   <Col lg={6} md={6} xl={6} sm={12} xs={12}>
                       <ShimmerThumbnail height={600}/>
                       <div className={'d-flex align-items-center justify-content-center'}>
                           <div className={'shimmer shimmer-thumbnail mx-1'}></div>
                           <div className={'shimmer shimmer-thumbnail mx-1'}></div>
                           <div className={'shimmer shimmer-thumbnail mx-1'}></div>
                           <div className={'shimmer shimmer-thumbnail mx-1'}></div>
                       </div>
                   </Col>

                   <Col lg={6} md={6} xl={6} sm={12} xs={12}>
                           <div>
                               <div className="grid shimmer-title grid-gap-10 w-40">
                                   <div className="shimmer shimmer-title-line"></div>
                               </div>
                               <div className="grid shimmer-title--secondary grid-gap-10 w-20 mb-40">
                                   <div className="shimmer shimmer-title-line"></div>
                               </div>
                               <div className="w-40 mb-40">
                                   <div className="grid shimmer-text grid-gap-15 mb-15 w-20">
                                       <div className="shimmer shimmer-text-line"></div>
                                   </div>
                                   <div className="grid shimmer-text grid-gap-15 mb-15 w-40">
                                       <div className="shimmer shimmer-text-line"></div>
                                   </div>
                                   <div className="grid shimmer-text grid-gap-15 mb-30 w-60">
                                       <div className="shimmer shimmer-text-line"></div>
                                   </div>
                               </div>
                               <div className="grid shimmer-title--secondary grid-gap-10 w-30">
                                   <div className="shimmer shimmer-title-line"></div>
                               </div>
                               <div className="grid shimmer-text grid-gap-15 mb-40">
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                               </div>
                               <div className="grid shimmer-title--secondary grid-gap-10 w-30">
                                   <div className="shimmer shimmer-title-line"></div>
                               </div>
                               <div className="grid shimmer-text grid-gap-15 mb-40">
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                                   <div className="shimmer shimmer-text-line"></div>
                               </div>


                           </div>
                   </Col>
               </Row>

               <Row>
                   <Col lg={6} md={6} xl={6} sm={12} xs={12}>
                       <div className="grid shimmer-title--secondary grid-gap-10 w-30">
                           <div className="shimmer shimmer-title-line"></div>
                       </div>
                       <div className="grid shimmer-text grid-gap-15 mb-40">
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                       </div>

                       <div className="grid shimmer-text grid-gap-15 mb-40">
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                       </div>

                       <div className="grid shimmer-text grid-gap-15 mb-40">
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                           <div className="shimmer shimmer-text-line"></div>
                       </div>
                   </Col>

                   <Col lg={6} md={6} xl={6} sm={12} xs={12}>
                       <div>

                           <div className="grid shimmer-title--secondary grid-gap-10 w-30">
                               <div className="shimmer shimmer-title-line"></div>
                           </div>
                           <div className="grid shimmer-text grid-gap-15 mb-40">
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                           </div>


                           <div className="grid shimmer-title--secondary grid-gap-10 w-30">
                               <div className="shimmer shimmer-title-line"></div>
                           </div>
                           <div className="grid shimmer-text grid-gap-15 mb-40">
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                               <div className="shimmer shimmer-text-line"></div>
                           </div>

                       </div>
                   </Col>
               </Row>
           </Container>
        </Fragment>
    );
};

export default ProductDetailsAnimation;