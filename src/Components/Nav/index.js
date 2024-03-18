import { BsList } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { FaBell, FaSignInAlt } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import Tab from "../Tab";

const tabs = [
  {name:"Profile", id:"Profile", icon:<IoMdPerson />, color:"#5d5dff"},
  {name:"Sign In", id:"SignIn", icon:<FaSignInAlt />, color:"#67bb67"},
  {name:"Setings", id:"Setting", icon:<IoMdSettings />, color:"#63a7c7"},
  {name:"Notifications", id:"Notification", icon:<FaBell />, color:"#f56868"},

]

const Nav = (props) => {
    const { closeMenu } = props;

    const [activeTab, setActiveTab] = useState("Profile");

    const close = () => {
        closeMenu();
    };

    const onTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <div className="nav-container">
            <div className="first-container">
                <div className="default-container">
                    <span className="span-light">
                        <span className="line">Pages</span> /{" "}
                        <span className="line">Default</span>
                        <BsList className="menu" style={{ strokeWidth: 0.6}} onClick={close} />
                    </span>
                    <span className="span-bold">Default</span>
                </div>
                <div className="input-container">
                    <MdOutlineSearch className="search" />
                    <input className="input" type="text" placeholder="Type here..." />
                </div>
            </div>
            <div className="second-container">
                  {tabs.map(tab => {
                    return <Tab tab={tab} activeTab={activeTab} onTabClick={onTabClick} /> 
                  })}
            </div>
        </div>
    );
};

export default Nav;
