import { SpanEl } from "../../StyledComponents";

import './index.css'
import {motion} from "framer-motion"

const Card = (props) => {

    const {item} = props
    const {title, rs, profit, loss, time, icon} = item


    const cardVariants = {
        hidden:{
            x:"100vw",
        },
        visible:{
            x:0,
            transition:{
                type:"spring",
                ease:"easeInOut",
                duration:0.8,
                bounce:0.4
            }
        }
    }


    return (
        <motion.div className="card-container" variants={cardVariants} initial="hidden" animate="visible" whileHover={{scale:1.1,
            transition:{
                type:"spring",
                duration:0.5,
                ease:"easeInOut",
                bounce:0.8
            }}}>
            <div className="card">
                <div className="upper-container">
                    <span className="title">{title}</span>
                    <span className="price">{rs}</span>
                </div>
                <div className="icon-container">
                    {icon}
                </div>
            </div>
            <p className="para"><SpanEl loss={loss}>{profit}</SpanEl>{time}</p>
        </motion.div>
    )
}


export default Card