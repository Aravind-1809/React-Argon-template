import "./index.css"
import { AddBtn, StatusBtn } from "../../StyledComponents"
import $ from "jquery"
import {motion, AnimatePresence} from "framer-motion"
import { IoClose } from "react-icons/io5";

const fadeInUp = require("framer-motion").fadeInUp;
const fadeOutDown = require("framer-motion").fadeOutDown;


const Member = (props) => {

    const {item, toAdd, onEnter, onLeave, setClick, setSelectedId, selectedId}  = props 
    const {id, btnId, name, image, status} = item

    const clickAdd = (event) => {
        toAdd(id);
    }

    const removeStyles = (event) => {
        $(`#${id}`).css('box-shadow', 'none')
        $(`#${id}`).css('background-color', '#ffffff')
        setClick(false);
    }

    const enter = () => {
        onEnter(id)
    }

    const leave = () => {
        onLeave(id)
    }

    const selectId = () => {
        setSelectedId(btnId)
    }

    return(
        <>
        <motion.div layoutId={btnId} className="team-container" style={{ filter: selectedId ? "blur(3px)" : "none" }} onClick={selectId} animate={selectedId === btnId ? fadeInUp : fadeOutDown}>
            <div className="row-cont">
            <img className="team-img" src={image} alt="avatar" />
            <div>
                <span className="name">{name}</span><br/>
                <StatusBtn status={status}>{status}</StatusBtn>
            </div>
            </div>
            <AddBtn id={id} onBlur={removeStyles} onMouseEnter={enter} onMouseLeave={leave}  onClick={clickAdd} >ADD</AddBtn>
        </motion.div>
        <AnimatePresence>
        {selectedId && (
          <motion.div transition={{duration:0.09, ease:"easeInOut"}} style={{position:"absolute", backgroundColor:"#ffffff", width:"100%", marginTop:10}} layoutId={selectedId} >
            <div className="row-cont">
                <img className="team-img" src={image} alt="avatar" />
                <div>
                    <span className="name">{name}</span><br/>
                    <StatusBtn status={status}>{status}</StatusBtn>
                </div>
                <AddBtn style={{marginLeft:"auto"}} id={id} onBlur={removeStyles} onMouseEnter={enter} onMouseLeave={leave}  onClick={clickAdd} >ADD</AddBtn>
                <IoClose  onClick={() => setSelectedId(null)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
    )
}

export default Member