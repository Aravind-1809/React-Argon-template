import Member from "../Member";
import "./index.css"
import { useState } from "react"
import $ from "jquery"



const data = [
{id:1, btnId:"abc", image:"https://demos.creative-tim.com/argon-dashboard-chakra-pro/static/media/avatar2.5692c39d.png", name:"Esthera Jackson", status:"Online"},
{id:2, btnId:"efg", image:"https://demos.creative-tim.com/argon-dashboard-chakra-pro/static/media/avatar3.9f646ac5.png", name:"Peter Parker", status:"In meeting"},
{id:3, btnId:"hij", image:"https://demos.creative-tim.com/argon-dashboard-chakra-pro/static/media/avatar4.54d5c1de.png", name:"Jhon Snow", status:"Offline"},
{id:4, btnId:"klm", image:"https://demos.creative-tim.com/argon-dashboard-chakra-pro/static/media/avatar5.d2c5420e.png", name:"Dannerias", status:"Online"},
]




const Team = () => {

    const [isClicked, setClick] = useState(false);
    const [selectedId, setSelectedId] = useState(null)

    const toAdd = (id) => {
        $(`#${id}`).css('background-color', '#ebf8ff')
        $(`#${id}`).css('box-shadow', '0 0 10px #4299e1') 
        setClick(true)
    } 

    const onEnter = (id) => {
        $(`#${id}`).css('background-color', '#ebf8ff')
    }

    const onLeave = (id) => {
        if(isClicked !== true){
            $(`#${id}`).css('background-color', '#ffffff')
        }
    }


    return(
        <div className="similar-container">
            <h1 className="team-head">Team Members</h1>
            <div className="model-container">
                {data.map(each => {
                    return <Member key={each.id} item={each} onEnter={onEnter} onLeave={onLeave} toAdd={toAdd} setClick={setClick} selectedId={selectedId} setSelectedId={setSelectedId} />
                })}
            </div>

        </div>
    )
}

export default Team