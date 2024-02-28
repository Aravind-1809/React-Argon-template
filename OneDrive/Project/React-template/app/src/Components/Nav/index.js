import { BsList } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import './index.css'
import $ from 'jquery'

const Nav = () => {

    const closeMenu = () => {
        $(".side-main-container").toggleClass("cont-width")
        $(".side-container").toggleClass("cont-marg")
        $("#argonIcon").toggleClass("hide-brand")
        $("#argonIcon1").toggle()
        $("#underline").toggleClass("remove-marg")
        $("#bar").toggleClass("hide-brand")
        $("#chakra").toggleClass("hide-brand")
        $("#argon").toggleClass("hide-brand")
        $("#need").toggleClass("hide-brand")
        $("#dash").toggleClass("hide-brand")
        $("#arrow1").toggleClass("hide-brand")
        $("#Pages").toggleClass("hide-brand")
        $("#Applications").toggleClass("hide-brand")
        $("#Ecommerce").toggleClass("hide-brand")
        $("#Authentication").toggleClass("hide-brand")
        $("#Pages-arrow").toggleClass("hide-brand")
        $("#Applications-arrow").toggleClass("hide-brand")
        $("#Ecommerce-arrow").toggleClass("hide-brand")
        $("#Authentication-arrow").toggleClass("hide-brand")
        $("#arrow2").toggleClass("hide-brand")
        $("#pages").toggleClass("spl-font")
        $(".card-carry-container").toggleClass("increase-width")
        $(".get-started-container").toggleClass("increase-width")
        $("#dot").toggleClass("hide-brand")
        $("#LandingPage").toggleClass("hide-brand")
        $("#Default").toggleClass("hide-brand")
        $("#Automotive").toggleClass("hide-brand")
        $("#SmartHome").toggleClass("hide-brand")
        $("#CRM").toggleClass("hide-brand")
        $("#LandingPage1").toggle()
        $("#Default1").toggle()
        $("#Automotive1").toggle()
        $("#SmartHome1").toggle()
        $("#CRM1").toggle()
        $(".task-container").toggleClass("increase-width")
    }

    return(
        <div className="nav-container">
            <div className="first-container">
                <div className="default-container">
                    <span className="span-light"><span  className="line">Pages</span> / <span className="line">Default</span></span>
                    <span className="span-bold">Default</span>
                </div>
                <BsList className="menu" style={{strokeWidth:0.6}} onClick={closeMenu} />
            </div>
            <div className="second-container">
                <div className="input-container">
                    <MdOutlineSearch className="search" />
                    <input className="input" type="text" placeholder="Type here..." />
                </div>
                <IoMdPerson className="icon" style={{fill:'#ffffff'}} />
                <span className="span-bold up">Sign In</span>
                <IoMdSettings className="icon" style={{fill:'#ffffff'}} />
                <FaBell className="bell" style={{fill:'#ffffff'}} />
            </div>
        </div>
    )
}

export default Nav 