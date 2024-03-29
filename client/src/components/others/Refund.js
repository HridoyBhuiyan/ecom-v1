import React, {Fragment, useEffect, useState} from 'react';
import {Breadcrumb, Card, Container} from "react-bootstrap";
import APImanage from "../../route/APImanage";
import axios from "axios";
import OtherLoadingAnimation from "../placeholer/OtherLoadingAnimation";
import {Link} from "react-router-dom";

const Refund = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData]= useState("");
    const getData= async ()=>{
        let value;
        await axios.get(APImanage.siteInfo)
            .then((response)=>{
                if (response.status==200){
                    value = response.data[0]['refund']
                    setData(value)
                    setLoading(false)
                    sessionStorage.setItem("refundInfo", value)
                }
            })
            .catch(error=>console.log(error))
        return value;
    }


    useEffect(()=>{
        if (!sessionStorage.getItem("refundInfo")){
            getData().then(x=>{})
        }
        else {
            setData(sessionStorage.getItem("refundInfo"))
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
                    <Breadcrumb className={'py-4 rounded'}>
                        <Breadcrumb.Item>
                            <Link to={'/'}>Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={'/refund'}>Refund</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card>
                        <h4 className={'text-center py-3'}>Refund Policy</h4>
                        <div className={'my-3 p-4'} dangerouslySetInnerHTML={{__html:data}}>

                        </div>
                    </Card>
                </Container>
            </Fragment>
        );
    }
};

export default Refund;