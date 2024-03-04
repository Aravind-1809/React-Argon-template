import './index.css'
import SubOption from '../SubOption'
import $ from 'jquery'



const Option = (props) => {

    const {item, isExpand} = props
    const {active, name, id} = item
    let arrow;
    let sub;

    if(item.sub){
        sub = item.sub 
        arrow = sub?<><svg id={`${name}-arrow`} className='arrow' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></>:<></>
    }

    let style = active? 'round':'normal-round'
    let cls = active? 'active-dash-list':'dash-list'

    const toggle = (event) => {
        $(event.target).next(".pages-list").toggle()
        $(event.target).find(".arrow").toggleClass("trans-arrow")
    }

    
    return(
        <>
        <li id={id} className={cls} onClick={toggle}>
            {isExpand &&
            <div id={name.replace(" ", "")}>
            <svg  stroke="#3182ce" fill="#3182ce" stroke-width="0" viewBox="0 0 512 512" focusable="false" class={style} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
            {name}
            </div>}
            {isExpand && arrow}
            {!isExpand && <span id={`${name.replace(" ", "")}1`} className="initial">{name.slice(0, 1)}</span>}
        </li>
        {sub? <><ul className='pages-list'>
            {sub.map(each => {
                return <SubOption isExpand={isExpand} key={each.name} item={each}/> 
            })}
            </ul></>:<></>}
        </>
        ) 
    
}


export default Option