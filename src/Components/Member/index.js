import "./index.css"
import { AddBtn, StatusBtn } from "../../StyledComponents"
import $ from "jquery"


const Member = (props) => {

    const {item, toAdd, onEnter, onLeave, setClick}  = props 
    const {id, name, image, status} = item

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

    return(
        <div className="team-container">
            <div className="row-cont">
            <img className="team-img" src={image} alt="avatar" />
            <div>
                <span className="name">{name}</span><br/>
                <StatusBtn status={status}>{status}</StatusBtn>
            </div>
            </div>
            <AddBtn id={id} onBlur={removeStyles} onMouseEnter={enter} onMouseLeave={leave}  onClick={clickAdd} >ADD</AddBtn>
        </div>
    )
}

export default Member