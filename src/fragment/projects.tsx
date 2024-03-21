import { Col, Row } from "react-bootstrap"
import { motion } from "framer-motion"
import { useState } from "react"

const project_name: Array<any> = [
    {'id':0, 'value':'ViCK'},
    {'id':1, 'value':'HDCap'},
    {'id':2, 'value':'Aladin'},
    {'id':3, 'value':'My Site'},
]


function Project() {
    const [projectDetail, setProjectDetail] = useState('');

    const handleMouseEnterControls = (event: React.MouseEvent<HTMLElement>) => {
        setProjectDetail(event.currentTarget.innerHTML);
    }

    return (
        <>
            <div>
                <div className="pro-img">
                    <img src="./pot_tree.png" alt="" />
                </div>
                <Row>
                    <Col className="pro-title">                     
                        {project_name.map((item: any) =>
                            <motion.p 
                                whileHover={{scale: 1.2, originX:0, fontWeight: 900}}
                                onMouseEnter={handleMouseEnterControls}
                                key={item.id}
                            >
                                {item.value}
                            </motion.p>

                        )}
                    </Col>
                </Row>
                <div className="pro-back-site">
                    {projectDetail}
                </div>
            </div>
        </>
    )
}

export default Project