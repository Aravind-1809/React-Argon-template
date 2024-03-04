import './index.css'
import { IoHome } from "react-icons/io5";
import Option from '../Options';
import { IoCart } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";
import SubPage from '../SubPage';
import $ from 'jquery';
import {motion} from "framer-motion"
import { useState } from 'react';
import { Pages, SideContainer, SideMainContainer } from '../../StyledComponents';


const data = [
    {id:"d1", name:"Landing Page", active:false},
    {id:"d2", name:"Default", active:true},
    {id:"d3", name:"Automotive", active:false},
    {id:"d4", name:"Smart Home", active:false},
    {id:"d5", name: "CRM", active:false}
]

const data1 = [
    {id:"p1", icon: <FaFile className='icon3'/>, name:"Pages", subitem:[
        {id:"sp1", name:"Profile", sub:[
            {id:"si1", name:"Profile Overview"},
            {id:"si2", name:"Teams"},
            {id:"si3", name:"All Projects"},
        ]},
        {id:"sp2", name:"Users", sub:[
            {id:"si4", name:"Reports"},
            {id:"si5", name:"New User"},
        ]},
        {id:"sp3", name:"Account", sub:[
            {id:"si6", name:"Settings"},
            {id:"si7", name:"Billing"},
            {id:"si8", name:"Invoice"},
        ]},
        {id:"sp4", name:"Projects", sub:[
            {id:"si9", name:"General"},
            {id:"si10", name:"Timeline"},
        ]},
        {id:"sp5", name:"Pricing Page"},
        {id:"sp6", name:"RTL"},
        {id:"sp7", name:"Widgets"},
        {id:"sp8", name:"Charts"},
        {id:"sp9", name:"Alerts"},
    ]},
    {id:"p2", icon: <BiBarChart className='icon3' />, name:"Applications", subitem:[
        {id:"sp10", name:"Kanban"},
        {id:"sp11", name:"Wizard"},
        {id:"sp12", name:"Data Tables"},
        {id:"sp13", name:"Calendar"},
    ]},
    {id:"p3", icon: <IoCart className='icon3'/>, name:"Ecommerce", subitem:[
        {id:"sp14", name:"Products", sub:[
            {id:"si11", name:"New Product"},
            {id:"si12", name:"Edit Product"},
            {id:"si13", name:"Product Page"},
        ]},
        {id:"sp15", name:"Orders", sub:[
            {id:"si14", name:"Order List"},
            {id:"si15", name:"Order Details"},
        ]}
    ]},
    {id:"p4", icon: <IoMdPerson className='icon3'/>, name:"Authentication", subitem:[
        {id:"sp16", name:"Sign In", sub:[
            {id:"si16", name:"Basic"},
            {id:"si17", name:"Cover"},
            {id:"si18", name:"Illustration"},
        ]},
        {id:"sp17", name:"Sign Up", sub:[
            {id:"si19", name:"Basic"},
            {id:"si20", name:"Cover"},
            {id:"si21", name:"Illustration"},
        ]},
        {id:"sp18", name:"Reset Password"},
        {id:"sp19", name:"Lock"},
        {id:"sp20", name:"2-Step Verification"},
    ]},
]


const SideBar = (props) => {

    const {isClicked, isExpand, setExpand} = props

    const hide = (event) => {
       $("#board").toggleClass("show-d") 
       $("#arrow1").toggleClass("trans-arrow")
    }


    const handleMouseEnter = (event) => {
        let width = $(event.target).width();
        console.log(width)
        if (width < 100){
        $(event.target).attr('id', 'hover')
        setExpand(prevExpand => !prevExpand)
        }
    }

    const handleMouseLeave = (event) => {
        let id = $(event.target).attr('id');
        console.log(id)
        if (id === "hover"){
        setExpand(prevExpand => !prevExpand)
        $(event.target).removeAttr('id')
        }
    }

    const svgVariants = {
        hidden: {rotate: -180},
        visible: {
            rotate: isClicked?0:-180,
            transition: isClicked?{duration: 2}:{}
        }
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: isClicked?1:0,
            pathLength: isClicked?1:0,
            transition: {
                duration: 2,
                ease: "easeInOut",
            }
        }
    }

    const sideVariants = {
        hidden: {
            y:"100vh"
        },
        visible: {
            y:0,
            transition:{
                duration:0.5,
                type:"tween",
            }
        }
    }


    return(
        <SideMainContainer as={motion.div} isExpand={isExpand} variants={sideVariants} initial="hidden" animate="visible" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SideContainer id="side-container" isExpand={isExpand}>
            <div className='brand-container'>
                {!isExpand &&
                <motion.svg variants={svgVariants} style={{marginRight:"25px"}} initial="hidden" animate="visible" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={pathVariants} fill-rule="evenodd" clip-rule="evenodd" d="M4.79 18.336 0 9.869 5.596.023 16.75 0l4.79 8.467 8.935.004L36 18.237l-5.628 9.789-8.904.052-4.495 7.842L5.85 36 .326 26.234l4.464-7.898Zm23.73 6.415 3.763-6.507-3.705-6.548-7.403.072-3.365 5.896 4.025 7.113 6.685-.026Zm-13.4 7.895 3.365-5.896-4.024-7.113-6.686.026-3.763 6.507 3.705 6.548 7.404-.072Zm-.326-16.366 3.763-6.507-3.704-6.549-7.404.072-3.763 6.507 3.705 6.549 7.403-.072Z" fill="#1A202C"></motion.path>
                </motion.svg>}
                {isExpand && 
                <>
                <svg id="argonIcon" width="74" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.72 15.552.465 11.643 3.1 7.1l5.254-.01 2.256 3.908 4.208.002 2.603 4.507-2.651 4.518-4.194.024-2.117 3.62-5.239.036-2.602-4.507 2.103-3.645Zm11.178 2.96 1.772-3.003-1.745-3.022-3.487.033-1.585 2.721 1.896 3.283 3.149-.011Zm-6.312 3.644 1.585-2.72-1.895-3.284-3.15.012-1.772 3.003L4.1 22.19l3.487-.034Zm-.153-7.553 1.772-3.004L7.46 8.577l-3.487.033L2.2 11.613l1.745 3.023 3.488-.034Z" fill="#1A202C"></path>
                    <path id="argon" d="M29.076 10.956c-2.088 0-3.78 1.044-4.356 2.664l2.322 1.116c.288-.882 1.08-1.44 2.034-1.44.9 0 1.512.486 1.512 1.224v.324l-3.078.648c-1.998.414-3.15 1.368-3.15 2.826 0 1.638 1.404 2.898 3.636 2.898 1.134 0 2.034-.342 2.772-1.116v.9h2.52v-6.48c0-2.106-1.71-3.564-4.212-3.564Zm-.666 8.28c-.774 0-1.26-.36-1.26-.954 0-.45.288-.792.846-.918l2.592-.576v.468c0 1.098-.954 1.98-2.178 1.98Zm11.14-8.172c-1.206 0-2.16.36-2.664 1.584v-1.476h-2.52V21h2.7v-5.292c0-1.458.9-2.304 2.214-2.304h1.296v-2.34H39.55Zm9.023.108v1.044c-.684-.792-1.692-1.26-2.97-1.26-2.502 0-4.842 1.782-4.842 4.752 0 2.898 2.232 4.806 4.896 4.806 1.098 0 2.052-.342 2.736-.99v.954c0 1.278-1.008 2.088-2.358 2.088-1.188 0-2.016-.63-2.322-1.692l-2.304 1.134c.576 1.8 2.376 2.988 4.626 2.988 2.736 0 5.058-1.764 5.058-4.518v-9.306h-2.52ZM46 18.066c-1.386 0-2.448-.954-2.448-2.322 0-1.404 1.098-2.358 2.448-2.358 1.35 0 2.394.954 2.394 2.358 0 1.368-1.008 2.322-2.394 2.322Zm11.242 3.15c2.916 0 5.256-2.16 5.256-5.13 0-2.97-2.34-5.13-5.256-5.13-2.916 0-5.256 2.16-5.256 5.13 0 2.97 2.34 5.13 5.256 5.13Zm0-2.43c-1.476 0-2.466-1.116-2.466-2.7 0-1.566.99-2.7 2.466-2.7 1.476 0 2.466 1.134 2.466 2.7 0 1.584-.99 2.7-2.466 2.7Zm11.43-7.83c-1.242 0-2.25.45-2.754 1.404v-1.188h-2.52V21h2.7v-5.742c0-1.134.739-1.872 1.8-1.872 1.063 0 1.8.738 1.8 1.872V21h2.7v-6.318c0-2.232-1.512-3.726-3.726-3.726Z" fill="#1A202C"></path>
                </svg>
                <span id="bar" className='bar'>|</span>
                <svg id="chakra" width="82" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.92 9.422c1.448 0 2.093.933 2.308 1.77l2.034-.74c-.391-1.517-1.8-3.111-4.36-3.111-2.739 0-4.87 2.1-4.87 5.017 0 2.878 2.131 5.037 4.928 5.037 2.503 0 3.93-1.614 4.38-3.092l-1.994-.72c-.215.72-.9 1.75-2.386 1.75-1.428 0-2.66-1.069-2.66-2.975 0-1.906 1.232-2.936 2.62-2.936Zm7.92 2.119c.04-1.205.724-2.139 1.976-2.139 1.427 0 1.956.934 1.956 2.1v5.601h2.268v-5.99c0-2.08-1.134-3.753-3.48-3.753-.998 0-2.074.35-2.72 1.186V3.023h-2.268v14.08h2.269v-5.562Zm7.593 2.995c0 1.498 1.232 2.859 3.226 2.859 1.545 0 2.484-.778 2.934-1.497 0 .758.078 1.147.097 1.205h2.112c-.02-.097-.117-.66-.117-1.517V10.88c0-1.886-1.115-3.54-4.048-3.54-2.347 0-3.833 1.46-4.009 3.093l2.073.467c.098-.953.763-1.712 1.956-1.712 1.251 0 1.799.642 1.799 1.44 0 .33-.157.602-.704.68l-2.445.37c-1.623.233-2.874 1.166-2.874 2.858Zm3.656 1.09c-.9 0-1.388-.584-1.388-1.226 0-.778.567-1.167 1.271-1.283l2.484-.37v.428c0 1.847-1.096 2.45-2.367 2.45Zm15.473-7.994H63.55l-3.656 3.832v-8.44h-2.25v14.08h2.25v-2.645l1.173-1.226 2.796 3.87h2.777l-3.99-5.464 3.912-4.007Zm6.511-.058a3.265 3.265 0 0 0-.606-.058c-1.252 0-2.308.603-2.758 1.633V7.632H67.5v9.471h2.269v-4.512c0-1.77.802-2.78 2.562-2.78.234 0 .489.019.743.058V7.574Zm.544 6.962c0 1.498 1.232 2.859 3.226 2.859 1.545 0 2.484-.778 2.934-1.497 0 .758.078 1.147.097 1.205h2.112c-.02-.097-.117-.66-.117-1.517V10.88c0-1.886-1.115-3.54-4.048-3.54-2.347 0-3.833 1.46-4.009 3.093l2.073.467c.098-.953.763-1.712 1.956-1.712 1.251 0 1.799.642 1.799 1.44 0 .33-.157.602-.704.68l-2.445.37c-1.623.233-2.874 1.166-2.874 2.858Zm3.656 1.09c-.899 0-1.388-.584-1.388-1.226 0-.778.567-1.167 1.271-1.283l2.484-.37v.428c0 1.847-1.095 2.45-2.367 2.45Z" fill="#374152"></path><path d="M21.116 10.5C21.116 4.701 16.39 0 10.558 0 4.727 0 0 4.701 0 10.5S4.727 21 10.558 21c5.831 0 10.558-4.701 10.558-10.5Z" fill="url(#Group__a)"></path><path d="m5.715 10.948 7.197-7.108c.134-.133.35.029.26.194l-2.679 4.883c-.06.109.02.242.145.242h4.629c.149 0 .221.181.112.282l-8.112 7.53c-.145.134-.362-.056-.245-.216l3.84-5.268a.163.163 0 0 0-.133-.26H5.83a.163.163 0 0 1-.116-.279Z" fill="#fff"></path><defs><linearGradient id="Group__a" x1="10.558" y1="0" x2="10.558" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#7BCBD4"></stop><stop offset="1" stop-color="#29C6B7"></stop></linearGradient></defs></svg>
                </>
                }
            </div>
            <hr id="underline" className='line1' />

            <div className='dashboard-container' onClick={hide}>
                <div className='inside-container'>
                    <div className='home-icon-container'>
                        <IoHome className='home-icon' />
                    </div>
                    {isExpand && <span id="dash" className='dash'>Dashboard</span>}
                </div>
                {isExpand && <svg id='arrow1' className='arrow' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>}
                </div>
            <ul id="board" className='dashboard-list-1'>
            {data.map(each => {
                return <Option isExpand={isExpand} key={each.name} item={each}/>
            })}
            </ul>
            <Pages isExpand={isExpand}>PAGES</Pages>
            <ul className='dashboard-list'>
                {data1.map(each => {
                    return <SubPage isExpand={isExpand} key={each.name} item={each} />
                })}

            </ul>
            {isExpand && 
            <div id="need" className='need-container'>
                <img src="https://demos.creative-tim.com/argon-dashboard-chakra-pro/static/media/SidebarHelpImage.b9901216.png" alt="file" className='file-img' />
                <span className='dash'>Need help?</span>
                <p className='small-para'>Please check our docs.</p>
                <button type="button" className='doc-btn'>DOCUMENTATION</button>
            </div>}
        </SideContainer>
        </SideMainContainer>
    )
}

export default SideBar