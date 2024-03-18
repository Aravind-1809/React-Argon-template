import { IconContainer } from "../../StyledComponents"
import "./index.css"
import {motion} from "framer-motion"

const Tab = (props) => {

    const {tab, onTabClick, activeTab} = props 
    const {name, id, icon, color} = tab 

    const tabClick = () => {
        onTabClick(id)
    }

    const tabVariant = {
        active: {
          width: "55%",
          transition: {
            type: "tween",
            duration: 0.2,
          }
        },
        inactive: {
          width: "15%",
          transition: {
            type: "tween",
            duration: 0.2
          }
        }
      };

      const tabTextVariant = {
        active: {
          opacity: 1,
          x: 0,
          display: "block",
          transition: {
            type: "tween",
            duration: 0.3,
            delay: 0.2
          }
        },
        inactive: {
          opacity: 0,
          x: -30,
          transition: {
            type: "tween",
            duration: 0.01,
          },
          transitionEnd: { display: "none" }
        }
      };

    return (
        <motion.div variants={tabVariant} animate={activeTab === id? "active":"inactive"} style={{width:"15%"}} className={activeTab === id && "active-tab"}>
            <IconContainer style={{color:activeTab === id && color}} as={motion.div} className={activeTab === id? "active-icon":"tab-icon"}  onClick={tabClick} >{icon}</IconContainer>
            <motion.span style={{color:color}} variants={tabTextVariant} className={activeTab === id? "tab-name": "off"}>{name}</motion.span>
        </motion.div>
    )
}

export default Tab