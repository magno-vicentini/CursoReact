import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      {/*<If test={usuario && usuario.nome}>
        Seja Bem Viado <strong>{usuario.nome}</strong>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja Bem Viado <strong>Padrão</strong>!
  </If>*/}

      <If test={usuario && usuario.nome}>
        Seja Bem Viado <strong>{usuario.nome}</strong>!
        <Else>
          Seja Bem Viado <strong>Padrão</strong>!
        </Else>
      </If>
    </div>
  );
};
