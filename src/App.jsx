import "./App.css";
import React from "react";

import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Familia from "./components/basics/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Card from "./components/Layout/Card";
import Primeiro from "./components/basics/Primeiro";
import Aleatorio from "./components/basics/Aleatorio";
import ComParametro from "./components/basics/ComParametro";
import Fragmentos from "./components/basics/Fragmentos";

export default () => (
  <div className="App">
    <h1> Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#10 - Comunicação Indireta" color=" #FE9 ">
       <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09 - Comunicação Direta" color=" #FE96 ">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 - Renderização Condicional" color=" #FE9601 ">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: 'Biruleibe' }}></UsuarioInfo>
       {/* <UsuarioInfo usuario={{ email: 'Bir@boludo.com' }}></UsuarioInfo>*/}
      </Card>
      <Card titulo="#07 - Desafio Repetição" color=" #333300 ">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color=" #982395">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color=" #BCCF02">
        <Familia sobrenome="Vicentini">
          <FamiliaMembro nome="Magno" />
          <FamiliaMembro nome="Leandro" />
          <FamiliaMembro nome="Gabriela" />
        </Familia>
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
