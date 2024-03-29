import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Accordion} from "react-bootstrap";
import axios from "axios";
import ApImanage from "../../route/APImanage";
import {Link} from "react-router-dom";

function MegaMenu(props) {
    const [data, setData] = useState([]);
    const getData = async ()=>{
        await axios.get(ApImanage.categorydetails)
            .then(response=>{
                setData(response.data)
            })
    }
    useState(()=>{
        getData();

    },[])


    const CategoryItem = data.map((item, index)=>{
        const categoryName = item['parent_category']
        return (
            <Accordion.Item className={'accordionMenuDivInside'} eventKey={index} key={index}>
                <Accordion.Header className={'accordion p-0'}>

                        <img src={item['parent_icon']} className={'accordionMenuIcon'}/>{item['parent_category']}

                </Accordion.Header>
                <Accordion.Body>
                    <ul>
                        {item['child_category'].map((item, index)=>{
                            return (<li key={item.id}>
                                <Link to={"/category/"+categoryName+"/subcategory/"+item.cat2_name} className={'accordionItem'}>{item.cat2_name}</Link>
                            </li>)
                        })}

                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        );
    })


    return (
        <Fragment>
            <div className={'accordionMenuDiv'}>
                <div className={'accordionMenuDivInside'}>

                    <Accordion className={'accordionMenuDiv p-0'}>
                        {CategoryItem}
                     </Accordion>

                </div>
            </div>
        </Fragment>
    );
}

export default MegaMenu;