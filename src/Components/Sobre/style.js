import styled from "styled-components";

// Seção principal que envolve o conteúdo da página "Sobre"
export const FundoDaSobre = styled.section`
  display: flex; /* Layout flexível */
  width: 100%; /* Ocupa toda a largura disponível */
  height: 100%; /* Ocupa toda a altura disponível */
  justify-content: space-around; /* Espaçamento uniforme entre os itens */
  align-items: center; /* Centraliza os itens verticalmente */
  padding: 0 30px; /* Adiciona espaçamento horizontal */

  /* Ajustes para telas menores */
  @media (max-width: 1180px) {
    p {
      font-size: 0.9rem; /* Reduz tamanho do texto */
    }
  }

  @media (max-width: 780px) {
    flex-direction: column; /* Alinha itens verticalmente */
    overflow-y: auto; /* Habilita rolagem vertical */
  }

  /* Estilo das imagens dentro da seção */
  img {
    width: 24%; /* Imagem ocupa 24% da largura */
    border-radius: 10px; /* Bordas arredondadas */

    @media (max-width: 780px) {
      width: 60%; /* Aumenta a largura da imagem em telas menores */
      border-radius: 20px; /* Bordas mais arredondadas */
      margin-top: 30px; /* Adiciona espaçamento superior */
    }
  }
`;

// Container para o texto da seção "Sobre"
export const TextoDaSobre = styled.div`
  display: flex; /* Layout flexível */
  flex-direction: column; /* Organiza os elementos verticalmente */
  width: 40%; /* Largura inicial do container */
  height: 100%; /* Altura total disponível */
  justify-content: center; /* Centraliza os itens verticalmente */
  align-items: center; /* Centraliza os itens horizontalmente */

  /* Ajustes para telas intermediárias */
  @media (max-width: 1180px) {
    width: 60%; /* Aumenta a largura do texto */
    margin-left: 50px; /* Adiciona margem esquerda */
  }

  /* Ajustes para telas pequenas */
  @media (max-width: 780px) {
    width: 80%; /* Ocupa mais largura em telas pequenas */
    height: 80%; /* Ajusta a altura */
    margin: 0; /* Remove margens extras */

    /* Estilo de texto ajustado em telas menores */
    h3 {
      font-size: 0.7rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 10px;
    }

    p {
      font-size: 0.9em;
      width: 100%;
      margin-top: 10px;
    }

    /* Botão centralizado e ajustado */
    button {
      align-self: center;
      margin-bottom: 20px;
      width: 100%;
    }
  }

  /* Estilo do subtítulo */
  h3 {
    align-self: flex-start; /* Alinha no início horizontalmente */
    font-family: "Inter", serif; /* Fonte alternativa */
    font-weight: 600; /* Peso médio */
    font-size: 1rem; /* Tamanho padrão */
  }

  /* Estilo do título */
  h2 {
    align-self: flex-start; /* Alinha no início horizontalmente */
    font-weight: 400; /* Peso leve */
    font-size: 4rem; /* Tamanho grande */
  }

  /* Estilo do parágrafo */
  p {
    margin-bottom: 20px; /* Espaçamento inferior */
    font-weight: 400; /* Peso leve */
  }
`;
