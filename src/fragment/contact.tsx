import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"
// import Form from 'react-bootstrap/Form';


function Contact() {

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
                    <div>
                        {/* <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form> */}
                    </div>
                </Col>
            </Row>
            <div>
                <motion.img 
                initial={{clipPath: 'circle(0% at 50% 100%)'}}
                animate={{clipPath: 'circle(100% at 50% 100%)'}}
                transition={{duration: 1}}
                className="img-back" src="./tree.jpg" alt="" />
            </div>
        </motion.div>
    )
}


export default Contact