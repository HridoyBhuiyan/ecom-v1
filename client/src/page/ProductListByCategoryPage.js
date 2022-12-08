import React, {Fragment} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import ListByCategory from "../components/productListByCategory/ListByCategory";
import {useParams} from "react-router-dom";

const ProductListByCategoryPage = () => {
    const {catName} = useParams();
    return (
        <Fragment>
            <NavMenu/>
            <ListByCategory catName={catName}/>
            <Footer/>
        </Fragment>
    );
};

export default ProductListByCategoryPage;