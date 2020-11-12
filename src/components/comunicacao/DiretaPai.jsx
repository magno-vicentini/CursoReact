import React from "react"
import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome = "Geovanne " idade = {20} nerd = {true} ></DiretaFilho>
            <DiretaFilho nome = "Clarissa " idade = {17} nerd = {false} ></DiretaFilho>

        </div>
    )
}