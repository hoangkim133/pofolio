import { Row, Col } from "react-bootstrap"
import { motion} from "framer-motion"
import { cubicBezier } from "framer-motion"
import ChangeProjects from "../components/changeproject"
import EffectFlyUp from "../effects/effectFlyUp"


function VickProject() {
    return (
        <motion.div
        exit={{opacity: 0}}
        >  
            <Row>
                <Col>
                    <div className="work-bg" style={{display: 'flex', alignItems: "flex-end"}}>
                        <motion.div 
                        initial={{height: 0}}
                        animate={{height: "65vh"}}
                        transition={{duration: 1, delay: 1, ease: cubicBezier(1,-0.01,.17,.23)}}
                        style={{overflow: "hidden"}}
                        className="work-bg-child"
                        >
                            <div className="work-bg-child" style={{backgroundImage: "url('/slide-vick.png')", backgroundSize: "cover", backgroundPosition: "100% 90%"}}>
                            <img className="work-bg-chick" src="/chicken_emptyroom.png" alt="chicken logo vick" />

                            </div>
                        </motion.div>
                      
                        <motion.img 
                        initial={{opacity: 0, y: -25}}
                        animate={{opacity: 1, y: 50}}
                        transition={{duration: 1.5, delay: 0.5, ease: "easeIn"}}
                        src="https://vick.vn/static/image/stalk-01.svg" className="logo-work" alt="logo hdcap" />
                    </div>    
                </Col>
            </Row>
            <Row>
                <Col sm={1} lg={1} md={1} xl={1} xxl={1} xs={1}>
                </Col>
                <Col>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: 1, ease: "easeIn"}}
                    >
                        <Row style={{marginBottom: "6rem"}}>
                            <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={4}>
                                <EffectFlyUp>
                                    <h3>Vick is an enterprise operating in the field of securities finance.</h3>
                                    <p>ViCK is one of the first companies on the Vietnamese stock market to provide investment Expert/Advisor for individual investors.</p>
                                </EffectFlyUp>
                            </Col>
                            <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={4}>
                                <EffectFlyUp delay={0.2}>
                                    <p>Investors have many opportunities to choose from due to the diversity of specialized consulting groups with different investment methods led by each Expert/Advisor.</p>
                                    <p>Together with ViCK, investors will receive trading ideas through analyzed comments and strategies of Experts/Advisors to best support the investment process.</p>
                                </EffectFlyUp>
                            </Col>
                            <Col>
                                <Row>
                                    <EffectFlyUp delay={0.4}>
                                        <p style={{marginBottom: 0}}><b>Company:</b></p>
                                        <p>ViCK joint stock company</p>
                                        <p style={{marginBottom: 0}}><b>Location:</b></p>
                                        <p>Ho Chi Minh, VietNam</p>
                                        <p style={{marginBottom: 0}}><b>Web:</b></p>
                                        <p><a href="https://vick.vn/" target="_blank">vick.vn</a></p>
                                    </EffectFlyUp>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: "6rem"}}>
                            <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={8}>
                                <EffectFlyUp>
                                    <img className="full-img" src="/vicksite.png" alt="" />
                                </EffectFlyUp>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: "6rem"}}>
                            <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={8}>
                                <EffectFlyUp>
                                    <p>The ViCK platform offers a multitude of features including trading, chatting, posting, news, and payments, among others. Consequently, the platform has been designed following a <b>microservices architecture</b> to ensure scalability for future expansions. Each functional module is developed independently, enabling its reusability across multiple projects.</p>
                                    <p>The platform is developed using Java as the backend programming language, leveraging the Netty framework, with PostgreSQL serving as the database. HTML5 and CSS, enriched by the Bulma CSS library, along with Vanilla JavaScript, are employed for the frontend. Mobile development is powered by Flutter. Backend modules communicate with each other via APIs or Kafka. Certain core modules may be developed as frameworks and directly linked to other projects' source code.</p>
                                </EffectFlyUp>
                            </Col>
                            <Col>
                                <EffectFlyUp delay={0.2}>
                                    <p style={{marginBottom: 0}}><b>Backend:</b></p>
                                    <p>Java Core, PostgreSQL</p>
                                    <p style={{marginBottom: 0}}><b>Frontend:</b></p>
                                    <p>Html5, CSS, Vanilla JS</p>
                                    <p style={{marginBottom: 0}}><b>Mobile:</b></p>
                                    <p>Flutter</p>
                                </EffectFlyUp>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: "6rem"}}>
                            <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={8}>
                                <EffectFlyUp>
                                    <img className="full-img" src="/traningvick.png" style={{filter: "drop-shadow(0px 7px 10px grey)"}} alt="" />
                                </EffectFlyUp>
                            </Col>
                            <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={2}>
                                <EffectFlyUp delay={0.2}>
                                    <p><b>Trading game:</b></p>
                                    <p style={{fontSize: "14px"}}>In addition to providing advisory services, ViCK also offers trading games where investors can engage in virtual trading based on real market data, yet still have the opportunity to earn real money through rewards.</p>
                                </EffectFlyUp>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: "2rem"}}>
                            <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={4}>
                                <EffectFlyUp>
                                    <p>My primary role in the company is as a <b>backend developer</b>, although I also occasionally work as a frontend developer. I am responsible for several modules, participate in architectural design, and develop APIs for business logic.</p>
                                </EffectFlyUp>
                            </Col>
                            <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={4}>
                                <EffectFlyUp delay={0.2}>
                                    <p>Furthermore, I play a pivotal role in integrating various tools and transferring data from databases to third parties, catering to different departments such as sales, accounting, or marketing, aiming to optimize workflow processes.</p>
                                </EffectFlyUp>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={8}>
                                <EffectFlyUp delay={0.3}>
                                    <p>ViCK is a startup company operating in the financial technology and securities sector. Therefore, our products are still new and require further improvement in the future to better serve our customers. If interested, please visit our <a href="http://vick.vn" target="_blank" rel="noopener noreferrer">website</a>  or download the app here. (<a href="https://play.google.com/store/apps/details?id=com.stalk.stalkmobile&pcampaignid=web_share" target="_blank">Android</a> or <a href="https://apps.apple.com/vn/app/vick/id6443514902?l=vi" target="_blank">IOS</a>).</p>
                                </EffectFlyUp>
                            </Col>
                        </Row>
                    </motion.div>
                </Col>
            </Row>
            <ChangeProjects preProject={"MYSITE"} nextProject={"HDCAP"}/>
        </motion.div>   
    )
}

export default VickProject