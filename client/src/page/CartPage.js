import React, {Fragment, useEffect} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import CartList from "../components/cart/CartList";

const CartPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Fragment>
            <NavMenu/>
            <CartList/>
            <Footer/>
        </Fragment>
    );
};

export default CartPage;