import { Row, Col } from "react-bootstrap"
// import Form from 'react-bootstrap/Form';


function Contact() {
    return (
        <>
            <Row className="main-font" style={{marginTop: '2.5rem'}}>
                <Col>
                    <div className="text_cont">
                        <p>
                            The point of using Lorem Ipsum is that it has as opposed to using 'Content here, content here'
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
                <img className="img-back" src="./tree.jpg" alt="" />
            </div>
        </>
    )
}


export default Contact