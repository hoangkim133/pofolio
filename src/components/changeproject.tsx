import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface ProjectInfomation {
    url: string;
    name: string;
}

const project_array : { [id: string] : ProjectInfomation; } = {
    "VICK": {url: "/projects/vick", name: "VICK"},
    "HDCAP":  {url: "/projects/hdcap", name: "HD Capital"},
    "ALADIN": {url: "/projects/aladin", name: "Aladin"},
    "MYSITE": {url: "/projects/mysite", name: "My Portfio Web"}
}

function ChangeProjects({preProject, nextProject}: any) {
  return (
        <Row>
            <Col>
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 1, ease: "easeIn"}}
                className='previous-pro-work'>
                    <h1 className="change-ft">Previous</h1>
                    <Link to={project_array[preProject].url}>
                        <motion.div 
                        initial={{rotateY: '-35deg',rotateX: '-5deg'}}
                        whileHover={{rotateY: 0, rotateX: 0, color: '#bb5f27'}}
                        style={{transformOrigin: "left", float: "left"}}
                        className="text-cp">
                            {project_array[preProject].name}
                        </motion.div>
                    </Link>
                </motion.div>
            </Col>
            <Col>
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 1, ease: "easeIn"}}
                className='next-pro-work'>
                    <h1 className="change-ft">Next</h1>
                    <Link to={project_array[nextProject].url}>
                        <motion.div
                        initial={{rotateY: '-35deg',rotateX: '5deg'}}
                        whileHover={{rotateY: 0, rotateX: 0, color: '#bb5f27'}}
                        style={{transformOrigin: "right", float: "right"}}
                        className="text-cp">
                            {project_array[nextProject].name}
                        </motion.div>
                    </Link>
                </motion.div>
            </Col>
        </Row>
    )
}

export default ChangeProjects