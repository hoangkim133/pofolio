import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Home from "./home";
import Info from "./Info";
import Project from "./projects";
import Contact from "./contact";
import { useState, useEffect } from "react";


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

    elemContainer?.classList.remove('hidden');
    elemSelect.classList.add("is-active");

    if (elemSelect.id == 'home'){
      window.history.replaceState(null, "", "/");
    } else {
      window.history.replaceState(null, "", elemSelect.id);
    }

    setPage(elemSelect.id);
    setPageContainer(elemSelect.id + '_container');
  };

  return (
    <div className='box box-conner full-height d-flex flex-column'>
      <Row className="main-font">
        <Col>
          <h3><b>KIM HOANG</b> portfolio.</h3>
          <div style={{borderBottom: 'solid #bb5f27', marginBottom: '0.5rem'}}></div>
          <div className="main-nav" style={{fontSize: '13px'}}>
            <span id='home' onClick={changePage}>Home</span> |&nbsp;
            <span id='info' onClick={changePage}>Info</span> |&nbsp;
            <span id='projects' onClick={changePage}>Projetcs</span> |&nbsp;
            <span id='contact' onClick={changePage}>Contact</span>
          </div>
        </Col>
        <Col style={{textAlign:'right'}}>
          <span><img src="./logo.png" alt="" style={{height:'2.5rem'}} /></span>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <div id="home_container" className="center-dis hidden">
          <Home/>
        </div>
        <div id="info_container" className="center-dis hidden">
          <Info/>
        </div>
        <div id="projects_container" className="center-dis hidden">
          <Project/>
        </div>
        <div id="contact_container" className="center-dis hidden">
          <Contact/>
        </div>
      </Row>
    </div>
  );
}

  
export default MainSection