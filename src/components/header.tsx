import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import FeatureLogo from "./feature";
import { memo } from "react";


function Header({refAudio} : any) {
    return (
        <motion.div
        exit={{
            opacity:0,
            transition: {duration: 0.8}
        }}
        >
        <Row className="main-font">
            <Col>
                <motion.div
                        initial={{x: '-100vw'}}
                        animate={{x: 0}}
                        transition={{duration: 0.2, type: 'spring', stiffness: 70}}
                >
                    <h3><b>KIM HOANG</b> portfolio.</h3>
                    <div style={{borderBottom: 'solid #bb5f27', marginBottom: '0.5rem'}}></div>
                </motion.div>
            </Col>
            <Col>
                <motion.div 
                initial={{x: '100vw'}}
                animate={{x: 0}}
                transition={{duration: 0.2, type: 'spring', stiffness: 70}}
                style={{textAlign:'right'}}>
                    <span><FeatureLogo refAudio={refAudio}/></span>
                </motion.div>
            </Col>
        </Row>
        <Row className="main-font">
            <motion.div 
             initial={{x: '-100vw'}}
             animate={{x: 0}}
             transition={{duration: 0.2, type: 'spring', stiffness: 70}}
            className="main-nav" style={{fontSize: '13px'}}>
                <motion.span> 
                    <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "navbar-child" : isActive ? "navbar-child is-active" : "navbar-child"}>
                        Home
                    </NavLink> 
                </motion.span> |&nbsp;
                <motion.span>
                    <NavLink to="/about" className={({ isActive, isPending }) =>isPending ? "navbar-child" : isActive ? "navbar-child is-active" : "navbar-child"}>
                        About
                    </NavLink>
                </motion.span> |&nbsp;
                <motion.span>
                    <NavLink to='/projects' className={({ isActive, isPending }) =>isPending ? "navbar-child" : isActive ? "navbar-child is-active" : "navbar-child"}>
                        Projects
                    </NavLink>
                </motion.span> |&nbsp;
                <motion.span>
                    <NavLink to='/contact' className={({ isActive, isPending }) =>isPending ? "navbar-child" : isActive ? "navbar-child is-active" : "navbar-child"}>
                        Contact
                    </NavLink>
                </motion.span>
            </motion.div>
            </Row>
        </motion.div>
    );
  }


export default memo(Header)