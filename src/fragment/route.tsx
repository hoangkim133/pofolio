import { Route, Routes} from 'react-router-dom';
import Home from './home';
import Info from './Info';
import Project from './projects';
import Contact from './contact';
import { useLocation } from 'react-router-dom';

function Routers() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path="/info" element={<Info/>} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    );
  };


export default Routers;
