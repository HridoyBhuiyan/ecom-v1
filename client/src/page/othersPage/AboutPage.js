import React, {Fragment, useEffect} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import About from "../../components/others/About";

const AboutPage = () => {
    useEffect(()=>{
        window.scroll(0, 0)
    },[])
    return (
        <Fragment>
            <NavMenu/>
            <About/>
            <Footer/>
        </Fragment>
    );
};

export default AboutPage;