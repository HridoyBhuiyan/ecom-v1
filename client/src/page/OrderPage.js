import React, {Fragment, useEffect} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import OrderForm from "../components/order/OrderForm";

const OrderPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Fragment>
            <NavMenu/>
                <OrderForm/>
            <Footer/>
        </Fragment>
    );
};

export default OrderPage;