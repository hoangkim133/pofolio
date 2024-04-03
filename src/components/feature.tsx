import { motion, useCycle } from "framer-motion"
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons"
import { useEffect } from "react";

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
    closed: {width: '7.5rem', backgroundColor: "var(--color-navbackground)", boxShadow: "rgb(136, 136, 136) 0px 0px 10px 0px"}
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
    const [volume, toggleVolume] = useCycle(false, true); 
    const [datenight, toggleDateNight] = useCycle(true, false); 

    const muteVolume = () => {
        toggleVolume();
        var music = document.getElementById('music') as HTMLAudioElement;

        if (music){
            if (volume) {
                music.play();
            } else {
                music.pause();
            }
        }
    };

    useEffect(() => {
        var mode = localStorage.getItem("mode");
        if (mode){
            console.log(mode);
            document.body.classList.remove('dark');
        } else {
            console.log(mode);
            document.body.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        if (datenight) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
        localStorage.setItem("mode", "" + datenight);
    }, [datenight]);

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
        <audio id="music" src="./public/canon.mp3" loop>

        </audio>
        <div className="navbar-logo">
            <motion.div
            variants={variants}
            animate={isOpen ? "closed" : "open"}
            className="navbar-fal"
            >
                <motion.div
                variants={variants_icon}
                animate={isOpen ? "open" : "closed"}
                onClick={muteVolume}
                >
                    <Icon.VolumeUpFill size={22} color="black" className={volume ? "hidden" : ""}/>
                    <Icon.VolumeMuteFill size={22} color="black" className={!volume ? "hidden" : ""}/>
                </motion.div>
                <motion.div
                variants={variants_icon}
                animate={isOpen ? "open" : "closed"}
                onClick={() => toggleDateNight()}
                >
                    <Icon.SunFill size={22} color="black" className={!datenight ? "hidden" : ""}/>
                    <Icon.MoonFill size={22} color="black" className={datenight ? "hidden" : ""}/>
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