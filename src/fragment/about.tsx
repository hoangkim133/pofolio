import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const name = "Name: PHAM KIM HOANG".split(" ");
const age = "Age: 23".split(" ");
const from = "From: Vietnam".split(" ");
const background = "I graduated from the University of Economics and Law with a Bachelor's degree in Financial Technology. I began my career as a backend developer in the finance sector before expanding my skills to become a full-stack developer. Currently, I work as a software developer, continuously learning and striving to enhance my qualifications in the field of technology.".split(" ");
const other = "I have a love for learning and constantly seek out new experiences. I always want to make a product myself from start to finish, crafting something with my own hands. In addition, I enjoy indulging in the simple pleasures of life like savoring a good cup of coffee, staying active through sports, and chilling.".split(" ");


const titleVariants = {
    hidden: {
        scaleX:0, originX: 0,
    }, 
    visible: {
        scaleX:1,
        transition: { delay: 0.2, duration: 0.2}
    },
    exit: {
        clipPath:'inset(0 100% 0 0)',
        transition: {duration: 0.5}
    }
}

function Info() {
    return (
        <>
            <div className="box-fix box-conner full-height d-flex flex-column main-font scroll-off">
                <Container fluid style={{paddingLeft: '0'}}>
                    <Row style={{minHeight:'30vh'}}>
                        <Col sm={12} lg={4} md={4} xl={4} xxl={4}>
                            <motion.div
                             exit={{clipPath:'inset(0 100% 0 0)',originX: 0,
                                transition: {duration: 0.4}}}
                            >
                            <motion.h6 className="secondary-font title"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            >About me</motion.h6>
                                <p className="text-info-detail">
                                {name.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i / 10,
                                    }}
                                    key={i}
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))}
                                <br />
                                {age.map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i / 10,
                                }}
                                key={i}
                                >
                                {el}{" "}
                                </motion.span>
                            ))}
                                <br />
                                {from.map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i / 10,
                                }}
                                key={i}
                                >
                                {el}{" "}
                                </motion.span>
                            ))}
                            </p>
                            </motion.div>                            
                        </Col>
                        <Col sm={12} lg={4} md={4} xl={4} xxl={4} >
                            <motion.div>
                                <motion.h6 
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="secondary-font title">Background</motion.h6>

                            <motion.div
                            exit={{clipPath:'inset(0 100% 0 0)',originX: 0,
                                transition: {duration: 0.4}}}
                            >
                            <p className="text-info-detail">
                                {background.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i / 30,
                                    }}
                                    key={i}
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))}
                                </p>
                            </motion.div>
                               
                            </motion.div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={6} md={6} xl={6} xxl={6}>
                            <motion.h6 
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="secondary-font title">Something elses</motion.h6>
                            <motion.div
                            exit={{clipPath:'inset(0 100% 0 0)',originX: 0,
                                transition: {duration: 0.4}}}
                            >
                                <p className="text-info-detail"> 
                            {other.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i / 30,
                                    }}
                                    key={i}
                                   
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))}
                            <br /></p>
                            <motion.p
                            initial={{scaleX:0,  originX: 0}}
                            animate={{scaleX:1,transition: {delay:1.5, duration: 0.4}}}
                            >
                                <i>
                                    <Link to="/projects" className="link-atp">
                                        <span>&#8640;</span>
                                        <span> See my experience </span>                      
                                    </Link>
                                </i>
                            </motion.p>
                            </motion.div>
                            
                            <motion.h3 
                             exit={{opacity:0,
                                transition: {duration: 0.4}}}
                            className="main-color-text main-font"> 
                                <i>
                                    <ReactTyped
                                    strings={["“You don't know if you don't try”", "“Nothing haunts us like the things we don't say!”"]}
                                    startDelay={1500}
                                    backDelay={2000}
                                    typeSpeed={50}
                                    smartBackspace={false}
                                    loop
                                    backSpeed={20}
                                    showCursor={true}
                                    />
                                </i>
                            </motion.h3>
                        </Col>
                        <Col sm={12} lg={6} md={6} xl={6} xxl={6}    xs={12}>
                            <motion.img 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.4,
                            }}
                            exit={{scale:0,
                                transition: {duration: 0.4}}}
                            src="./coimg.jpg" alt="my-desk" className="img-info-child"/>
                        </Col>
                    </Row>
                </Container>    
            </div>
            <motion.div 
            initial={{x:'100vh'}}
            animate={{x:0}}
            transition={{duration: 0.4}}
            exit={{x:'100vh',
                transition: {duration: 0.5}}}
            className="img-info"></motion.div>            
        </>

        
    )
}

export default Info