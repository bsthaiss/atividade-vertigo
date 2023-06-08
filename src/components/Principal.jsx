import Eye from '../assets/eye-off.svg'

export function Principal() {
    return (
        <section>
            <div className="texts">
                <h1>Acesse a plataforma</h1>
                <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </div>

            <form action="">
                <div className="input-box">
                    <label htmlFor="">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" />
                </div>

                <div className="input-box">
                    <label htmlFor="">Senha<a href="#">Esqueceu a senha?</a></label>
                    <input type="password" id="senha" placeholder="Digite sua senha" />
                    <img src={Eye} alt="Mostrar/esconder senha" />
                </div>

                <div className="button">
                    <button type="submit">Entrar</button>
                </div>

                <div className="create-account">
                    <p>Ainda não tem conta? <a href="#" id="crt-account">Inscreva-se</a></p>
                </div>
            </form>
        </section>
    );
}