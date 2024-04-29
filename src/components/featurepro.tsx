import * as Icon from 'react-bootstrap-icons';
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { memo, useState, useEffect } from 'react';


function ProjectFeature() {
    const [footerOpa, setFooterOpa] = useState(1);
    const { scrollYProgress } = useScroll();

    const locationReact = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        },100)
      
    }, [locationReact])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0 && latest <= 0.2){
            setFooterOpa(1 - latest*5);
        } else if (latest >= 0.8 && latest <= 1) {
            setFooterOpa(1 - (1 - latest)*5);
        } else if (latest > 0.2 && latest < 0.8){
            setFooterOpa(0);
        }
    });

    return (
        <>  
            <motion.div
            initial={{x: "100vw"}}
            animate={{x: 0}}
            transition={{delay: 0.7, duration: 0.5, type: "spring"}}
            style={{position: "fixed", width: "100%", top: "0"}}>
                <Link to="/projects">
                    <Icon.ArrowLeft className="return-arrow color-by-mode" size={40}></Icon.ArrowLeft>
                </Link>
            </motion.div>
            <div
            style={{opacity: footerOpa}}
            >
                <motion.div style={{position: "fixed", bottom: "0"}}
                initial={{y: "100vh"}}
                animate={{y: 0}}
                transition={{delay: 0.7, duration: 0.8, type: "spring"}}
                >
                    <div className="work-detail">
                        <div className='center-dis-al'>
                            <img src="/logo_edge.png" alt="logo" className='color-by-mode dark-logo' height="40rem"/>
                            <div style={{marginLeft: "0.5rem"}}>
                                <div><b>Kim Hoang.</b></div>
                                <div>Software developer</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                initial={{y: "100vh"}}
                animate={{y: 0}}
                transition={{delay: 0.7, duration: 0.8, type: "spring"}}
                style={{position: "fixed", width: "100%", bottom: "0"}}>
                    <Link to="/contact">
                        <div className="work-ct-detail">
                            ./contact me
                        </div>
                    </Link>
                </motion.div>
            </div>
        </>   
    )
}

export default memo(ProjectFeature)