import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion"
import ChangeProjects from "../components/changeproject"
import EffectFlyUp from "../effects/effectFlyUp"
import EffectCarouselControl from "../effects/effectCarouselControl"
import { Carousel } from "react-bootstrap"
import { useState } from "react"


function AladinProject() {
    const [indexCarou1, setIndexCarou1] = useState(0);

    return (
        <>  
            <motion.div>  
            <Row>
                    <div className="work-bg" style={{display: 'flex', alignItems: "flex-end"}}>
                        <motion.div 
                        initial={{height: 0}}
                        animate={{height: "65vh"}}
                        transition={{duration: 1, delay: 1, ease: cubicBezier(1,-0.01,.17,.23)}}
                        style={{overflow: "hidden"}}
                        className="work-bg-child"
                        >
                            <div className="work-bg-child" style={{backgroundImage: "url('https://www.aladin.finance/static/image/indexaladinintroduction.png')", backgroundSize: "cover", backgroundPosition: "100% 90%"}}></div>
                        </motion.div>
                        <motion.img 
                        initial={{opacity: 0, y: -25}}
                        animate={{opacity: 1, y: 30}}
                        transition={{duration: 1.5, delay: 0.5, ease: "easeIn"}}
                        src="/aladinlogo.png" className="logo-work" alt="logo hdcap" />
                    </div>    
            </Row>
            <Row>
                <Col sm={1} lg={1} md={1} xl={1} xxl={1} xs={1}>
                </Col>
                <Col>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, ease: "easeIn"}}
                    className="font-mobile"
                    >
                    <Row style={{marginBottom: "8rem"}}>
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <h3>Aladin.finance is a platform that connects investors and securities advisors.</h3>
                                <p>Aladin.finance is a technology platform designed to meet the demand for efficient, transparent, and publicly recognized financial advisors - acknowledged by the financial investor community, allowing advisors to share knowledge with investors interested in their investment strategies.</p>
                            </EffectFlyUp>
                        </Col>
                        <Col>
                            <EffectFlyUp delay={0.2}>
                                <Row>
                                    <p style={{marginBottom: 0}}><b>Company:</b></p>
                                    <p className="margin-bt-0-mobile">Aladin Joint Stock Company</p>
                                    <p style={{marginBottom: 0}}><b>Web:</b></p>
                                    <p className="margin-bt-0-mobile"><a href="https://www.aladin.finance/" target="_blank">aladin.finance</a></p>
                                </Row>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "8rem"}}>
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <img className="full-img" src="/aladinpic.png" alt="" />
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <EffectFlyUp delay={0.2}>
                                <Row>
                                    <p style={{marginBottom: 0}} className="margin-bt-0-mobile margin-t-1-mobile"><b>Web:</b></p>
                                    <p>The platform offers a multitude of functions tailored to serve stock investors in the most convenient manner possible, with a customizable interface suitable for various devices.</p>
                                </Row>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "8rem"}}>
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <Carousel interval={null} touch={true} controls={true} onSelect={(eventKey: number) => {setIndexCarou1(eventKey)}} id="caroul_2">
                                    <Carousel.Item>
                                        <img loading="lazy" src="/aladin1.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/aladin2.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/aladin3.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/aladin4.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                </Carousel>
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <EffectFlyUp>
                                <EffectCarouselControl index={indexCarou1} total={4} name={"caroul_2"}></EffectCarouselControl>
                                <p style={{marginTop: "1rem"}} className="margin-bt-0-mobile margin-t-1-mobile"><b>Pages</b></p>
                                <ul style={{fontSize: "14px"}}>
                                    <li>Choose a consultant</li>
                                    <li>Investment blog</li>
                                    <li>Stock code information</li>
                                    <li>Investment signals</li>
                                </ul>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "2rem"}}>
                            <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={11}>
                                <EffectFlyUp>
                                    <p>Aladin is the company where I started as a backend intern and gradually transitioned into a full-stack developer role. Upon joining, many functionalities and interfaces were already in place.</p>
                                </EffectFlyUp>
                            </Col>
                            <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={11}>
                                <EffectFlyUp delay={0.2}>
                                    <p> My primary responsibilities included developing new features, crawling data from various sources for the website, and working with HubSpot CRM to manage user interactions.</p>
                                </EffectFlyUp>
                            </Col>
                        </Row>
                    </motion.div>
                </Col>
            </Row>
            <ChangeProjects preProject={"HDCAP"} nextProject={"MYSITE"}/>
        </motion.div>   
        </>   
    )
}

export default AladinProject