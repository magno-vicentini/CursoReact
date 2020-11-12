import "./TabelaProdutos.css"
import React from 'react';
import produtos from "../../data/produtos";


export default (props) => {

    function getlinhas() {
        return produtos.map((produtos, i) => {
            return (
                <tr key = {produtos.id} className={i % 2 === 0 ? "Par" : "Impar"}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R$ {produtos.preço}</td>
                </tr>
            )
        })
    }
return (
    <div className="TabelaProdutos">
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {getlinhas()}
            </tbody>

        </table>
    </div>
)

}