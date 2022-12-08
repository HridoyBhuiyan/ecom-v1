import React, {Fragment, useEffect} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import Notification from "../components/notification/Notification";

const NotificationPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <Fragment>
            <NavMenu/>
            <Notification/>
            <Footer/>
        </Fragment>
    );
};

export default NotificationPage;