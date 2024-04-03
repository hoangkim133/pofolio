import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import FeatureLogo from "../components/feature";
import { useEffect } from "react";


function Header() {
    useEffect(() => {
        let navChild = document.getElementsByClassName('navbar-child');
        let pathname = window.location.pathname;

        for (var i = 0; i < navChild.length; i++) {
            let child = navChild[i];
            child.classList.remove('is-active');

            if (child.getAttribute('href') == pathname) {
                child.classList.add('is-active');
            }
        }
    }, []);

    const activeNav = (event: React.MouseEvent<HTMLElement>) => {
        let navChild = document.getElementsByClassName('navbar-child');
        let pathname = event.currentTarget.getAttribute('href');

        for (var i = 0; i < navChild.length; i++) {
            let child = navChild[i];
            child.classList.remove('is-active');

            if (child.getAttribute('href') == pathname) {
                child.classList.add('is-active');
            }
        }
    };

    return (
        <>
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
                    <span><FeatureLogo/></span>
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
                    <Link to="/" className="navbar-child" onClick={activeNav}>
                        Home
                    </Link> 
                </motion.span> |&nbsp;
                <motion.span>
                    <Link to="/about" className="navbar-child"  onClick={activeNav}>
                        About
                    </Link>
                </motion.span> |&nbsp;
                <motion.span>
                    <Link to='/projects' className="navbar-child" onClick={activeNav}>
                        Projects
                    </Link>
                </motion.span> |&nbsp;
                <motion.span>
                    <Link to='/contact' className="navbar-child" onClick={activeNav}>
                        Contact
                    </Link>
                </motion.span>
            </motion.div>
            </Row>
        </>
    );
  }


export default Header