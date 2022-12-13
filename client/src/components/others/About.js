import React, {Fragment, useEffect, useState} from 'react';
import {Breadcrumb, Card, Container} from "react-bootstrap";
import axios from "axios";
import APImanage from "../../route/APImanage";
import OtherLoadingAnimation from "../placeholer/OtherLoadingAnimation";
import {Link} from "react-router-dom";

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

                <Container className={'my-3'}>
                    <Breadcrumb className={'py-4 rounded'}>
                        <Breadcrumb.Item>
                            <Link to={'/'}>Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={'/about'}>About</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <h4 className={'text-center pt-4'}>About</h4>
                        <div className={'px-4 mt-3'} dangerouslySetInnerHTML={{__html:data}}/>
                    </Card>
                </Container>
            </Fragment>
        );
    }
};

export default About;