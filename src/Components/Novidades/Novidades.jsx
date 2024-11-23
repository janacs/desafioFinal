// Importação da imagem do café e dos componentes de estilo
import cafe from "../../assets/images/cafe.png";
import { FundoDaNovidades, TextoDaNovidades, ImagemDoCafe } from "./style";

// Componente principal que exibe informações sobre os níveis de torra do café
export default function Novidades() {
  return (
    <FundoDaNovidades>
      {/* Seção de texto com explicações sobre os níveis de torra do café */}
      <TextoDaNovidades>
        <h3>CAFÉS ESPECIAIS</h3>
        <h2>Níveis de Torra</h2>
        <p>
          Os níveis de torra do café são:
          <br />
          <strong>Torra Clara:</strong> Realça o sabor original do grão, com notas frutadas e acidez mais alta; comum em cafés especiais.
          <br />
          <strong>Torra Média:</strong> Equilibra acidez e amargor, oferecendo um sabor mais encorpado com notas de caramelo e chocolate.
          <br />
          <strong>Torra Escura:</strong> Proporciona um sabor mais amargo e encorpado, com notas de chocolate amargo e nozes, com acidez bem baixa.
          <br />
          Cada nível altera o sabor, aroma e intensidade da bebida, sendo escolhido conforme a preferência.
        </p>
        <button>SAIBA MAIS</button>
      </TextoDaNovidades>

      {/* Caixa para exibir a imagem do café, com animação de entrada */}
      <ImagemDoCafe data-aos="fade-up">
        <img src={cafe} alt="Imagem de um grão de café com três tipos de torras diferentes (leve, média e escura)." />
      </ImagemDoCafe>
    </FundoDaNovidades>
  );
}
