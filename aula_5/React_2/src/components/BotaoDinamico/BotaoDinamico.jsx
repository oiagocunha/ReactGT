function BotaoDinamico (props) {
    const estiloBotao = {
        backgroundColor: props.cor,
        color: props.fundo,
        padding: '15px',
        margin: '25px',
        border: 'none',
        borderRadius: '15px',
        cursos: 'pointer',
        fontSize: '16px'
    }

    return <button style={estiloBotao} >
        {props.children}
        </button>
}

export default BotaoDinamico