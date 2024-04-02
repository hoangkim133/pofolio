import { motion, useCycle } from "framer-motion"
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons"


const variants_x = {
    open: { scale: 1},
    closed: { scale: 1, marginRight: '2.7rem'},
}

const variants_icon = {
    open: { scale: 1},
    closed: { scale: 0},
}

const variants = {
    open: {width: '2.5rem'},
    closed: {width: '7.5rem', backgroundColor: "rgb(255 255 255)"}
}

const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
);

function FeatureLogo() {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const activeNav = (event: React.MouseEvent<HTMLElement>) => {
        let navChild = document.getElementsByClassName('navbar-child');
        let pathname = event.currentTarget.getAttribute('href');

        for (var i = 0; i < navChild.length; i++) {
            let child = navChild[i];
            child.classList.remove('is-active');

            if (child.getAttribute('href') == pathname) {
                child.classList.add('is-active');
            }
        }
    };

    return (
        <>
        <div className="navbar-logo">
            <motion.div
            variants={variants}
            animate={isOpen ? "closed" : "open"}
            className="navbar-fal"
            >
                <motion.div
                variants={variants_icon}
                animate={isOpen ? "open" : "closed"}
                >
                    <Icon.MusicNoteBeamed size={22} color="black"/>
                </motion.div>
                <motion.div
                variants={variants_icon}
                animate={isOpen ? "open" : "closed"}
                >
                    <Icon.SunFill size={22} color="black"/>
                </motion.div>
                <motion.div 
                animate={isOpen ? "open" : "closed"}
                variants={variants_x}
                onClick={() => toggleOpen()}>
                <svg 
                width="23" height="23" viewBox="0 0 23 23">
                    <Path
                        variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path
                        variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                    </svg>
                </motion.div>
            </motion.div>
            
            <Link to='/' className="navbar-child" onClick={activeNav}>
                <img 
                src="./logo.png" alt="" style={{height:'2.5rem', marginLeft: '0.5rem'}} />
            </Link>
        </div>
        </>
    )
}

export default FeatureLogo