import React, {Fragment, useEffect, useState} from 'react';
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import APImanage from "../../../route/APImanage";

function NavMenu() {
    const cookie = new Cookies();

    const sendLocation=async ()=>{
        await axios.get('http://ip-api.com/json/')
                .then(res=>{
                    localStorage.setItem("userIP",res.data.query);
                    cookie.set('visited',true,{maxAge:60*60*24})
                })

        await axios.get(APImanage.visitorApi+localStorage.getItem("userIP"))
            .then()
        return "Success"
    }


    useEffect(() => {
        if (!cookie.get("visited")){
            sendLocation().then(res=>{})
        }
    },[])




    if (window.innerWidth>800){
        return (<NavMenuDesktop/>);
    }

    else{
        return (<NavMenuMobile/>)
    }

}

export default NavMenu;