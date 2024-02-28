import './index.css'


const SubOption = (props) => {

    const {item} = props 
    const {name} = item

    return(
        <li className='dash-list2'>
            {name}
        </li>
    )
}

export default SubOption