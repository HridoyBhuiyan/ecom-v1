import React, {Fragment} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import Policy from "../../components/others/Policy";

const PolicyPage = () => {
    return (
        <Fragment>
            <NavMenu/>
            <Policy/>
            <Footer/>
        </Fragment>
    );
};

export default PolicyPage;