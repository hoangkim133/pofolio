import { motion, useCycle } from "framer-motion"
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons"
import { useState, useEffect, useRef } from "react";
import sound from '/public/canon.mp3'

const variants_x = {
    open: { scale: 1, backgroundColor: "rgba(0, 0, 0, 0)"},
    closed: { scale: 1},
}

const variants_icon = {
    open: { scale: 1},
    closed: { scale: 0},
}

const variants = {
    open: {},
    closed: {width: '7.5rem', boxShadow: "rgb(136, 136, 136) 0px 0px 10px 0px"}
}

const variants_bg = {
    open: {opacity: 0},
    closed: {opacity: 1}
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
    const audioSound = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [volume, toggleVolume] = useState(() => {
        var volume = localStorage.getItem("volume");
        if (volume == null){
            return true;
        } else {
            if (volume == "true"){
                return true;
            } else {
                return false;
            }
        }
    }); 
    const [isDate, toggleIsDate] = useState(() => {
        var mode = localStorage.getItem("mode");
        if (mode == null){
            return true;
        } else {
            if (mode == "true"){
                return true;
            } else {
                return false;
            }
        }
    }); 

    const muteVolume = () => {
        toggleVolume(!volume);
        var music = document.getElementById('music') as HTMLAudioElement;

        if (music){
            if (!volume) {
                music.play();
            } else {
                music.pause();
            }
        }
        localStorage.setItem("volume", "" + !volume);
    };

    const changeDateNightMode = () => {
        toggleIsDate(!isDate);

        if (!isDate) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
        localStorage.setItem("mode", "" + !isDate);
    }

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

    useEffect(() => {
        if (audioSound.current) {
            var elem: HTMLAudioElement = audioSound.current;
            if (volume) {
                elem.play();
            } else {
                elem.pause();
            }
        }
    }, [])

    return (
        <>
        <audio ref={audioSound} id="music" src={sound} loop></audio>

        <div className="navbar-logo">
            <motion.div
            variants={variants}
            animate={isOpen ? "closed" : "open"}
            className="navbar-fal"
            >   
                <motion.div
                className="filter-nav"
                variants={variants_bg}
                animate={isOpen ? "closed" : "open"}
                ></motion.div>
                
                <motion.div
                variants={variants_icon}
                animate={isOpen ? "open" : "closed"}
                onClick={muteVolume}
                >
                    <Icon.VolumeUpFill size={22} color="black" className={volume ? "" : "hidden"}/>
                    <Icon.VolumeMuteFill size={22} color="black" className={volume ? "hidden" : ""}/>
                </motion.div>
                <motion.div
                variants={variants_icon}
                animate={isOpen ? "open" : "closed"}
                onClick={changeDateNightMode}
                >
                    <Icon.SunFill size={22} color="black" className={isDate ? "" : "hidden"}/>
                    <Icon.MoonFill size={22} color="black" className={isDate ? "hidden" : ""}/>
                </motion.div>
                <motion.div 
                animate={isOpen ? "open" : "closed"}
                variants={variants_x}
                className="navbut-col"
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