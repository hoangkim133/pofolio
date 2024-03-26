import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from 'react';
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

        setSpin("");
        setSpinStatus("");
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
                <Col>
                    <div className="text_cont">
                        <p>
                            <ReactTyped
                                    strings={["The point of using Lorem Ipsum is that it has as opposed to using 'Content here, content here'"]}
                                    startDelay={1000}
                                    typeSpeed={30}
                                    showCursor={false}
                            />
                        </p> 
                    </div>
                </Col>
                <Col>
                    <motion.div
                    initial={{clipPath: 'inset(0 0 100% 0)'}}
                    animate={{clipPath: 'inset(0 0 0 0)'}}
                    transition={{duration: 0.6, delay: 0.8}}
                    className="form-style">
                        <Form ref={form}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control onChange={changeBorderEmpty} className="form-child" name="user_name" type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your email</Form.Label>
                                <Form.Control onChange={changeBorderEmpty} className="form-child" name="email" type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control onChange={changeBorderEmpty} className="form-child" name="message" as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Row style={{marginTop: '1.7rem'}}>
                            <Col className="info-contact-icon">
                                <a href="https://www.linkedin.com/in/hoangkim133/" target="_blank"><Icon.Linkedin size={30} color="#faf5e9"/></a>
                                <a href="https://github.com/hoangkim133" target="_blank"><Icon.Github size={30} color="#faf5e9"/></a>
                                <a href="mailto:phamkimhoang133@gmail.com" target="_blank"><Icon.Envelope size={30}color="#faf5e9"/></a>
                                <a href="https://drive.google.com/file/d/1831RxdNq-mOqw4nwqBLAKUaniCUrBLAZ/view" target="_blank"><Icon.PersonCircle size={30} color="#faf5e9"/></a>
                            </Col>
                            <Col>
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
            <div>
                <motion.img 
                initial={{clipPath: 'circle(0% at 50% 100%)'}}
                animate={{clipPath: 'circle(100% at 50% 100%)'}}
                transition={{duration: 1}}
                className="img-back" src="./tree.jpg" alt="" />
            </div>
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