import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    children?: ReactNode;
    delay?: number
};

function EffectFlyUp({children, delay}: Props) {    
    const location = useLocation();
    const [reset, setReset] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (window.scrollY == 0 && window.scrollX == 0) {
                setReset(true);
            } else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                });
                setReset(true);
            }
        },150)
    }, [location])

    return (
        reset &&  (
            <motion.div
            initial={{opacity: 0, y: 75}}
            transition={{duration: 0.5, delay: delay}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            >
                {children}
            </motion.div>
        )
    )
}

export default EffectFlyUp