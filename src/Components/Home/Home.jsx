// Importação das imagens e hooks necessários
import copoLaranja from "../../assets/images/copoLaranja.png";
import copoVermelho from "../../assets/images/copoVermelho.png";
import copoAmarelo from "../../assets/images/copoAmarelo.png";
import copinhoLaranja from "../../assets/images/copinhoLaranja.png";
import copinhoVermelho from "../../assets/images/copinhoVermelho.png";
import copinhoAmarelo from "../../assets/images/copinhoAmarelo.png";
import { useState } from "react"; // Hook de estado para controle de variáveis
import { SectionDaHome, Copinhos, Sumir, TextoDaHome, RodaDeCores } from "./style"; // Estilos importados do arquivo de estilo

// Função principal do componente Home
export default function Home() {
    // Cores iniciais para os fundos e imagens
    const corVerde = "fundo-verde";
    const corVermelha = "fundo-vermelho";
    const corAmarela = "fundo-amarelo";

    // Estados para controlar a cor de fundo e a imagem do copo
    const [corFundo, setCorFundo] = useState(corVerde); // Cor de fundo inicial
    const [imagem, setImagem] = useState(copoLaranja); // Imagem inicial do copo

    // Função para mudar para o copo e fundo amarelo
    function clicarAmarelo() {
        setCorFundo(corVerde); // Altera a cor de fundo para verde
        setImagem(copoLaranja); // Altera a imagem do copo para o copo laranja
    }

    // Função para mudar para o copo e fundo vermelho
    function clicarVermelho() {
        setCorFundo(corVermelha); // Altera a cor de fundo para vermelho
        setImagem(copoVermelho); // Altera a imagem do copo para o copo vermelho
    }

    // Função para mudar para o copo e fundo amarelo
    function clicarBranco() {
        setCorFundo(corAmarela); // Altera a cor de fundo para amarelo
        setImagem(copoAmarelo); // Altera a imagem do copo para o copo amarelo
    }
    
    return (
        <>
            <SectionDaHome className={corFundo}>
                <div className="principalDaHome">
                    <TextoDaHome>
                        <h1> Mais que Café</h1>
                        <h2>Isso é <span>Starbucks</span></h2>
                        <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                        <button type="button">SAIBA MAIS</button>
                    </TextoDaHome>

                    {/* Imagens dos copinhos pequenos, que alteram o fundo e a imagem do copo grande */}
                    <Copinhos>
                        <img 
                            src={copinhoLaranja}  
                            onClick={clicarAmarelo}  
                            alt="Copo pequeno amarelo com macchiato do Starbucks" 
                        />
                        <img 
                            src={copinhoVermelho} 
                            onClick={clicarVermelho}  
                            alt="Copo pequeno vermelho com macchiato do Starbucks" 
                        />
                        <img 
                            src={copinhoAmarelo} 
                            onClick={clicarBranco}   
                            alt="Copo pequeno amarelo com macchiato do Starbucks" 
                        />
                    </Copinhos>
                </div>

                {/* Roda de cores com o fundo e imagem do copo grande */}
                <RodaDeCores>
                    <img src={imagem} alt="Copo grande com macchiato do Starbucks" />
                </RodaDeCores>

                {/* Copinhos pequenos que aparecem em telas menores */}
                <Sumir>
                    <img 
                        src={copinhoLaranja}  
                        onClick={clicarAmarelo}  
                        alt="Copo pequeno amarelo com macchiato do Starbucks" 
                    />
                    <img 
                        src={copinhoVermelho} 
                        onClick={clicarVermelho}  
                        alt="Copo pequeno vermelho com macchiato do Starbucks" 
                    />
                    <img 
                        src={copinhoAmarelo} 
                        onClick={clicarBranco}   
                        alt="Copo pequeno amarelo com macchiato do Starbucks" 
                    />
                </Sumir>
            </SectionDaHome>
        </>
    );
}
