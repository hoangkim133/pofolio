import { Col, Row } from "react-bootstrap"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const project_name: Array<any> = [
    {'id':0, 'value':'VICK', 'type': 'Web dev', 'duration': 0.7, 'durationexit': 0.9},
    {'id':1, 'value':'HDCAP', 'type': 'Web dev', 'duration': 0.9, 'durationexit': 0.7},
    {'id':2, 'value':'ALADIN', 'type': 'Web dev', 'duration': 1.1, 'durationexit': 0.5},
    {'id':3, 'value':'MY SITE', 'type': 'Web dev', 'duration': 1.3, 'durationexit': 0.3},
]

interface ProjectInfomation {
    title: string;
    url: string;
    description: string;
    class: string;
    urlcontent: string;
    maincolor: string;
}

const project_detail: { [id: string] : ProjectInfomation; } = {
    "VICK": {maincolor:"black", title: "https://vick.vn/static/image/stalk-01.svg", url: "https://vick.vn/", class: "pro-back-site bg-pro-1", description: "Cung cấp dịch vụ cố vấn", urlcontent: "vick.vn" },
    "HDCAP": {maincolor:"black", title: "https://en.hdcap.vn/static/image/icon.svg", url: "https://hdcap.vn/", class: "pro-back-site bg-pro-2", description: "Trang thông tin quỹ đầu tư HDBond", urlcontent: "hdcap.vn" },
    "ALADIN": {maincolor:"whitesmoke", title: "https://www.aladin.finance/static/image/aladin.svg", url: "https://www.aladin.finance/", class: "pro-back-site bg-pro-3", description: "Nền tảng kết nối nhà tư vấn và đầu tư chứng khoán" , urlcontent: "aladin.finance"},
    "MY SITE": {maincolor:"whitesmoke", title: "./logo.png", url: "https://kimhoang.vercel.app/", class: "pro-back-site bg-pro-4", description: "Trang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá nhân React ng thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá nhân Reang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá nhân Reang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá nhân Reang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá nhân Reang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá rang thông tin cá nhân Rea", urlcontent: "kimhoang.vercel.app" },
    "NONE": {maincolor:"", title: "", url: "", class: "pro-back-site",  description: "", urlcontent: "" }
};

function useOutsideAlerter(ref: any, setProjectDetail: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
            setProjectDetail(project_detail['NONE']);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

function Project() {
    const [projectDetail, setProjectDetail] = useState(project_detail.NONE);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setProjectDetail);

    useEffect(() => {
        let pro_section = document.getElementById("pro_section_content");
        let pro_section_child = document.getElementById("pro_section_content_child");
        
        if (pro_section){
            if (pro_section_child){
                if (pro_section.offsetHeight < pro_section_child.offsetHeight){
                    pro_section.style.height = 'max-content';
                } else {
                    pro_section.style.height = 'calc(100% - 8rem)';
                }
            }
        }
    }, [projectDetail]);

    const handleMouseEnterControls = (event: React.MouseEvent<HTMLElement>) => {
        var element = event.currentTarget;
        setProjectDetail(project_detail[element.innerHTML]);
        var string_line = '[data-id="' + element.innerHTML + '"]';
        var line = document.querySelector(string_line);
        if (line){
            line.className = 'line-pro2';
        }

        var string_line_text = '[data-text-id="' + element.innerHTML + "_text" + '"]';
        var line_text = document.querySelector(string_line_text);
        if (line_text){
            line_text.className = 'line-text2';
        }
    }

    const handleMouseOutControls = (event: React.MouseEvent<HTMLElement>) => {
        var element = event.currentTarget;

        var string_line = '[data-id="' + element.innerHTML + '"]';
        var line = document.querySelector(string_line);
        if (line){
            line.className = 'line-pro';
        }

        var string_line_text = '[data-text-id="' + element.innerHTML + "_text" + '"]';
        var line_text = document.querySelector(string_line_text);
        if (line_text){
            line_text.className = 'line-text';
        }
    }

    return (
        <>
            <div style={{paddingTop: '1rem'}}>
                {/* <div className="pro-img">
                    <img src="./pot_tree.png" alt="" />
                </div> */}
                <Row ref={wrapperRef}>
                    <Col></Col>
                    <Col className="pro-title">                     
                        {project_name.map((item: any) =>
                            <motion.div
                            initial={{y: '100vh'}}
                            animate={{y: 0}}
                            transition={{duration: item.duration, type: 'spring', delay: 0.3}}
                            exit={{y: '100vh', transition: {duration: item.durationexit}}}
                            key={item.id}>
                                <div className="center-alig">
                                    <motion.p 
                                        whileHover={{scale: 1.2, originX:0, fontWeight: 900}}
                                        style={{width: 'max-content'}}
                                        onMouseEnter={handleMouseEnterControls}
                                        onMouseOut={handleMouseOutControls}
                                        className="pro-name"
                                    >
                                        {item.value}

                                    </motion.p>
                                    <p className="type-pro-text main-font">
                                        {item.type}
                                    </p>
                                </div>
                                <div data-id={item.value} className="line-pro">
                                    <div data-text-id={item.value + "_text"} className="line-text">Let see</div>
                                </div>
                            </motion.div>
                            
                        )}
                    </Col>
                    <motion.div 
                    id='pro_section_content'
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 0.3}}
                    exit={{scale: 0, transition: {duration: 0.3}}}
                    className={projectDetail.class}>
                        <div id="pro_section_content_child">
                            <div style={{textAlign: 'center'}}>
                                {projectDetail.title.length > 0 &&   
                                    <img className="title-pro-detail" src={projectDetail.title} alt="Project logo" /> 
                                }
                            </div>
                            <p style={{textAlign: 'center'}} ><a target="_blank" style={{color:projectDetail.maincolor, borderTop: "solid" + projectDetail.maincolor, borderBottom: "solid" + projectDetail.maincolor}} className="url main-font" href={projectDetail.url}>{projectDetail.urlcontent}</a></p>
                            <p style={{color:projectDetail.maincolor}} className="description">{projectDetail.description}</p>
                        </div>
                    </motion.div>
                </Row>
                
            </div>
        </>
    )
}

export default Project