import "./index.css"
import { Reorder} from "framer-motion"
import { useState } from "react"
import ProgressItem from "../ProgressItem"
import AnimatedText from "../AnimatedText"


const data = [
    {id:"prog1", image:<g clip-path="url(#clip0)"><path d="M20.26 10.42l-8.863-8.93-.86-.865-6.67 6.722L.814 10.42a.827.827 0 000 1.162l6.096 6.14 3.627 3.654 6.67-6.722.105-.104 2.947-2.964a.824.824 0 000-1.166zm-9.722 3.649L7.493 11l3.045-3.068L13.582 11l-3.044 3.068z" fill="#2684FF"></path><path d="M10.537 7.932a5.184 5.184 0 01-1.502-3.637A5.185 5.185 0 0110.515.65L3.852 7.36l3.626 3.654 3.06-3.082z" fill="url(#paint0_linear)"></path><path d="M13.59 10.992l-3.053 3.076a5.186 5.186 0 011.502 3.653c0 1.37-.54 2.683-1.502 3.652l6.682-6.728-3.63-3.653z" fill="url(#paint1_linear)"></path></g>, name:"React Material Dashboard", percentage:"70%", color:"#3182ce"},
    {id:"prog2", image:<g clip-path="url(#clip0)"><path d="M4.042 0h12.916A3.539 3.539 0 0120.5 3.542v12.416a3.539 3.539 0 01-3.542 3.542H4.042A3.539 3.539 0 01.5 15.958V3.542A3.539 3.539 0 014.042 0z" fill="#470137"></path><path d="M11.017 5.124l-2.5 4.125 2.666 4.375a.143.143 0 01.017.1c-.008.034-.042.009-.092.017H9.2c-.133 0-.225-.008-.283-.092-.175-.35-.359-.691-.534-1.041a33.608 33.608 0 00-.566-1.05c-.2-.359-.4-.717-.6-1.084H7.2c-.175.359-.367.717-.558 1.075-.192.359-.384.717-.567 1.067-.192.35-.383.708-.575 1.05-.033.083-.1.092-.192.092H3.475c-.033 0-.058.016-.058-.025a.116.116 0 01.016-.092l2.592-4.25L3.5 5.116c-.025-.033-.033-.067-.017-.083.017-.025.05-.034.084-.034h1.891c.042 0 .084.009.117.017a.236.236 0 01.083.075c.159.358.342.717.534 1.075.2.358.391.708.6 1.058.2.35.383.7.558 1.059h.017c.175-.367.358-.725.541-1.075.184-.35.375-.7.567-1.05.192-.35.375-.709.558-1.05.009-.034.025-.067.05-.084a.159.159 0 01.109-.016h1.758a.077.077 0 01.091.058c.009.008-.008.042-.024.058zM14.866 13.917a4.144 4.144 0 01-1.791-.375 2.906 2.906 0 01-1.259-1.134c-.308-.508-.458-1.141-.458-1.9a3.423 3.423 0 011.783-3.05c.584-.325 1.284-.483 2.109-.483.041 0 .1 0 .175.008.075.009.158.009.258.017V4.367c0-.059.025-.092.083-.092h1.692c.042-.008.075.025.083.058v7.95c0 .15.009.317.017.5.017.175.025.342.033.484 0 .058-.025.108-.083.133a6.365 6.365 0 01-1.358.4 7.35 7.35 0 01-1.284.117zm.817-1.667V8.583c-.075-.016-.15-.033-.225-.041-.092-.009-.183-.017-.275-.017-.325 0-.65.067-.942.217-.283.141-.525.35-.708.616-.183.267-.275.625-.275 1.059-.008.291.042.583.142.858.083.225.208.425.375.592.158.15.35.266.566.333.225.075.459.108.692.108.125 0 .242-.008.35-.016a.73.73 0 00.3-.042z" fill="#FF61F6"></path></g>, name:"Argon Design System", percentage:"40%", color:"#d53f8c"},
    {id:"prog3", image:<g clip-path="url(#clip0)"><path d="M10.5 0C4.977 0 .5 4.477.5 10s4.477 10 10 10 10-4.477 10-10c0-5.522-4.477-10-10-10zm4.586 14.422a.623.623 0 01-.857.208c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 11-.277-1.216c3.808-.87 7.076-.495 9.712 1.115.294.181.387.564.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.786-2.13-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.569 11.233 1.329a.78.78 0 01.258 1.072zm.106-2.835C13.19 6.95 7.875 6.775 4.797 7.708a.935.935 0 11-.543-1.79c3.533-1.072 9.404-.865 13.115 1.338a.935.935 0 01-.954 1.609z" fill="#2EBD59"></path></g>, name:"VueJs Now UI Kit PRO", percentage:"70%", color:"#38a169"},
    {id:"prog4", image:<g clip-path="url(#clip0)" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.832.5c-1.105 0-2 .919-1.999 2.05 0 1.13.895 2.048 2 2.05h2V2.55c.001-1.13-.894-2.048-2-2.05zm0 5.467H2.5c-1.106 0-2.001.918-2 2.05-.002 1.13.894 2.048 2 2.05h5.332c1.106-.001 2.002-.919 2-2.05.002-1.132-.894-2.05-2-2.05z" fill="#36C5F0"></path><path d="M20.5 8.016c0-1.13-.895-2.048-2-2.05-1.106.002-2.002.92-2 2.05v2.05h2c1.105 0 2-.918 2-2.05zm-5.334 0V2.55c.001-1.13-.893-2.048-2-2.05-1.105 0-2 .919-2 2.05v5.466c-.001 1.131.894 2.049 2 2.05 1.106 0 2.001-.918 2-2.05z" fill="#2EB67D"></path><path d="M13.166 21c1.106 0 2.001-.919 2-2.05.001-1.13-.894-2.048-2-2.05h-2v2.05c-.001 1.13.894 2.048 2 2.05zm0-5.467h5.333c1.106-.001 2.002-.92 2-2.05.002-1.131-.893-2.049-1.999-2.05h-5.333c-1.106 0-2.001.918-2 2.05-.001 1.13.893 2.049 1.999 2.05z" fill="#ECB22E"></path><path d="M.5 13.483c-.001 1.13.895 2.049 2 2.05 1.106-.001 2.001-.92 2-2.05v-2.05h-2c-1.105.001-2.001.919-2 2.05zm5.333 0v5.467c-.001 1.13.894 2.048 2 2.05 1.105 0 2-.919 2-2.05v-5.465c.002-1.131-.894-2.05-2-2.05-1.106 0-2 .917-2 2.048z" fill="#E01E5A"></path></g>, name:"Soft UI Dashboard", percentage:"70%", color:"#805ad5"},
]


const Progress = () => {

    const [items, setItems] = useState(data)

    return(
        <div className="similar-container">
            <h1 className="team-head"><AnimatedText text={"Progress Track"} /></h1>
            <div className="model-container">
                <Reorder.Group style={{listStyleType:"none", paddingLeft:0, width:"100%"}} axis="y" values={items} onReorder={setItems}>
                    {
                        items.map(each => {
                            return <ProgressItem key={each.id} item={each} />
                        })
                    }
                </Reorder.Group>
            </div>

        </div>
    )
}

export default Progress