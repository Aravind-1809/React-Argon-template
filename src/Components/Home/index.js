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
import { useState } from 'react';
import { CardCarryContainer, GetStartedContainer, TaskContainer } from '../../StyledComponents';

const data = [
    {title:"TODAY'S MONEY", rs:"$53,897", profit:"+3.48%", time:"Since last month", icon:<IoWallet className='icon1' />, loss:false},
    {title:"TODAY'S USERS", rs:"$3,200", profit:"+5.2%", time:"Since last month", icon:<BsGlobe2 className='icon1' />, loss:false},
    {title:"NEW CLIENTS", rs:"+2,503", profit:"-2.82%", time:"Since last month", icon:<FaFile className='icon1' />, loss:true},
    {title:"TOTAL SALES", rs:"$173,000", profit:"+8.12%", time:"Since last month", icon:<IoCart className='icon1' />, loss:false},
]


const Home = () => {

    const [isClicked, setClick] = useState(false);
    const [isExpand, setExpand] = useState(true)

    return(
        <div className='home-container'>
            <div className='blue-container'>
                <SideBar setExpand={setExpand} isClicked={isClicked} isExpand={isExpand} />
                <Nav setClick={setClick} setExpand={setExpand} />
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