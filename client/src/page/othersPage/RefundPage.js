import React, {Fragment, useEffect} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import Refund from "../../components/others/Refund";

const RefundPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Fragment>
            <NavMenu/>
            <Refund/>
            <Footer/>
        </Fragment>
    );
};

export default RefundPage;