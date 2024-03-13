import './index.css'
import { IoWallet, IoCart } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import Nav from '../Nav'
import Card from '../Card';
import GetStarted from '../GetStarted';
import Sales from '../Sales';
import SideBar from '../SideBar';
import Team from '../Team';
import Todo from '../Todo';
import Progress from '../Progress';
import { useState, useEffect } from 'react';
import { CardCarryContainer, GetStartedContainer, TaskContainer } from '../../StyledComponents';
import {motion, useScroll} from "framer-motion"

const data = [
    {title:"TODAY'S MONEY", symbol:"$", rs:53897, profit:"+3.48%", time:"Since last month", icon:<IoWallet className='icon1' />, loss:false},
    {title:"TODAY'S USERS", symbol:"$", rs:3200, profit:"+5.2%", time:"Since last month", icon:<BsGlobe2 className='icon1' />, loss:false},
    {title:"NEW CLIENTS", symbol:"+", rs:2503, profit:"-2.82%", time:"Since last month", icon:<FaFile className='icon1' />, loss:true},
    {title:"TOTAL SALES", symbol:"$", rs:173000, profit:"+8.12%", time:"Since last month", icon:<IoCart className='icon1' />, loss:false},
]


const Home = () => {

    const [isClicked, setClick] = useState(false);
    const [isExpand, setExpand] = useState(true)
    const [isSmall, setSmall] = useState(window.innerWidth < 1200? true:false)
    const [animate, setAnimate] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          if(windowWidth >= 1200){
            setAnimate(false)
            setSmall(false)
          }
          else if(windowWidth < 1200){
            setAnimate(false)
            setSmall(true)
          }
        };
    
        window.addEventListener('resize', handleResize);
    
      }, [windowWidth]);

      const closeMenu = () => {
        setClick(prevClick => !prevClick)
        if(window.innerWidth >= 1200){
            setExpand(prevExpand => !prevExpand)
            setSmall(false)
            setAnimate(false)
        }
        else{
            setExpand(true)
            setSmall(true)
            setAnimate(prevAnimate => !prevAnimate)
        }
    }

    const { scrollYProgress } = useScroll();

    return(
        <div className='home-container'>
            <motion.div className='page-scroll' style={{ scaleX: scrollYProgress, transformOrigin: "left"  }} />
            <div className='blue-container'>
                <SideBar animate={animate} isSmall={isSmall} setExpand={setExpand} isClicked={isClicked} isExpand={isExpand} closeMenu={closeMenu} />
                <Nav closeMenu={closeMenu} />
                <CardCarryContainer isExpand={isExpand}>
                    {data.map(each => {
                        return <Card key={each.title} item={each} />
                    })}
                </CardCarryContainer>
            </div>
            <GetStartedContainer isExpand={isExpand}>
                <GetStarted />
                <Sales />
            </GetStartedContainer>
            <TaskContainer isExpand={isExpand}>
                    <Team />
                    <Todo />
                    <Progress />
            </TaskContainer>
        </div>
    )
}

export default Home