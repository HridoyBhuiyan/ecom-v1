import React, {Fragment} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import ListBySubCategory from "../components/productListBySubCategory/ListBySubCategory";
import {useParams} from "react-router-dom";

const ProductListBySubCategoryPage = () => {
    const params = new useParams();
    return (
        <Fragment>
            <NavMenu/>
            <ListBySubCategory params={params}/>
            <Footer/>
        </Fragment>
    );
};

export default ProductListBySubCategoryPage;