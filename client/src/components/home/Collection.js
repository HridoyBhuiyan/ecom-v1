import React, {Fragment, useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import APImanage from "../../route/APImanage";
import ProductLoadingAnimation from "../ProductLoadingAnimation";

function Collection(props) {

    const [loading, setLoading]=useState(true);
    const [data, setData]=useState([]);
    useEffect(()=>{
        axios.get(APImanage.specialProduct)
            .then(res=>{
                setData(res.data)
                setLoading(false)
            })
            .catch(error=>console.log(error))
    },[])



    const allData = data.map((item, index)=>{
        return(
            <Col xl={3} lg={3}  md={3} sm={6} xs={6} key={index} className={'mb-4'}>
                <Card className={'card'}>
                    <img className={'w-100 h300'} src={item.image}/>
                    <Card.Body>
                        <div style={{height:50}} >
                            <p className={'product-name-on-card'}>{item.brand} : {item.title}</p>
                        </div>
                        <p className={'product-price-on-card mb-1'}>Price: {item.price}TK</p>
                    </Card.Body>
                </Card>
            </Col>
        )
    })


    const ShowAllData=()=>{
        if (loading){
            return <ProductLoadingAnimation colNum={4}/>
        }
        else {return allData}
    }


    return (
        <Fragment>
            <Container className={'text-center mt-5'}>
                <h4 className={'section-title'}>SPECIAL COLLECTION</h4>
                <h6 className={'section-sub-title'}>Some of our exclusive Categories, you may like</h6>
                <Row className={"mt-4"}>
                    <ShowAllData/>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Collection;