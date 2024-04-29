import { Col } from "react-bootstrap"
import { motion } from "framer-motion"

const project_name: Array<any> = [
    {'id':0, 'value':'VICK', 'type': 'Service', 'duration': 0.7, 'durationexit': 0.9},
    {'id':1, 'value':'HDCAP', 'type': 'Website', 'duration': 0.9, 'durationexit': 0.7},
    {'id':2, 'value':'ALADIN', 'type': 'Service', 'duration': 1.1, 'durationexit': 0.5},
    {'id':3, 'value':'MY SITE', 'type': 'Branding', 'duration': 1.3, 'durationexit': 0.3},
]

function Project() {

    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
    const text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";

    return (
        <>
            <Col sm={{span: 6 }} md={{ span: 6 }} xl={6} xxl={6}>
                <div 
                className="work-ct main-font">
                    <div>
                        <motion.h4
                        initial={{clipPath: "inset(0 0 100% 0)"}}
                        animate={{clipPath: "inset(0 0 0 0)"}}
                        transition={{duration: 0.7}}
                        exit={{clipPath: "inset(100% 0 0 0)", transition: {duration: 1}}}
                        >WORK</motion.h4>
                        <motion.div
                        initial={{clipPath: "inset(0 0 100% 0)"}}
                        animate={{clipPath: "inset(0 0 0 0)"}}
                        transition={{duration: 0.7}}
                        exit={{clipPath: "inset(100% 0 0 0)", transition: {duration: 0.6}}}
                        >
                            <p>{text}</p>
                            <p>{text2}</p>
                        </motion.div>
                    </div>
                </div>
            </Col>
            <Col sm={{ span: 6}} md={{ span: 6}} xl={6} xxl={6} className="pro-title">                     
                {project_name.map((item: any) =>
                    <motion.div
                    initial={{y: '100vh'}}
                    animate={{y: 0}}
                    transition={{duration: item.duration, type: 'spring', delay: 0.3}}
                    exit={{y: '100vh', transition: {duration: item.durationexit}}}
                    key={item.id}>
                        <div className="center-alig">
                            <motion.p 
                                whileHover={{scale: 1.2, originX:0, fontWeight: 900}}
                                style={{width: 'max-content'}}
                                className="pro-name"
                            >
                                {item.value}

                            </motion.p>
                            <p className="type-pro-text main-font">
                                {item.type}
                            </p>
                        </div>
                        <div data-id={item.value} className="line-pro">
                            <div data-text-id={item.value + "_text"} className="line-text">Let see</div>
                        </div>
                    </motion.div>
                    
                )}
            </Col>
        </>
    )
}

export default Project