import React from 'react';
import HomeTopMobile from "./HomeTopMobile";
import HomeTopDesktop from "./HomeTopDesktop";

function TopMenu(props) {
    if (window.innerWidth<800){
        return <HomeTopMobile/>
    }
    else{
        return (
            <HomeTopDesktop/>
        );
    }

}

export default TopMenu;