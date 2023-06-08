import { useState } from 'react'
import Eye from '../assets/eye-off.svg'

export function Principal() {
    const [email, setEmail] = useState(" ")
    const [senha, setSenha] = useState(" ")

    function handleMostrar() {
        alert(`
            E-mail digitado: ${email}
            Senha digitada: ${senha}
        `)
    }

    return (
        <section>
            <div className="texts">
                <h1>Acesse a plataforma</h1>
                <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </div>

            <form action="">
                <div className="input-box">
                    <label htmlFor="">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="input-box">
                    <label htmlFor="">Senha<a href="#">Esqueceu a senha?</a></label>
                    <input type="password" id="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>
                    <img src={Eye} alt="Mostrar/esconder senha" />
                </div>

                <div className="button">
                    <button type="submit" onClick={handleMostrar}>Entrar</button>
                </div>

                <div className="create-account">
                    <p>Ainda não tem conta? <a href="#" id="crt-account">Inscreva-se</a></p>
                </div>
            </form>
        </section>
    );
}