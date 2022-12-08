import React, {Fragment, useEffect} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import Policy from "../../components/others/Policy";

const PolicyPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Fragment>
            <NavMenu/>
            <Policy/>
            <Footer/>
        </Fragment>
    );
};

export default PolicyPage;