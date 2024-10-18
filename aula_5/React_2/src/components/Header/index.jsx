import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <span>Icone</span>
                <nav>
                    <a href=''>Barra de Busca</a>
                    <a href=''>Link Cadastre-se</a>
                    <a href=''>Botão</a>
                    <a href=''>Entrar</a>
                </nav>
            </div>
            <div className={styles.headerBottom}>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/home'>Produtos</Link>
                    <Link to='/home'>Categorias</Link>
                    <Link to='/home'>Meus pedidos</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/login'>Criar Conta</Link>
                </nav>
            </div>
        </header >
    )
}

export default Header