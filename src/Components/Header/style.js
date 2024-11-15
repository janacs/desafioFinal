import styled from "styled-components";

  // A Carol disse que não pode colocar "Header" pq irá gerar conflito.
    // Você tá falando do componente funcional Header ou do estilo da header? 
export const HeaderStyle = styled.header `
display: flex; 
/* A logo foi pro lado da nav */

justify-content: space-between;
`

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
        color: #00704A; // Tom de verde similar ao Starbucks
    }
  }
`;