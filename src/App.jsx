import './App.css'
import React from "react";

import Familia from "./components/basics/Familia"
import Card from "./components/Layout/Card";
import Primeiro from "./components/basics/Primeiro";
import Aleatorio from "./components/basics/Aleatorio";
import ComParametro from "./components/basics/ComParametro";
import Fragmentos from "./components/basics/Fragmentos";

export default () => (
    <div className="App">
      <h1> Fundamentos React</h1>

      <div className='Cards'>
      <Card titulo="#05 - Componente com Filhos" color=" #BCCF02">
        <Familia sobrenome= "Vicentini"/>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color=" #FA6900">
        <Aleatorio />
      </Card>
      <Card titulo="#03 - Fragmentos" color="#E94C6F">
        <Fragmentos />
      </Card>
      <Card titulo="#02 - Com Parametro" color=" #5A6A62">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Magno"
          nota={10}
          ></ComParametro>
      </Card>
      <Card titulo="#01Exemplo de Card" color="#3A9AD9">
        <Primeiro></Primeiro>
      </Card>
          
       </div>
    </div>
  );

