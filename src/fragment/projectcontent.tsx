import { useLocation } from "react-router-dom";
import VickProject from "../projectspart/provick";
import HdcapProject from "../projectspart/prohdcap";
import AladinProject from "../projectspart/proaladin";
import MysiteProject from "../projectspart/promysite";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { ChevronDoubleDown } from 'react-bootstrap-icons';



interface ProjectInfomation {
    keyname: string,
    element: JSX.Element;
    url: string;
    name: string;
}

const project_array_urlkey : { [id: string] : ProjectInfomation; } = {
    "/projects/vick": {keyname: "VICK", element: <VickProject/>, url: "/projects/vick", name: "VICK"},
    "/projects/hdcap":  {keyname: "HDCAP", element: <HdcapProject/>, url: "/projects/hdcap", name: "HD Capital"},
    "/projects/aladin": {keyname: "ALADIN", element: <AladinProject/>, url: "/projects/aladin", name: "Aladin"},
    "/projects/mysite": {keyname: "MYSITE", element:<MysiteProject/> , url: "/projects/mysite", name: "My Portfio Web"}
}


function ProjectContent() {
    const locationReact = useLocation();
    const scroll_ref = useRef(null);
    const [project, setProject] = useState(project_array_urlkey[locationReact.pathname]); 

    useEffect(() => {
        setProject(project_array_urlkey[locationReact.pathname]);
    }, [locationReact])

    const [arrowDown, setArrowDown] = useState(1);
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest == 0){
            setArrowDown(1);
        } else if (latest > 0 && latest < 1) {
            setArrowDown(0);
        }
    });

    return (
    <>
        <motion.div ref={scroll_ref}>  
            <AnimatePresence mode="wait">
                <div>
                    {project.element}
                    <motion.div 
                    initial={{opacity: 0, y: -15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 4, duration: 0.8, type: "spring", repeat: Infinity, repeatType: "reverse",}}
                    style={{position: "fixed", width: "100%", bottom: "0", left: "calc(50% - 11px)", marginBottom: '1.5rem'}}>
                        <ChevronDoubleDown style={{opacity: arrowDown}} size={22}/>
                    </motion.div>
                </div> 
            </AnimatePresence>
        </motion.div>   
    </>
    )
}

export default ProjectContent