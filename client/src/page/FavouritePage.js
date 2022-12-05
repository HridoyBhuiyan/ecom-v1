import React, {Fragment} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import Favourite from "../components/favourite/Favourite";

const FavouritePage = () => {
    return (
        <Fragment>
            <NavMenu/>
            <Favourite/>
            <Footer/>
        </Fragment>
    );
};

export default FavouritePage;