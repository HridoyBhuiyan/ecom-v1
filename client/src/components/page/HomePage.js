import React, {Fragment} from 'react';
import FeaturedProducts from "../home/FeaturedProducts";
import Categories from "../home/Categories";
import Collection from "../home/Collection";
import NewArrival from "../home/NewArrival";
import HomeTop from "../home/HomeTop";
import NavMenuDesktop from "../common/NavMenuDesktop";

function HomePage(props) {
    return (
        <Fragment>
            <NavMenuDesktop/>
            <HomeTop/>
            <FeaturedProducts/>
            <Collection/>
            <NewArrival/>
            <Categories/>
        </Fragment>
    );
}

export default HomePage;