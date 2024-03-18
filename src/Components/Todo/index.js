import "./index.css"
import { useState, useEffect } from "react"
import List from "../List"
import AnimatedText from "../AnimatedText"

const data = [
    {id:"chech1", task:"Call with Dave", time:"09:30 AM", check:true},
    {id:"chech2", task:"Brunch Meeting", time:"11:00 AM", check:false},
    {id:"chech3", task:"Argon Dashboard Launch", time:"02:00 PM", check:false},
    {id:"chech4", task:"Winter Hackaton", time:"11:30 AM", check:true},    
]


const Todo = () => {

    const [todo, setTodo] = useState([]);

    const toggleCheck = (id) => {
        setTodo(prevTodo => prevTodo.map(each => {
            if(each.id === id){
                return {...each, check: !each.check};
            }
            return each
        }));
           
    }

    
    useEffect(() => {
        setTodo(data)
    }, []);

    return(
        <div className="similar-container">
            <h1 className="team-head"><AnimatedText text={"To Do List"} /></h1>
            <div className="model-container">
                {todo.map(each => {
                    return <List key={each.id} item={each} toggleCheck={toggleCheck} />
                })}
            </div>
        </div>
    )
}

export default Todo