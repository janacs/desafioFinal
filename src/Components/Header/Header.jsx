import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom para navegação
import logo from "../../assets/images/logo.png"; // Caminho para a imagem da logo
import { HeaderStyle } from "./style"; // Estilos personalizados para o Header

// Componente Header - exibe o cabeçalho com a navegação do site
export default function Header() {
    return (
        <HeaderStyle>
            {/* Container principal para o cabeçalho */}
            <section className="caixaDaHeader">
                {/* Logo da Starbucks */}
                <img src={logo} alt="Logo da Starbucks" />

                {/* Menu de navegação */}
                <nav>
                    {/* Lista de links de navegação */}
                    <ul>
                        <li>
                            <Link to="/">Home</Link> {/* Link para a página inicial */}
                        </li>
                        <li>
                            <Link to="/novidades">Novidades</Link> {/* Link para a página de novidades */}
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link> {/* Link para a página "Sobre" */}
                        </li>
                    </ul>
                </nav>
            </section>
        </HeaderStyle>
    );
}
