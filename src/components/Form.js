import React from 'react'

export default function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou");
    }
  return (
    <div>
        <h1> Meu Cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite o seu nome"/>
            </div>
            <div>
                <input type="submit" value="Cadastro"/>
            </div>
        </form>
    </div>
  )
}
