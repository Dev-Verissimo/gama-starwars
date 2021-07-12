import errorDart from "../../../assets/images/elements/errorDart.png";

let Error404 = {
  is_private: false,
  render: async () => {
    let view = `${error}`;
    return view;
  },

  after_render: () => {
    console.log("Try another one... :)");
  },
};
let error = `
<div class="error-default">
    <div class="container">
        <h1>ERRO 404!</h1>
        <a href="http://localhost:8080/">
            <img src="${errorDart}" alt="Vader-error" id="vader-error"/>
        </a>
        <h2>CARO PADAWAN, ESTE CONTEÚDO NÃO EXISTE</h2>
        <h3>CLIQUE NO VADER E TENTE NOVAMENTE</h3>
    </div<
</div>
`;

export default Error404;
