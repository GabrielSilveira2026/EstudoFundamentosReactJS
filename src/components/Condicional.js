import { useState } from 'react'

export default function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
    }

    function limparEmail(e) {
        setUserEmail("")
    }
 
    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <button onClick={enviarEmail}>Enviar email</button>
            </form>
            {
                userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )
            }
        </div>
    )
}
