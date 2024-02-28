import './index.css'
import "../SideBar/index.css"
import Option from '../Options'
import $ from 'jquery'

const SubPage = (props) => {

    const {item} = props 
    const {name, icon, subitem} = item

    const toggle = (event) => {
        console.log(event.target);
        $(event.target).next(".pages-list").toggle()
        $(event.target).find(".arrow").toggleClass("trans-arrow")
    }

    return(
        <>
        <li className='sub-page-container' onClick={toggle}>
            <div style={{pointerEvents: 'none'}}>
                {icon}
                <span id={name} className='page-name'>{name}</span>
            </div>
            <svg style={{pointerEvents: 'none'}} id={`${name}-arrow`} className='arrow' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
        </li>
        <ul className='pages-list'>
        {subitem.map(each => {
            return <Option key={each.name} item={each} ative={false}/>
        })}
        </ul>
        </>

    )
}

export default SubPage