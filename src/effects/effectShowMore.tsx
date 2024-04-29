import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

type Props = {
    children?: ReactNode;
    height?: string;
};

const variants_click = {
    show: {opacity: 1},
    hidden: {opacity: 0}
}

function EffectShowMore({children, height}: Props) {   
    const [isshow, setIsShow] = useState(false);

    return (
        <>
            <motion.div style={{position: "relative"}}>
                <motion.div
                style={{overflow:"hidden"}}
                animate={isshow ? {maxHeight: "100%"} : {maxHeight: height}}
                >
                    {children}
                </motion.div>
                <motion.div 
                variants={variants_click}
                animate={isshow ? 'hidden' : 'show'}
                onClick={() => setIsShow(true)} className='show-ef'>
                    Show more
                </motion.div>
            </motion.div>
        </>
    )
}

export default EffectShowMore