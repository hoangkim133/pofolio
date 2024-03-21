import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
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
        <div className="main-font">
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 0.2}}
            id='welcome' className='stage_inner__centerbox'>
                <p>
                    Hello there! 👋 
                    <br/> 
                    I'm a two-year software developer, and I'm thrilled to welcome you to my site! If you're intrigued, let's connect! 
                    <br/> 
                    Feel free to reach out — I'm all ears! 😊
                </p>   
                <Button onClick={changeClass} className='offset' style={{fontSize:"15px"}}>
                    Explore my site
                </Button>{' '}
            </motion.div>   
            <div id='welcome_side' className='stage_inner__sidebox'>
                <Link to="/info" className='text-home-decor'>
                    <motion.p
                    initial={{color: '#93694f'}}
                    whileHover={{color: 'black'}}
                    >
                        INFO
                    </motion.p>
                </Link>
                <p>
                    <Link to="/projects" className='text-home-decor'>
                        PROJECTS
                    </Link>
                </p>
                <p>
                    <Link to="/contact" className='text-home-decor'>
                        CONTACT
                    </Link>
                </p>
            </div>
            <div id='tree-home'>
                <img className="img-home-tree" src="./ink.png" alt="" />
            </div>
            {/* <a href="https://drive.google.com/file/d/1831RxdNq-mOqw4nwqBLAKUaniCUrBLAZ/view?usp=sharing" target="_blank"><Button className='resume main-color'>See my resume</Button>{' '}</a> or&nbsp; */}

            
        </div>
    )
}

export default Home