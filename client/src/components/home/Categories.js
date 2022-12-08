import React, {Fragment, useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import productImg from "../../assets/image/product.webp";
import watchImg from "../../assets/image/watch.jpg";
import axios from "axios";
import APImanage from "../../route/APImanage";
import ProductLoadingAnimation from "../ProductLoadingAnimation";
import {Link} from "react-router-dom";

function Categories(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const getData=async ()=>{
        await axios.get(APImanage.categorydetails)
            .then(response=>{
                if (response.status==200){
                    setData(response.data)
                    setLoading(false)
                }
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getData()
    },[])

    const categoryItem= data.map((item, index)=>{
            return(
                <Col  xl={2} lg={2} md={2} sm={4} xs={6} key={index} className={'my-2'}>
                    <Link to={'/category/'+item['parent_category']} className={'text-decoration-none text-dark'}>
                    <Card className={'card'}>
                        <img src={item.parent_icon} className={'px-3 pt-3'}/>
                        <div className={'py-1 pt-2'}>
                            <p className={'category-name'}>{item.parent_category}</p>
                        </div>
                    </Card>
                    </Link>
                </Col>
            )
    })


    const ShowCategoryItem=()=>{
        if (loading){
            return (<ProductLoadingAnimation colNum={6}/>)
        }
        else {
            return categoryItem
        }
    }


    return (
        <Fragment>
            <Container className={'text-center BetweenTwoSection my-5'}>
                <h4 className={'section-title'}>CATEGORIES</h4>
                <h6 className={'section-sub-title'}>Some of our exclusive Categories, you may like</h6>
                <Row className={'py-3'}>
                    <ShowCategoryItem/>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Categories;