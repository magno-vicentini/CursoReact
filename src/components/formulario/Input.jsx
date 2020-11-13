import "./Input.css"
import React, { useState } from 'react'

export default props => {
    const [valor, setValor] = useState("Inicial")

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
           <input valor={valor} onChange = {quandoMudar}></input>
           <input valor={valor} readOnly></input>
           <input valor={undefined}></input>

            </div>
        </div>
    )

}