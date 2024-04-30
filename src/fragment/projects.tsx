import { Col, Row } from "react-bootstrap"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const project_name: Array<any> = [
    {'id':0, 'url': '/projects/vick', 'value':'VICK', 'type': 'Service', 'duration': 0.7, 'durationexit': 0.8},
    {'id':1, 'url': '/projects/hdcap', 'value':'HDCAP', 'type': 'Website', 'duration': 0.9, 'durationexit': 0.6},
    {'id':2, 'url': '/projects/aladin', 'value':'ALADIN', 'type': 'Service', 'duration': 1.1, 'durationexit': 0.4},
    {'id':3, 'url': '/projects/mysite', 'value':'MY SITE', 'type': 'Branding', 'duration': 1.3, 'durationexit': 0.2},
]

const textMotion = {
    hover: {scale: 1.1, originX:0, fontWeight: 900}
};

const lineMotion = {
    hover: {width: '45%'}
}

const textChild = {
    hover: {opacity: 1}
}

function Project() {

    const text = "Most of the time, I work for a product company in a primary role as a backend developer, sometimes stepping into frontend development roles. Here are some of the products I've developed.";
    const text2 = "With technology advancing rapidly in recent years, I continuously strive to learn and acquire new skills every day.";

    return (
        <Row>
            <Col sm={{span: 6 }} md={{ span: 6 }} xl={6} xxl={6}>
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
                exit={{opacity: 0, transition: {duration: 0.5}}}
                className="work-ct main-font">
                    <div className="work-ct-child">
                        <motion.h4
                        initial={{clipPath: "inset(0 0 100% 0)", backgroundColor: "#262624"}}
                        animate={{clipPath: "inset(0 0 0 0)", backgroundColor: "#26262400"}}
                        transition={{duration: 0.7}}
                        exit={{clipPath: "inset(100% 0 0 0)", transition: {duration: 1}}}
                        style={{maxWidth: "max-content"}}
                        >WORK</motion.h4>
                        <motion.p
                        initial={{clipPath: "inset(0 0 100% 0)", backgroundColor: "#262624"}}
                        animate={{clipPath: "inset(0 0 0 0)", backgroundColor: "#26262400"}}
                        transition={{duration: 0.7}}
                        exit={{clipPath: "inset(100% 0 0 0)", transition: {duration: 0.6}}}
                        >{text}</motion.p>
                        <motion.p
                        initial={{clipPath: "inset(0 0 100% 0)", backgroundColor: "#262624"}}
                        animate={{clipPath: "inset(0 0 0 0)", backgroundColor: "#26262400"}}
                        transition={{duration: 0.7}}
                        exit={{clipPath: "inset(100% 0 0 0)", transition: {duration: 0.6}}}
                        style={{marginBottom: 0}}
                        >{text2}</motion.p>
                    </div>
                </motion.div>
            </Col>
            <Col sm={{ span: 6}} md={{ span: 6}} xl={6} xxl={6} className="pro-title">                     
                {project_name.map((item: any) =>
                    <motion.div
                    initial={{y: '100vh'}}
                    animate={{y: 0}}
                    transition={{duration: item.duration, type: 'spring', delay: 0.3}}
                    exit={{y: '100vh', transition: {duration: item.durationexit}}}
                    whileHover="hover"
                    key={item.id}>
                        <div className="center-alig">
                            <Link to={item.url}>
                                <motion.p
                                    style={{width: 'max-content'}}
                                    variants={textMotion}
                                    className="pro-name"
                                >
                                    {item.value}

                                </motion.p>
                            </Link>
                            <p className="type-pro-text main-font">
                                {item.type}
                            </p>
                        </div>
                        <motion.div variants={lineMotion} data-id={item.value} className="line-pro">
                            <motion.div variants={textChild} data-text-id={item.value + "_text"} className="line-text tablets-hidden">Click to see more</motion.div>
                        </motion.div>
                    </motion.div>
                    
                )}
            </Col>
        </Row>
    )
}

export default Project