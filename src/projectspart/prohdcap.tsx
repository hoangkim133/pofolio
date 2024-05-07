import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion"
import ChangeProjects from "../components/changeproject"
import EffectShowMore from "../effects/effectShowMore"
import EffectFlyUp from "../effects/effectFlyUp"
import { Carousel } from "react-bootstrap"
import EffectCarouselControl from "../effects/effectCarouselControl"
import { useState } from "react"

function HdcapProject() {
    const [indexCarou1, setIndexCarou1] = useState(0);
    const [indexCarou2, setIndexCarou2] = useState(0);

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
                            <div className="work-bg-child" style={{backgroundImage: "url('https://hdcap.vn/static/image/payment1.jpg')", backgroundSize: "cover", backgroundPosition: "100% 90%"}}></div>
                        </motion.div>
                        <motion.img 
                        initial={{opacity: 0, y: -25}}
                        animate={{opacity: 1, y: 50}}
                        transition={{duration: 1.5, delay: 0.5, ease: "easeIn"}}
                        src="https://en.hdcap.vn/static/image/icon.svg" className="logo-work" alt="logo hdcap" />
                    </div>    
            </Row>
            <Row>
                <Col sm={1} lg={1} md={1} xl={1} xxl={1} xs={1}>
                </Col>
                <Col>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: 1, ease: "easeIn"}}
                    className="font-mobile"
                    >
                    <Row>
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <h3>HDCapital Joint Stock Company (HDCapital) is a securities market enterprise established in 2008, with a strong track record of professional management.</h3>
                            </EffectFlyUp>
                        </Col>
                        <Col>
                            <Row>
                                <EffectFlyUp delay={0.2}>
                                    <p style={{marginBottom: 0}}><b>Company:</b></p>
                                    <p className="margin-bt-0-mobile">HDCapital Joint Stock Company</p>
                                    <p style={{marginBottom: 0}}><b>Location:</b></p>
                                    <p>Ho Chi Minh, VietNam</p>
                                </EffectFlyUp>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={11}>
                            <EffectFlyUp>
                                <p>The company consistently adheres to standards of governance, business ethics, transparency, legal compliance, and investment management.</p>
                                <p>Currently, HDCapital Joint Stock Company is fully performing its functions, including managing investment funds, managing investment portfolios, and providing securities investment advisory services.</p>
                            </EffectFlyUp>
                        </Col>
                        <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={11}>
                            <EffectFlyUp delay={0.2}>
                                <p><i><b>Hdcap website</b></i> serves as an informative platform dedicated to offering customers insights into the fund, including general details, monthly profits, news updates, portfolio structures, reports, events and more. Thus, the website prioritizes UI/UX design and SEO optimization to ensure swift access to information for customers.</p>
                            </EffectFlyUp>
                        </Col>
                        <Col>
                            <Row>
                                <EffectFlyUp delay={0.4}>
                                    <p style={{marginBottom: 0}}><b>Web:</b></p>
                                    <p><a href="https://hdcap.vn/" target="_blank">hdcap.vn</a></p>
                                </EffectFlyUp>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-6">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <EffectShowMore height={"40rem"}>
                                    <img loading="lazy" src="/hdcap.vn_.png" className="full-img" alt="" />
                                </EffectShowMore>
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <Row>
                                <EffectFlyUp delay={0.2}>
                                    <p className="margin-bt-0-mobile margin-t-1-mobile"><b>Home</b></p>
                                    <p style={{fontSize: "14px"}}>Various content module blocks and services has been meticulously crafted for the website, seamlessly integrating carousels, captivating images, intuitive search functionality, convenient contact options (such as Zalo or Messenger), and dynamic highcharts,... all aimed at elevating the user experience to new heights.</p>
                                </EffectFlyUp>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-8">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <img loading="lazy" src="/hdsearch.png" className="full-img" alt="" />
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <Row>
                                <EffectFlyUp delay={0.2}>
                                    <p className="margin-bt-0-mobile margin-t-1-mobile"><b>Search engine</b></p>
                                    <p style={{fontSize: "14px"}}>The Full-text Search technique of PostgreSQL is utilized to enhance the speed of queries and searches efficiently.</p>
                                </EffectFlyUp>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-8">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <Carousel interval={null} touch={true} controls={true} onSelect={(eventKey: number) => {setIndexCarou1(eventKey)}} id="caroul_1">
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hdpost1.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hdpost2.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hdpost3.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                </Carousel>
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <EffectFlyUp>
                                <EffectCarouselControl index={indexCarou1} total={3} name={"caroul_1"}></EffectCarouselControl>
                                <p style={{marginTop: "1rem"}} className="margin-bt-0-mobile"><b>Post</b></p>
                                <p style={{fontSize: "14px"}}>Content is presented in easily digestible formats such as <b>news</b>, <b>knowledge</b> , and <b>information</b> ,ensuring accessibility and readability.</p>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-8">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <Carousel interval={null} touch={true} controls={true} onSelect={(eventKey: number) => {setIndexCarou2(eventKey)}} id="caroul_2">
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hddoc1.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hddoc2.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hddoc3.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hddoc4.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img loading="lazy" src="/hddoc5.png" className="full-img" alt="" />
                                    </Carousel.Item>
                                </Carousel>
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <EffectFlyUp>
                                <EffectCarouselControl index={indexCarou2} total={5} name={"caroul_2"}></EffectCarouselControl>
                                <p style={{marginTop: "1rem"}} className="margin-bt-0-mobile"><b>Documents</b></p>
                                <p style={{fontSize: "14px"}}>Additional information such as activity schedules, FAQs, or documents related to the fund are also provided on the website, designed in a synchronized manner for easy searchability and usage.</p>
                                <ul style={{fontSize: "14px"}}>
                                    <li>Public Information</li>
                                    <li>Forms</li>
                                    <li>Schedule of Activities</li>
                                    <li>FAQs</li>
                                    <li>Send questions</li>
                                </ul>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-4">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <p>
                                    There's an array of additional webpages addressing various requirements, incorporating an administrative interface for refining content, images, and even JavaScript scripts tailored for specific presentations throughout the website. Furthermore, the website offers support for multiple languages, including English and Vietnamese.                                    </p>
                                <p>
                                    I oversee the entire frontend of this project, along with specific backend modules and APIs. If you find this interesting, drop me a <a href="mailto:phamkimhoang133@gmail.com" target="_blank">line</a>!
                                </p>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    </motion.div>
                </Col>
            </Row>
            <ChangeProjects preProject={"VICK"} nextProject={"ALADIN"}/>
        </motion.div>   
        </>   
    )
}

export default HdcapProject