import { Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import parse from "html-react-parser";

const project_name: Array<any> = [
    {'id':0, 'value':'VICK', 'type': 'Service', 'duration': 0.7, 'durationexit': 0.9},
    {'id':1, 'value':'HDCAP', 'type': 'Website', 'duration': 0.9, 'durationexit': 0.7},
    {'id':2, 'value':'ALADIN', 'type': 'Service', 'duration': 1.1, 'durationexit': 0.5},
    {'id':3, 'value':'MY SITE', 'type': 'Branding', 'duration': 1.3, 'durationexit': 0.3},
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
    "VICK": {maincolor:"black", title: "https://vick.vn/static/image/stalk-01.svg", url: "https://vick.vn/", class: "pro-back-site bg-border-50 bg-pro-1 scroll-off", 
    description: 
    `<p>&nbsp; &nbsp; As one of the first companies on the Vietnamese stock market to provide investment consulting/advisory services for individual investors.&nbsp;ViCK helps investors receive trading ideas through analyzed comments and strategies of experts/advisors to best support the investment process.</p>
    <p>&nbsp; &nbsp; Core technology:</p>
    <ul>
        <li>Backend:&nbsp;Java core based on the Netty framework, PostgreSQL</li>
        <li>Frontend: Html5, JavaScript and Bulma Css framework</li>
        <li>Mobile: Flutter</li>
    </ul>
    <p>&nbsp; &nbsp; The system is designed as a multi-service architecture to accommodate future scalability, comprising modules such as consulting articles, news, payments, chat, stock transactions, notifications, statistics, and more. These modules communicate with each other via APIs or Kafka integration.</p>    
    `, urlcontent: "vick.vn" },
    "HDCAP": {maincolor:"black", title: "https://en.hdcap.vn/static/image/icon.svg", url: "https://hdcap.vn/", class: "pro-back-site bg-border-50 bg-pro-2 scroll-off", 
    description: `
    <table border="0" cellpadding="0" cellspacing="0" style="width:100%">
	<tbody>
		<tr>
			<td style="width:48%">
			<h2>Introduce</h2>
			</td>
			<td>&nbsp;</td>
			<td style="width:48%">
			<h2>Tech</h2>
			</td>
		</tr>
		<tr>
			<td>An informative website dedicated to HDCapital fund management company, providing essential details about funds, profits, latest news, insightful articles, and more. This project is meticulously crafted with a focus on SEO optimization, aiming to reach and engage a wider audience.</td>
			<td>&nbsp;</td>
			<td style="float: inline-start;">
			The website boasts a flexible design, featuring an intuitive admin section for seamless content and image configuration. Leveraging the power of Bulma and Bootstrap libraries, the frontend delivers a polished and user-friendly experience.
			</td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

    `
    , urlcontent: "hdcap.vn" },
    "ALADIN": {maincolor:"whitesmoke", title: "https://www.aladin.finance/static/image/aladin.svg", url: "https://www.aladin.finance/", class: "pro-back-site bg-border-50 bg-pro-3 scroll-off", description: 
    `
    <p style="max-width: 30rem; margin: auto"><img align="left" alt="" height="100" src="./trading.png" style="margin-right: 10px" width="100" />Aladin.finance serves as a cutting-edge technology platform catering to the demand for effective, transparent, and credible financial consultants, acknowledged by the investor community. It empowers consultants to share their expertise with investors keen on exploring their investment strategies. Additionally, this platform empowers investors to simulate transactions using real-time stock data. Its core foundation lies in Java programming language, ensuring robustness and reliability.</p>

    ` , 
    urlcontent: "aladin.finance"},
    "MY SITE": {maincolor:"whitesmoke", title: "./logo.png", url: "https://kimhoang.vercel.app/", class: "pro-back-site bg-border-50 bg-pro-4 scroll-off", description: 
    `
    <p style="max-width: 30rem; margin: auto"><img align="left" alt="" height="100" src="./reactlogo.png" style="margin-right: 10px" width="100" />
    This project exclusively focuses on frontend development using React with Typescript language, built with Vite. It leverages various supplementary libraries including Bootstrap 5 for styling, Framer Motion for enhanced effects, and several others.    
    <br>
    P/s: This is my first React project, and I have a lot to do to improve it in the future.</p>
    `
    , urlcontent: "kimhoang.vercel.app" },
    "NONE": {maincolor:"", title: "", url: "", class: "pro-back-site bg-mobile bg-border-50 scroll-off",  description: "", urlcontent: "" }
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
        <div ref={wrapperRef} style={{paddingTop: '1rem'}}>
            <Col sm={{ span: 6, offset: 6 }} md={{ span: 6, offset: 6 }} xl={6} xxl={6} className="pro-title">                     
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
            <Col sm={{span: 12 }} md={{ span: 12 }} xl={6} xxl={6}>
            <motion.div 
            id='pro_section_content'
            initial={{scale: 0, borderRadius: '400px', borderTopRightRadius: '400px'}}
            animate={{scale: 1, borderRadius: 0, borderTopRightRadius: '50px'}}
            transition={{duration: 0.3}}
            exit={{scale: 0, borderRadius: '400px', borderTopRightRadius: '400px', transition: {duration: 0.3}}}
            className={projectDetail.class}>
                <div id="pro_section_content_child">
                    <div style={{textAlign: 'center'}}>
                        {projectDetail.title.length > 0 &&   
                            <img className="title-pro-detail" src={projectDetail.title} alt="Project logo" /> 
                        }
                    </div>
                    <p style={{textAlign: 'center', marginTop: '1rem'}} ><motion.a whileHover={{fontStyle: 'normal'}} target="_blank" style={{color:projectDetail.maincolor, borderTop: "solid" + projectDetail.maincolor, borderBottom: "solid" + projectDetail.maincolor }} className="url main-font" href={projectDetail.url}>{projectDetail.urlcontent}</motion.a></p>
                    <div style={{color:projectDetail.maincolor}} className="description">{parse(projectDetail.description)}</div>
                </div>
            </motion.div>
            </Col>
        </div>
    )
}

export default Project