import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";


function Info() {
    return (
        <>
            <div className="box-fix box-conner full-height d-flex flex-column main-font scroll-off">
                <Container fluid style={{paddingLeft: '0'}}>
                    <Row style={{minHeight:'30vh'}}>
                        <Col sm={12} lg={4} md={4} xl={4} xxl={4} xxs={8}>
                            <h6 className="secondary-font title">About me</h6>
                            <p className="text-info-detail">
                                Name: PHAM KIM HOANG
                                <br />
                                Age: 23
                                <br />
                                From: Vietnam
                            </p>
                        </Col>
                        <Col sm={12} lg={4} md={4} xl={4} xxl={4} xxs={8}>
                            <h6 className="secondary-font title">Background</h6>
                            <p className="text-info-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={6} md={6} xl={6} xxl={6}>
                            <h6 className="secondary-font title">Something elses</h6>
                            <p className="text-info-detail"> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                            <br /></p>
                            <br />
                            <h3 className="main-color-text">
                               <i>"The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."</i> 
                            </h3>
                        </Col>
                        <Col sm={12} lg={6} md={6} xl={6} xxl={6} xxs={12} xs={12}>
                            <img src="./coimg.jpg" alt="my-desk" className="img-info-child"/>
                        </Col>
                    </Row>
                </Container>    
            </div>
            <motion.div 
            initial={{y:'100vh'}}
            animate={{y:0}}
            transition={{duration: 0.4}}
            className="img-info"></motion.div>            
        </>

        
    )
}

export default Info