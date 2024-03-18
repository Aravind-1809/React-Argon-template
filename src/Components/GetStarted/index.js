import { IoBulb } from "react-icons/io5";
import './index.css'
import AnimatedText from "../AnimatedText";


const GetStarted = () => {

    return(
        <div className="bg-container">
            <div className="content">
                <div className="bulb-container">
                    <IoBulb className="bulb"/>
                </div>
                <h1 className="head"><AnimatedText text={"Get Started With Argon"} /></h1>
                <span className="paragraph"><AnimatedText text={"Start your development process with an innovative admin dashboard!"} /></span>
            </div>
        </div>
    )
}

export default GetStarted