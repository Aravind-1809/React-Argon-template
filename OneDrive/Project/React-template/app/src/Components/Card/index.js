import { IoWallet } from "react-icons/io5";
import { SpanEl } from "../../StyledComponents";

import './index.css'

const Card = (props) => {

    const {item} = props
    const {title, rs, profit, loss, time, icon} = item

    return (
        <div className="card-container">
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
        </div>
    )
}


export default Card