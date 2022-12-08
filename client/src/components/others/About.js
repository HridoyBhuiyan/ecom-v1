import React, {Fragment, useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import axios from "axios";
import APImanage from "../../route/APImanage";
import OtherLoadingAnimation from "./OtherLoadingAnimation";

const About = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData]= useState("");

    const getData= async ()=>{
        let value;
        await axios.get(APImanage.siteInfo)
            .then((response)=>{
                if (response.status==200){
                    value = response.data[0]['about']
                    setData(value)
                    setLoading(false)
                    sessionStorage.setItem("aboutInfo", value)

                }
            })
            .catch(error=>{})
        return value;
    }


    useEffect(()=>{
        if (!sessionStorage.getItem("aboutInfo")){
            getData().then(x=>console.log(x))
        }
        else {
            setData(sessionStorage.getItem("aboutInfo"))
            setLoading(false)
        }

    },[])


    if (loading==true){
        return <OtherLoadingAnimation/>
    }

    else{
        return (
            <Fragment>
                <Container className={'my-5 py-5'}>
                    <Card>
                        <h4 className={'text-center py-3'}>About</h4>
                        <div className={'my-3 p-4'} dangerouslySetInnerHTML={{__html:data}}>

                        </div>
                    </Card>
                </Container>
            </Fragment>
        );
    }
};

export default About;