import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';


function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState("Send");
    const [spinStatus, setSpinStatus] = useState("hidden");

    const handleClose = () => setShow(false);

    const changeBorderEmpty = (e: any) => { 
        var value = e.currentTarget.value;

        if (value.trim().length !== 0) {
            e.currentTarget.classList.remove('empty');
        }
    }

    const sendEmail = (e: any) => {
        e.preventDefault();

        const currentForm = form.current;
        if (currentForm == null) return;

        var send_condition = true;

        var lst_input = currentForm.getElementsByClassName('form-child');
        if (lst_input) {
            for (let input of lst_input){
                var value = (input as HTMLInputElement).value;
                console.log(value);
                if (value.trim().length == 0) {
                    send_condition = false;
                    input.classList.add('empty');
                } else {
                    input.classList.remove('empty');
                }
            }
        }

        if (send_condition) {
            setSpin("");
            setSpinStatus("");

            emailjs.sendForm('service_a1c2wea', 'template_5q9fsui', currentForm, {
                publicKey: 'VsZCZsNPSSrCePQFu',
            }).then(
                () => {
                    setShow(true);
                    setSpin("Send");
                    setSpinStatus("hidden");
                    console.log('SUCCESS!');
                },
                (error) => {
                    setSpin("Send");
                    setSpinStatus("hidden");
                    alert("Send failed. Please try again later.")
                    console.log('FAILED...', error.text);
                },
            );
        }
    };

    return (
        <motion.div
        exit={{
            opacity: 0,
            transition: {duration: 0.5}
        }}
        >
            <Row className="main-font" style={{marginTop: '2.5rem'}}>
                <Col className="mobile-hidden">
                    <div className="text_cont">
                        <motion.p
                        initial={{clipPath: 'inset(0 100% 0 0)'}}
                        animate={{clipPath: 'inset(0 0 0 0)'}}
                        transition={{duration: 0.6, delay: 0.4}}
                        >
                            If you're intrigued, don't hesitate to get in touch. Additionally, you can explore more about me by viewing <a style={{textDecoration: "underline"}} className="color-by-mode" href='./resume.pdf' target='_blank'><b><i>my CV (Click here)</i></b></a>
                        </motion.p> 
                    </div>
                </Col>
                <Col>
                    <motion.div
                    initial={{clipPath: 'inset(0 0 100% 0)'}}
                    animate={{clipPath: 'inset(0 0 0 0)'}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="form-style">
                        <Form ref={form}>
                            <Form.Group className="mb-3">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control onChange={changeBorderEmpty} className="form-child" name="user_name" type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your email</Form.Label>
                                <Form.Control onChange={changeBorderEmpty} className="form-child" name="email" type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control onChange={changeBorderEmpty} className="form-child" name="message" as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Row style={{marginTop: '1.7rem', display: "f"}}>
                            <Col sm={9} lg={9} md={9} xl={9} xxl={9} xs={9} className="info-contact-icon">
                                <a href="https://www.linkedin.com/in/hoangkim133/" target="_blank"><Icon.Linkedin size={30} color="#faf5e9"/></a>
                                <a href="https://github.com/hoangkim133" target="_blank"><Icon.Github size={30} color="#faf5e9"/></a>
                                <a href="mailto:phamkimhoang133@gmail.com" target="_blank"><Icon.Envelope size={30}color="#faf5e9"/></a>
                                <a href="./resume.pdf" target="_blank" className="mobile-show"><Icon.PersonCircle size={30} color="#faf5e9"/></a>
                            </Col>
                            <Col sm={3} lg={3} md={3} xl={3} xxl={3} xs={3}>
                                <motion.div 
                                whileHover={{scale: 1.1}}
                                className="button-send-mail" onClick={sendEmail}>
                                    {spin}
                                    <Spinner size="sm" className={spinStatus} animation="border"/>
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>
                </Col>
            </Row>
            <motion.div
                initial={{clipPath: 'circle(0% at 50% 100%)'}}
                animate={{clipPath: 'circle(150% at 50% 100%)'}}
                transition={{duration: 1.8}}
                className="img-back"
                >
                <img className="img-back show-img-ct-light" src="./tree.jpg" alt="" />
                <img className="img-back show-img-ct-dark" src="./treenone.png" alt="" />
                <div className="filter-night"></div>
            </motion.div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Thank you for reaching out! I'll get back to you as soon as possible.</Modal.Body>
                <Modal.Footer>
                    <Button style={{margin: 'auto'}} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </motion.div>
    )
}


export default Contact