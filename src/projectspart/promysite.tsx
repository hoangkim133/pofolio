import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion"
import ChangeProjects from "../components/changeproject"
import EffectFlyUp from "../effects/effectFlyUp"
import * as Icon from 'react-bootstrap-icons';


function MysiteProject() {
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
                            <div className="work-bg-child" style={{backgroundImage: "url('https://i.pinimg.com/originals/ed/a5/73/eda5739966cb33768d8ad0d77d7307ce.gif')", backgroundSize: "cover", backgroundPosition: "100% 90%"}}></div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, y: -25}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.5, delay: 0.5, ease: "easeIn"}}
                        className="text-work">
                            MY <br /> PORTFOLIO <br /> WEBSITE
                        </motion.div>
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
                    <Row className="section-bt-pro-8">
                        <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={11}>
                            <EffectFlyUp>
                                <div style={{display: 'flex'}}>
                                    <img src="/logo.png" style={{height: '6rem', paddingTop: '0.25rem'}} alt="" />
                                    <h3 style={{marginLeft: "1rem"}}>This is a frontend project developed using React and TypeScript.</h3>
                                </div>
                            </EffectFlyUp>
                        </Col>
                        <Col sm={4} lg={4} md={4} xl={4} xxl={4} xs={11}>
                            <EffectFlyUp delay={0.2}>
                                <p>You're experiencing it. This project is built on Vite, developed with the purpose of sharing about myself and the experiences or projects I've undertaken.</p>
                                <p>The website is meticulously crafted with a focus on UI/UX, aiming to enhance user experience and showcase myself in the best possible light. Feel free to explore it, and if interested, don't hesitate to reach out to discuss potential collaborations.</p>
                            </EffectFlyUp>
                        </Col>
                        <Col>
                            <Row>
                                <EffectFlyUp delay={0.4}>
                                    <p style={{marginBottom: 0}}><b>Developer:</b></p>
                                    <p>Pham Kim Hoang</p>
                                </EffectFlyUp>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-6">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <img className="full-img" src="/site-logos.png" alt="Libraries" />
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <EffectFlyUp delay={0.2}>
                                <p className="margin-bt-0-mobile margin-t-1-mobile"><b>Libraries and Tools</b></p>
                                <p style={{fontSize: "14px"}}>With React, various libraries and tools serve specific purposes. For example, Bootstrap is the main CSS library for sleek designs, Framer Motion adds captivating animations, React Router manages data flow and URL routing, EmailJS simplifies email sending, and Vercel handles efficient deployment.</p>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-6">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <p>Particularly with Framer Motion, it's an excellent library that enables the creation of stunning effects, limited only by the developer's imagination. Almost all the effects on this website are achieved using Framer (with a few still relying on pure CSS). The effects using Framer are designed as separate components, with the aim of reusability and seamless integration. By simply passing children and declaring Props, they can be effortlessly combined. This modular approach ensures flexibility and efficiency in enhancing user experience.</p>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row className="section-bt-pro-6">
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <img className="full-img border-spe" src="/lightdark.png" alt="light dark mode" />
                            </EffectFlyUp>
                        </Col>
                        <Col sm={2} lg={2} md={2} xl={2} xxl={2} xs={11}>
                            <EffectFlyUp delay={0.2}>
                                <p className="margin-bt-0-mobile margin-t-1-mobile"><b>Light/Dark mode</b></p>
                                <p style={{fontSize: "14px"}}>The website also supports light/dark mode with three options: light, dark, 
                                and system-dependent represented by &#20;
                                <span><Icon.SunFill size={22}/></span>, &#20;
                                <span><Icon.MoonFill size={16}/></span>, &#20;
                                 and &#20;
                                <span><img src="/daynight.png" style={{height: '22px'}} className="dark-logo" alt=""/></span> &#20;
                                 respectively.</p>
                                 
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} lg={8} md={8} xl={8} xxl={8} xs={11}>
                            <EffectFlyUp>
                                <p>Thanks for visiting my portfolio website. Here, I showcase my projects and experiences, aiming to convey both my past work and future potential. Surely, there will be mistakes and room for improvement along the way. Feel free to reach out if you have any questions or ideas. Let's stay connected!!!</p>
                            </EffectFlyUp>
                        </Col>
                    </Row>
                    </motion.div>
                </Col>
            </Row>
            <ChangeProjects preProject={"ALADIN"} nextProject={"VICK"}/>
        </motion.div>   
        </>   
    )
}

export default MysiteProject