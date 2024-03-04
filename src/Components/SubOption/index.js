import './index.css'


const SubOption = (props) => {

    const {item, isExpand} = props 
    const {name} = item

    return(
        <li className='dash-list2'>
            {isExpand && name}
            {!isExpand && name.slice(0, 1)}
        </li>
    )
}

export default SubOption