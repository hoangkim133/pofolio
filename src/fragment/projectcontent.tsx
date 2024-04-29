import { useLocation } from "react-router-dom";
import VickProject from "../projectspart/provick";
import HdcapProject from "../projectspart/prohdcap";
import AladinProject from "../projectspart/proaladin";
import MysiteProject from "../projectspart/promysite";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from 'react';


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

    return (
    <>
        <motion.div ref={scroll_ref}>  
            <AnimatePresence mode="wait">
                {project.element}
            </AnimatePresence>
        </motion.div>   
    </>
    )
}

export default ProjectContent