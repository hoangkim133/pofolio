import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const textVariants = {
    hidden: {
        scaleY:0, originY: 0,
    }, 
    visible: {
        scaleY:1,
        transition: { delay: 0.2, duration: 0.2}
    },
    exit: {
        opacity:0,
        transition: {duration: 0.5}
    }
}

function Home() {
    const changPage = (event: React.MouseEvent<HTMLElement>) => {
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

    const changeClass = () => {
        var wel = document.getElementById("welcome");
        var side = document.getElementById("welcome_side");

        if (wel) {
            if (wel.className == 'stage_inner__centerbox'){
                wel.className = "stage_inner__centerbox2";
            } else {
                wel.className = "stage_inner__centerbox";
            }
        }

        if (side) {
            if (side.className == 'stage_inner__sidebox'){
                side.className = "stage_inner__sidebox2";
            } else {
                side.className = "stage_inner__sidebox";
            }
        }
    };

    return (
        <>
            <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id='welcome' className='stage_inner__centerbox'>
                <div className='main-font'>
                    <p className='special-hello'>HELLO THERE</p> 
                    My name is Hoang and I'm a software developer 
                    <br />
                    Welcome you to my site! 
                    <br/> 
                    Feel free to reach out — I'm all ears!
                </div>   
                <div className='main-font'>
                    <Button onClick={changeClass} className='offset' style={{fontSize:"15px"}}>
                        Explore my site
                    </Button>{' '}
                </div>
            </motion.div>                   
            <div id='welcome_side' className='stage_inner__sidebox'>
                    <Link to="/about" className='text-home-decor' onClick={changPage}>
                        <motion.p
                        whileHover={{textShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}
                        className='home-rdc'
                        exit={{
                            scale:0,
                            transition: {duration: 0.5}
                        }}
                        >
                            ABOUT ME
                        </motion.p>
                    </Link>
                
                    <Link to="/projects" className='text-home-decor' onClick={changPage}>
                        <motion.p
                        whileHover={{textShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}
                        className='home-rdc'
                        exit={{
                            scale:0,
                            transition: {duration: 0.5}
                        }}
                        >PROJECTS</motion.p>
                        
                    </Link>
            
                    <Link to="/contact" className='text-home-decor' onClick={changPage}>
                        <motion.p
                        whileHover={{textShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}
                        className='home-rdc'
                        exit={{
                            scale:0,
                            transition: {duration: 0.5}
                        }}
                        >
                            CONTACT
                        </motion.p>
                    </Link>
                </div>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{delay: 0.2, duration: 0.2}}
            exit={{
                opacity:0,
                transition: {duration: 0.5}
            }}
            id='tree-home'>
                    <img className="img-home-tree" src="./ink.png" alt="" />
            </motion.div>
        </>
        
    )
}

export default Home