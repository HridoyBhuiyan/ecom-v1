import React, {Fragment, useEffect} from 'react';
import NavMenu from "../components/common/navMenu/NavMenu";
import Footer from "../components/common/footerSection/Footer";
import Favourite from "../components/favourite/Favourite";

const FavouritePage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Fragment>
            <NavMenu/>
            <Favourite/>
            <Footer/>
        </Fragment>
    );
};

export default FavouritePage;