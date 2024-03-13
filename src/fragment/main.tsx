import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Home from "./home";
import Info from "./Info";
import Project from "./projects";
import Contact from "./contact";
import { useState } from "react";


function MainSection(route: any) {
  console.log(route.route);
  const [page, setPage] = useState('home');
  const [pageContainer, setPageContainer] = useState('home_container');

  const changePage = (event: React.MouseEvent<HTMLElement>) => {
    document.getElementById(page)?.classList.remove('is-active');
    document.getElementById(pageContainer)?.classList.add('hidden');

    var elemSelect = event.currentTarget;
    var elemContainer = document.getElementById(elemSelect.id + '_container');

    elemContainer?.classList.remove('hidden');
    elemSelect.classList.add("is-active");

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
            <span id='home' onClick={changePage} className="is-active">Home</span> |&nbsp;
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
        <div id="home_container" className="center-dis">
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