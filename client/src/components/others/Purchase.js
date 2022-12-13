import React, {Fragment, useEffect, useState} from 'react';
import {Breadcrumb, Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import APImanage from "../../route/APImanage";
import axios from "axios";
import OtherLoadingAnimation from "../placeholer/OtherLoadingAnimation";
import {Link} from "react-router-dom";

const Purchase = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData]= useState("");

    const getData= async ()=>{
        let value;
        await axios.get(APImanage.siteInfo)
            .then((response)=>{
                if (response.status==200){
                    value = response.data[0]['purchase_guide']
                    setData(value)
                    setLoading(false)
                    sessionStorage.setItem("purchaseInfo", value)

                }
            })
            .catch(error=>console.log(error))
        return value;
    }


    useEffect(()=>{
        if (!sessionStorage.getItem("purchaseInfo")){
            getData().then(x=>{})
        }
        else {
            setData(sessionStorage.getItem("purchaseInfo"))
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
                            <Link to={'/purchase'}>Purchase</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <h4 className={'text-center py-3'}>How to Purchase</h4>
                        <div className={'my-3 p-4'} dangerouslySetInnerHTML={{__html:data}}>

                        </div>
                    </Card>
                </Container>
            </Fragment>
        );
    }
};

export default Purchase;