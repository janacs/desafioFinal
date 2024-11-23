// Importação da imagem da loja e dos componentes de estilo
import loja from "../../assets/images/loja.png"; // Imagem da loja Starbucks
import { FundoDaSobre, TextoDaSobre } from "./style"; // Estilos do componente "Sobre"

// Componente principal da página "Sobre"
export default function Sobre() {
  return (
    <FundoDaSobre>
      {/* Imagem da loja com animação AOS para efeito de desvanecimento */}
      <img
        src={loja} // Caminho da imagem
        data-aos="fade-down" // Efeito de animação para quando a imagem aparecer
        alt="Imagem da loja Starbucks" // Texto alternativo para acessibilidade
      />
      
      <TextoDaSobre>
        {/* Subtítulo da seção */}
        <h3>PREPARAÇÃO</h3>
        
        {/* Título principal da seção */}
        <h2>História</h2>
        
        {/* Parágrafo explicativo sobre a história da Starbucks */}
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
        </p>
        
        {/* Botão de ação para saber mais */}
        <button>SAIBA MAIS</button>
      </TextoDaSobre>
    </FundoDaSobre>
  );
}
