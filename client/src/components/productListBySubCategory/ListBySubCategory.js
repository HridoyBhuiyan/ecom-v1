import React, {Fragment, useEffect, useState} from 'react';
import ProductListByCategoryPage from "../../page/ProductListByCategoryPage";
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApImanage from "../../route/APImanage";
import {Link} from "react-router-dom";
import ProductLoadingAnimation from "../placeholer/ProductLoadingAnimation";

const ListBySubCategory = (props) => {
    const catName=props.params.catName;
    const subCatName=props.params.subCatName;
    const [loading, setLoading]=useState(true);
    const [data, setData]= useState([]);

    const getData=async ()=>{
        await axios.get(ApImanage.getProductListBySubCategory(catName, subCatName))
            .then(res=>{
                if (res.status==200){
                    setData(res.data)
                    setLoading(false)
                }
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getData()
    },[])


    const allData = data.map((item, index)=>{
        return(
            <Col  xl={2} lg={2} md={2} sm={4} xs={6} key={index} className={'py-2'}>
                <Link to={'/productdetails'}>
                    <Card className={'image-box card'}>
                        <img  className={'w-100'} src={item.image}/>
                        <div style={{height:100}}>
                            <div style={{height:50}} className={'mt-3'}>
                                <p className={'product-name-on-card'}>{item.title}</p>
                            </div>
                            <p className={'product-price-on-card mb-2'}>Price: {item.price}TK</p>
                        </div>
                    </Card>
                </Link>
            </Col>
        )
    })


    const AllDataShow=()=>{
        if (loading){
            return(
                <ProductLoadingAnimation colNum={6}/>
            )
        }
        else {
            return allData
        }
    }

    return (
        <Fragment>
            <Container className={'text-center BetweenTwoSection'}>

                <Breadcrumb className={'py-4 rounded'}>
                    <Breadcrumb.Item>
                        <Link to={'/'}>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={'/category/'+props.params.catName}>{props.params.catName}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={'/category/'+props.params.catName+"/subcategory/"+props.params.subCatName}>{props.params.subCatName}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className={'my-4 mt-5'}>
                    <h4 className={'section-title'}>{props.params.catName}</h4>
                    <h6 className={'section-sub-title'}>Some of our exclusive collection, you may like</h6>
                </div>

                <Row>
                    <AllDataShow/>
                </Row>
            </Container>
        </Fragment>
    );
};

export default ListBySubCategory;