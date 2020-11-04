import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "estudar mais";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota {notaInt} e foi {status}!{" "}
      </p>
    </div>
  );
}
