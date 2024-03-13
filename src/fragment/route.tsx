import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSection from './main';


function Routers() {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<MainSection route="home"/>}/>
            <Route path="/info" element={<MainSection route="info"/>} />
            <Route path="/projects" element={<MainSection route="projects"/>} />
            <Route path="/contact" element={<MainSection route="contact"/>} />
        </Routes>
    </Router>
    );
  };


export default Routers;
