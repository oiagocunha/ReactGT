import BotaoDinamico from "../components/BotaoDinamico/BotaoDinamico"

const Login = () => {
    return(
        <div>
            <h1>
                Seja bem vindo!
            </h1>
            <p>
                Entre ou Cadastre-se agora no nosso site!
            </p>
            <BotaoDinamico cor='green' fundo='white' >Entrar</BotaoDinamico>
            <BotaoDinamico cor='blue' fundo='white' >Cadastrar</BotaoDinamico>
        </div>
    )
}

export default Login