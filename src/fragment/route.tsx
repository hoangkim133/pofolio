import { Route, Routes} from 'react-router-dom';
import Home from './home';
import Info from './about';
import Project from './projects';
import Contact from './contact';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Routers() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route path='/' element={<Home/>}/>
                <Route path="/about" element={<Info/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </AnimatePresence>
    );
  };


export default Routers;
