import React, {Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import NavMenu from "../components/common/navMenu/NavMenu";
import TopMenu from "../components/home/topMenu/TopMenu";
import Footer from "../components/common/footerSection/Footer";
import Specility from "../components/home/Specility";

function HomePage(props) {
    return (
        <Fragment>
            <NavMenu/>
            <TopMenu/>
            <FeaturedProducts/>
            <Specility/>
            <NewArrival/>
            <Collection/>
            <Categories/>
            <Footer/>
        </Fragment>
    );
}

export default HomePage;