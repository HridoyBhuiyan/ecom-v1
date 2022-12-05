import React, {Fragment} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import Purchase from "../../components/others/Purchase";

const PurchasePage = () => {
    return (
        <Fragment>
            <NavMenu/>
            <Purchase/>
            <Footer/>
        </Fragment>
    );
};

export default PurchasePage;