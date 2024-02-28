import { Checkbox } from "../../StyledComponents"
import "./index.css"

const List = (props) => {

    const {item, toggleCheck} = props 
    const {task, time, check, id} = item

    const checking = (event) => {
        toggleCheck(id)
    }

    return(
        <>
        <div className="team-container">
            <div>
                <span className="name">{task}</span><br/>
                <span className="para">{time}</span>
            </div>
            <Checkbox active={check} onChange={checking} id={id} checked={check} type="checkbox"></Checkbox>
        </div>
        <hr className="line1"></hr>
        </>
    )
}

export default List