import { BsList } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import "./index.css";
import { motion } from "framer-motion";

const Nav = (props) => {
    const { closeMenu } = props;

    const close = () => {
        closeMenu();
    };

    return (
        <div className="nav-container">
            <div className="first-container">
                <div className="default-container">
                    <span className="span-light">
                        <span className="line">Pages</span> /{" "}
                        <span className="line">Default</span>
                    </span>
                    <span className="span-bold">Default</span>
                </div>
                <BsList className="menu" style={{ strokeWidth: 0.6 }} onClick={close} />
            </div>
            <div className="second-container">
                <div className="input-container">
                    <MdOutlineSearch className="search" />
                    <input className="input" type="text" placeholder="Type here..." />
                </div>
                <IoMdPerson className="icon" style={{ fill: "#ffffff" }} />
                <span className="span-bold up">Sign In</span>
                <motion.div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    whileHover={{ rotate: 180, scale: 1.5 }}
                >
                    <IoMdSettings className="icon" style={{ fill: "#ffffff" }} />
                </motion.div>
                <FaBell className="bell" style={{ fill: "#ffffff" }} />
            </div>
        </div>
    );
};

export default Nav;
