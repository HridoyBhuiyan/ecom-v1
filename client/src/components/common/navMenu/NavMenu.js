import React, {Fragment} from 'react';
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

function NavMenu(props) {
    if (window.innerWidth>800){
        return (
            <NavMenuDesktop/>
        );
    }
    else{
        return (
            <NavMenuMobile/>
        )
    }

}

export default NavMenu;