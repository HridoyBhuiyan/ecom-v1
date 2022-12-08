import React, {Fragment, useEffect, useState} from 'react';
import NavMenu from "../../components/common/navMenu/NavMenu";
import Footer from "../../components/common/footerSection/Footer";
import {Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import loginBanner from "../../assets/image/loginCover.png";
import axios from "axios";
import ApImanage from "../../route/APImanage";
import validation from "../../route/validation";

function ContactPage(props) {

    const [sending, setSending] = useState(false);
    useEffect(()=>{
        window.scroll(0,0)
    },[])



    const sendMsg=async ()=> {
        let name = document.getElementById("nameId").value;
        let email = document.getElementById("emailId").value;
        let text = document.getElementById("textId").value;
        let form = document.getElementById("contactForm");
        if (!validation.nameRegx.test(name)){
            alert("invalid name");
        }
        else if(!validation.emailRegx.test(email)){
            alert("invalid email");
        }
        else if(text.length==0){
            alert ("Message empty")
        }
        else {


            let sendJson = {
                name:name,
                email:email,
                text:text
            }
            console.log(sendJson)

            setSending(true)
            await axios.post(ApImanage.contatSend, sendJson)
                .then(res=>{

                    if (res.status==200){
                        setSending(false)
                        form.reset();
                    }
                    console.log(res.data)
                })
                .catch(error=>console.log(error))

        }




    }




    return (
        <Fragment>
            <NavMenu/>
            <Container className={'my-5 py-5'}>
                <Row className={'d-flex justify-content-center align-items-center'}>
                    <Col md={10} lg={10} sm={10} xs={10}>
                        <Row className={'d-flex align-items-center justify-content-center flex-row card'}>
                            <Col lg={6} xl={6} md={6} sm={12} xs={12}>
                                <h4 className={'text-center'}>Contact US</h4>
                                <Form id={"contactForm"}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Your name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" id={"nameId"}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Email Address" id={"emailId"}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Text</Form.Label>
                                        <textarea className={'form-control'} placeholder="Drop Your text" id={"textId"}/>
                                    </Form.Group>
                                </Form>


                                <Button variant="primary" className={'w-100'} onClick={sendMsg}>
                                    {sending? <div className={'d-flex align-items-center justify-content-center'}><Spinner animation="grow" variant="light" style={{height:12, width:12, marginRight:8}}/> Sending</div>:"Send"}
                                </Button>
                            </Col>

                            <Col lg={6} xl={6} md={6} sm={0} xs={0} className={'p-0 Desktop'}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.604769279451!2d90.36629660107944!3d23.761469444193434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1669880070693!5m2!1sen!2sbd"
                                    width="600" height="450" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Col>


                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Fragment>

    );
}

export default ContactPage;