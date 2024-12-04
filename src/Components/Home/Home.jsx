import copoLaranja from "../../assets/images/copoLaranja.png";
import copoVermelho from "../../assets/images/copoVermelho.png";
import copoAmarelo from "../../assets/images/copoAmarelo.png";
import copinhoLaranja from "../../assets/images/copinhoLaranja.png";
import copinhoVermelho from "../../assets/images/copinhoVermelho.png";
import copinhoAmarelo from "../../assets/images/copinhoAmarelo.png";
import { useState } from "react";
import { SectionDaHome, Copinhos, Sumir, TextoDaHome, RodaDeCores } from "./style";

export default function Home() {
    const [corFundo, setCorFundo] = useState("fundo-verde");
    const [imagem, setImagem] = useState(copoLaranja);

    function clicarAmarelo() {
        setCorFundo("fundo-verde"); // Fundo verde
        setImagem(copoLaranja); // Copo laranja
    }

    function clicarVermelho() {
        setCorFundo("fundo-vermelho"); // Fundo vermelho
        setImagem(copoVermelho); // Copo vermelho
    }

    function clicarBranco() {
        setCorFundo("fundo-amarelo"); // Fundo amarelo
        setImagem(copoAmarelo); // Copo amarelo
    }

    return (
        <>
            <SectionDaHome className={corFundo}>
                <div className="principalDaHome">
                    <TextoDaHome>
                        <h1>Mais que Café</h1>
                        <h2>Isso é <span>Starbucks</span></h2>
                        <p>
                            A Starbucks oferece uma variedade de cafés de alta qualidade.
                            Alguns dos cafés mais populares incluem o Caffè Americano, o
                            Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks
                            oferece bebidas quentes e frias, doces diferenciados e sanduíches.
                        </p>
                        <button type="button">SAIBA MAIS</button>
                    </TextoDaHome>

                    <Copinhos>
                        <img 
                            src={copinhoLaranja} 
                            onClick={clicarAmarelo} 
                            alt="Copo pequeno laranja com macchiato do Starbucks" 
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

                <RodaDeCores className={corFundo}>
                    <img src={imagem} alt="Copo grande com macchiato do Starbucks" />
                </RodaDeCores>

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
