import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ApImanage from "../../route/APImanage";


const Notification = () => {
    const [modalState, setModalState] = useState(false)
    const [data, setData] = useState([])
    const [modalData, setModalData]=useState([])
    const handleModalState=(modalItem)=>{
        setModalState(true)
        setModalData(modalItem)
    }

    const getData=async ()=>{
        await axios.get(ApImanage.notification)
            .then(response=>{
                setData(response.data)
            })
    }

    useEffect(()=>{
       getData()
    },[])


    const allNotification= data && data.map((item, index)=>{
        return(
            <Col lg={6} md={6} sm={12} key={index}>
                <div className="p-3 d-flex justify-content-center m-1 shadow-lg mb-3 card" onClick={()=>handleModalState(item)}>
                    <p className="notification-title">{item.title}</p>
                    <p className="text-info notification-date">
                        <FontAwesomeIcon icon={faBell}/>
                        Date : {item.date} | Status : UNREAD
                    </p>
                </div>
            </Col>
        )
    })


    return (
        <Fragment>
            <Container>
                <div className="mt-5 pt-5">
                    <h3 className="section-title h3 my-4">Check All notification for you</h3>
                    <Row>
                        {allNotification}
                    </Row>
                </div>
            </Container>



            {/*Modal area*/}
            <Modal show={modalState} onHide={()=>setModalState(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalData.msg}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setModalState(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Modal area*/}




        </Fragment>
    );
};

export default Notification;