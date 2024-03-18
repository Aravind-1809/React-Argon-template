import "./index.css"
import {useAnimation, motion} from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const AnimatedText = ({text}) => {

    // const words = text.split(" ");
    const letters = Array.from(text);
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
      });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const container = {
        hidden:{
            opacity:0
        },
        visible: (i = 1) => ({
            opacity:1,
            transition:{
                staggerChildren: 0.08,
                delayChildren: 0.04 * i,
            }
        }),
    }

    const child = {
        hidden:{
            opacity:0,
            y:10,
            transition:{
                ease: [0.2, 0.65, 0.3, 0.9],
                duration: 0.1,
            }
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                damping:10,
                stiffness:100,
                ease: [0.2, 0.65, 0.3, 0.9],
                duration: 0.1,
            }
        }
    }

    return(
        <motion.div style={{ display:"flex", flexWrap:"wrap"}} variants={container} initial="hidden" animate={ctrls}>
            {letters.map((each, index) => {
                return <motion.span ref={ref} aria-hidden="true" key={index} variants={child}>{each === " "? "\u00A0":each}</motion.span>
            })}
        </motion.div>
    )
}

export default AnimatedText