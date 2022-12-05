import React, {Fragment} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import CartList from "../components/cart/CartList";

const CartPage = () => {
    return (
        <Fragment>
            <NavMenu/>

            <CartList/>

            <Footer/>
        </Fragment>
    );
};

export default CartPage;