import React, {Fragment} from 'react';
import FooterDektop from "./FooterDektop";
import FooterMobile from "./FooterMobile";

function Footer(props) {
    if (window.innerWidth>=800){
        return <FooterDektop/>
    }
    else return <FooterMobile/>
}

export default Footer;