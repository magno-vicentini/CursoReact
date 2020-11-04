import React from "react"
import FamiliaMembro from "./FamiliaMembro"

export default props => {

    return (
        <div>
<FamiliaMembro nome="Magno" sobrenome = {props.sobrenome}/>
<FamiliaMembro nome ="Leandro" {...props} />
<FamiliaMembro nome = "Gabriela" sobrenome = "Vicentini"/>
        </div>
    )
}
