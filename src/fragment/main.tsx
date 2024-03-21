import { Row } from "react-bootstrap";
import Home from "./home";
import Info from "./Info";
import Project from "./projects";
import Contact from "./contact";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


function MainSection(route: any) {
  const [page, setPage] = useState(route.route);
  const [pageContainer, setPageContainer] = useState(route.route + '_container');

  useEffect(() => {
    document.getElementById(page)?.classList.add('is-active');
    document.getElementById(pageContainer)?.classList.remove('hidden');
  }, []);

  const changePage = (event: React.MouseEvent<HTMLElement>) => {
    document.getElementById(page)?.classList.remove('is-active');
    document.getElementById(pageContainer)?.classList.add('hidden');

    var elemSelect = event.currentTarget;
    var elemContainer = document.getElementById(elemSelect.id + '_container');


    var cubelist = document.getElementsByClassName("cube");

    elemContainer?.classList.remove('hidden');
    elemSelect.classList.add("is-active");

    if (elemSelect.id == 'home'){
      window.history.replaceState(null, "", "/");
      if (cubelist){
        for (let cube of cubelist){
          cube.classList.remove("paused");
        }
      }
    } else {
      window.history.replaceState(null, "", elemSelect.id);
      if (cubelist){
        for (let cube of cubelist){
          cube.classList.add("paused");
        }
      }
    }

    setPage(elemSelect.id);
    setPageContainer(elemSelect.id + '_container');
  };

  return (
    <div className='box box-conner full-height d-flex flex-column'>
      <Row className="main-font navbar-fix">
        <motion.div
        initial={{x: '-100vw'}}
        animate={{x: 0}}
        transition={{duration: 0.2, type: 'spring', stiffness: 70}}
        className="col"
        
        >
          <h3><b>KIM HOANG</b> portfolio.</h3>
          <div style={{borderBottom: 'solid #bb5f27', marginBottom: '0.5rem'}}></div>
          <div className="main-nav" style={{fontSize: '13px'}}>
            <motion.span 
            whileHover={{scale: 1.5, originX:0}}
            transition={{type: 'spring', stiffness: 200}}
            id='home' onClick={changePage}>Home</motion.span> |&nbsp;
            <motion.span 
            whileHover={{scale: 1.2, originX:0}}
            transition={{type: 'spring', stiffness: 200}}
            id='info' onClick={changePage}>Info</motion.span> |&nbsp;
            <motion.span 
            whileHover={{scale: 1.2, originX:0}}
            transition={{type: 'spring', stiffness: 200}}
            id='projects' onClick={changePage}>Projetcs</motion.span> |&nbsp;
            <motion.span 
            whileHover={{scale: 1.2, originX:0}}
            transition={{type: 'spring', stiffness: 200}}
            id='contact' onClick={changePage}>Contact</motion.span>
          </div>
        </motion.div>
        <motion.div 
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{duration: 0.2, type: 'spring', stiffness: 70}}
        className="col"
        style={{textAlign:'right'}}>
          <span><img src="./logo.png" alt="" style={{height:'2.5rem'}} /></span>
        </motion.div>
      </Row>
      <Row className="flex-grow-1">
        <div id="home_container" className="center-dis hidden">
          <Home/>
        </div>
        <div id="info_container" className="hidden">
          <Info/>
        </div>
        <div id="projects_container" className="hidden">
          <Project/>
        </div>
        <div id="contact_container" className="hidden">
          <Contact/>
        </div>
      </Row>
    </div>
  );
}

  
export default MainSection