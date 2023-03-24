import { useState } from 'react'

export default function Form() {
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()


    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(nome, senha);
        console.log("Cadastrou");
    }

    return (
        <div>
            <h1> Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        id="nome" 
                        type="text"
                        placeholder="Digite o seu nome" 
                        onChange={(e) =>{setNome(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                        id="password" 
                        type="password"
                        placeholder="Digite a senha" 
                        onChange={(e) =>{setNome(e.target.value)}}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastro" />
                </div>
            </form>
        </div>
    )
}
