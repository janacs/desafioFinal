import styled from "styled-components";

// Estilos principais para o cabeçalho
export const HeaderStyle = styled.header`
    // Flexbox para alinhar os itens do cabeçalho
    display: flex;
    align-items: center;
    padding: 20px;  // Adiciona um padding de 20px
    width: 100%;
    height: 20vh;  // Define a altura como 20% da altura da tela

    // Estilos para a caixa interna que contém a navegação
    & .caixaDaHeader {
        display: flex;
        justify-content: space-around;  // Espaça os itens igualmente
        align-items: center;
        width: 90%;  // Define a largura como 90% da largura do cabeçalho
    }

    // Estilo para a área de navegação
    nav {
        display: flex;
        width: 60%;  // Largura da navegação é 60% da largura total
        height: 100%;  // A altura é 100% da altura do cabeçalho
    }

    // Estilo para a lista de itens de navegação
    ul {
        display: flex;
        width: 100%;  // Largura da lista é 100% da navegação
        height: 100%;  // A altura é 100% da navegação
        list-style: none;  // Remove os marcadores da lista
        justify-content: flex-end;  // Alinha os itens para a direita
        gap: 80px;  // Espaçamento entre os itens da lista
    }

    // Estilo para os links de navegação
    li a {
        color: #1E3932;  // Cor do texto
        text-decoration: none;  // Remove o sublinhado
        font-size: 20px;  // Tamanho da fonte
    }

    // Media query para telas com largura máxima de 1224px
    @media (max-width: 1224px) {
        height: 15vh;  // Reduz a altura para 15% da altura da tela
        padding: 10px;  // Reduz o padding para 10px

        & .caixaDaHeader {
            nav {
                width: 70%;  // Aumenta a largura da navegação para 70%
            }

            ul {
                gap: 40px;  // Reduz o espaçamento entre os itens da lista
            }

            li a {
                font-size: 18px;  // Reduz o tamanho da fonte para 18px
            }
        }
    }

    // Media query para telas com largura máxima de 780px
    @media (max-width: 780px) {
        height: auto;  // Permite que a altura se ajuste automaticamente
        padding: 10px;  // Reduz o padding para 10px

        & .caixaDaHeader {
            // Estilo para a imagem no cabeçalho
            img {
                width: 16%;  // Define a largura da imagem como 16%
                margin-left: 20px;  // Adiciona uma margem à esquerda
            }

            nav {
                width: 100%;  // A navegação ocupa 100% da largura disponível
            }

            ul {
                flex-direction: row;  // Alinha os itens da lista em linha
                gap: 15px;  // Reduz o espaçamento entre os itens para 15px
            }

            li a {
                font-size: 14px;  // Reduz o tamanho da fonte para 14px
            }
        }
    }
`;
