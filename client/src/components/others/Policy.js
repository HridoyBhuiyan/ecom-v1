import React, {Fragment, useEffect, useState} from 'react';
import {Breadcrumb, Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import APImanage from "../../route/APImanage";
import OtherLoadingAnimation from "../placeholer/OtherLoadingAnimation";
import {Link} from "react-router-dom";

const Policy = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData]= useState("");

    const getData= async ()=>{
        let value;
        await axios.get(APImanage.siteInfo)
            .then((response)=>{
                if (response.status==200){
                    value = response.data[0]['policy']
                    setData(value)
                    setLoading(false)
                    sessionStorage.setItem("policyInfo", value)

                }
            })
            .catch(error=>console.log(error))
        return value;
    }


    useEffect(()=>{
        if (!sessionStorage.getItem("policyInfo")){
            getData().then(x=>{})
        }
        else {
            setData(sessionStorage.getItem("policyInfo"))
            setLoading(false)
        }

    },[])

    if (loading==true){
        return <OtherLoadingAnimation/>
    }

    else{
        return (
            <Fragment>
                <Container>
                    <Breadcrumb className={'py-4 rounded'}>
                        <Breadcrumb.Item>
                            <Link to={'/'}>Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={'/policy'}>Policy</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <h4 className={'text-center py-3'}>Privacy Policy</h4>
                        <div className={'my-3 p-4'} dangerouslySetInnerHTML={{__html:data}}>

                        </div>
                    </Card>
                </Container>
            </Fragment>
        );
    }
};

export default Policy;