import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <span>Loja</span>
                <nav>
                    <a href=''>Barra de Busca</a>
                    <a href=''>Link Cadastre-se</a>
                    <a href=''>Botão</a>
                    <a href=''>Entrar</a>
                </nav>
            </div>
            <div className={styles.headerBottom}>
                <nav>
                    <a href=''>Home</a>
                    <a href=''>Produtos</a>
                    <a href=''>Categorias</a>
                    <a href=''>Meus pedidos</a>
                </nav>
            </div>
        </header >
    )
}

export default Header