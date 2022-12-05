import React, {Fragment} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";
import ProductDetails from "../components/productDetails/ProductDetails";


const ProductDetailsPage = () => {
    return (
        <Fragment>
            <NavMenu/>

            <ProductDetails/>
            <SuggestedProducts/>
            <Footer/>
        </Fragment>
    );
};

export default ProductDetailsPage;