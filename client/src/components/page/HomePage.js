import React, {Fragment} from 'react';
import FeaturedProducts from "../home/FeaturedProducts";
import Categories from "../home/Categories";
import Collection from "../home/Collection";
import NewArrival from "../home/NewArrival";

function HomePage(props) {
    return (
        <Fragment>
            <NewArrival/>
            <FeaturedProducts/>
            <Collection/>
            <Categories/>
        </Fragment>
    );
}

export default HomePage;