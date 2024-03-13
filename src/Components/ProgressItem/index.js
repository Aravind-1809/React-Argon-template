import "./index.css"
import { Reorder} from "framer-motion"
import { ColorDiv } from "../../StyledComponents"


const ProgressItem = (props) => {
    const {item} = props

    return(
        <>
        <Reorder.Item initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{duration:0.15} }} exit={{ opacity: 0, transition:{duration:0.3} }} id={item.id} value={item}>
            <div className="progress-container">
                <svg viewBox="0 0 20 20" className="team-svg">{item.image}</svg>
                <div className="custom-container">
                    <span className="name">{item.name}</span><br/>
                    <div className="line-div">
                        <ColorDiv color={item.color} percentage={item.percentage }></ColorDiv>
                    </div>
                </div>
            </div>
        </Reorder.Item>
        <hr className="line1"></hr>
        </>
    )
}

export default ProgressItem