/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

import { useState } from "react";

const regexNome =
  /^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][a-záéíóúâêîôûãõç]+ [A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][a-záéíóúâêîôûãõç]+$/;
const RegExEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function App() {
  const [data, setData] = useState({
    nome: " ",
    email: "",
    estadoC: "",
    genero: "",
  });

  const handleChange = (e) => {
    const { nome, value } = e.target;

    setData((prev) => ({
      ...prev,
      [nome]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  console.log(data);
  return (
    <div className="bg-gray-300 h-screen pt-10 px-40">
      <main className="w-full flex flex-col	">
        <h1 className="text-3xl text-black font-semibold	my-0 mx-auto">
          Progresso do Cadastro
        </h1>
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl mt-4">
          <div className="h-6 w-full border-b-stone-300 border-solid border rounded-md ">
            <div className={`h-full bg-green-400 w-[25%]`} />
          </div>

          <div className="flex flex-col my-4">
            <label className="mb-1" htmlFor="nome">
              Nome completo
            </label>
            <input
              value={data.nome}
              onChange={handleChange}

              className="border-b-stone-300 border-solid border rounded-md pl-2"
              name="nome"
              type="text"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              onChange={handleChange}
              className="border-b-stone-300 border-solid	border rounded-md pl-2"
              name="email"
              type="email"
            />
          </div>

          <div className="flex flex-col my-4">
            <label>Estado Civil</label>
            <select className="mb-1 border-b-stone-300 border-solid border rounded-md p-1">
              <option value={""}>--Selecione--</option>
              <option value={"Solteiro"}>Solteiro</option>
              <option value={"Casado"}>Casado</option>
            </select>
          </div>

          <div className="flex flex-col my-4">
            <span className="mb-1">Gênero</span>
            <div className="flex gap-3">
              <div className="flex gap-2 justify-center	items-center">
                <input name="genero" type="radio" />
                <label id="masculino" htmlFor="masculino" value="masculino">
                  Masculino
                </label>
              </div>

              <div className="flex gap-2	items-center">
                <input
                  id="femino"
                  name="genero"
                  type="radio"
                  value="feminino"
                />
                <label htmlFor="femino">Feminino</label>
              </div>
            </div>
          </div>

          <button
            className="bg-gray-300 w-full rounded-md p-2 hover:bg-black ease-in duration-200 text-white"
            type="submit"
          >
            Enviar Formulario
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
