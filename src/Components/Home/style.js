import styled from "styled-components";

export const SectionDaHome = styled.section`
    flex: 1;
    height: 100%;

    .fundo-verde {
        background-color: #037143;
    }

    .fundo-vermelho {
        background-color: #97090C;
    }

    .fundo-amarelo {
        background-color: #DECD13;
    }

    .principalDaHome {
        display: flex;
        flex-direction: row;
        width: 90%;
        flex: 1;
        height: 100%;
        position: relative;

        @media (max-width: 1224px) {
            flex-direction: row;
            width: 95%;
            gap: 20px;
        }

        @media (max-width: 780px) {
            flex-direction: column;
            width: 100%;
            height: 80%;
            padding: 10px;
            overflow-y: hidden;
            overflow-x: hidden;
        }
    }
`;

export const TextoDaHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 70px;
    margin: 0 60px;

    @media (max-width: 980px) {
        width: 100%;
        margin: 0;
        padding: 0 20px;
    }

    h1 {
        display: flex;
        font-family: "Inter", serif;
        font-weight: 300;
        align-self: flex-start;
        font-size: 3.5rem;

        @media (max-width: 980px) {
            font-size: 1.5rem;
            margin-top: 20px;
        }
    }

    h2 {
        align-self: flex-start;
        font-weight: 400;
        font-size: 4rem;

        @media (max-width: 980px) {
            font-size: 2rem;
            margin-top: 10px;
        }
    }

    span {
        color: #037143;
        font-weight: 800;
    }

    p {
        font-weight: 500;
        margin-bottom: 20px;

        @media (max-width: 980px) {
            font-size: 16px;
        }
    }

    button {
        @media (max-width: 780px){
            width: 100%;
        }
    }
`;

export const RodaDeCores = styled.div`
    display: flex;
    border-radius: 50%;
    position: fixed;
    top: 30%;
    right: -30%;
    width: 1000px;
    aspect-ratio: 1;
    z-index: 1;

    img {
        position: absolute;
        bottom: 54%;
        right: 50%;
        width: 46%;
    }

    @media (max-width: 1324px) {
        width: 600px;
        top: 45%;
        right: -20%;

        img {
            width: 50%;
            right: 50%;
            bottom: 50%;
        }
    }

    @media (max-width: 900px) {
        width: 500px;
        top: 60%;
        right: -25%;

        img {
            width: 50%;
            right: 50%;
            bottom: 65%;
        }
    }

    @media (max-width: 600px) {
        width: 300px;
        top: 80%;
        right: -20%;

        img {
            width: 50%;
            right: 40%;
        }
    }
`;

export const Copinhos = styled.figure`
    display: flex;
    width: 280px;
    justify-content: end;
    height: 16%;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-bottom: 30px;

    @media (max-width: 800px) {
        display: none;
    }

    img:hover {
        transform: translateY(-7px);
        rotate: 17deg;
        transition: 0.9s;
    }
`;

export const Sumir = styled.div`
    display: none;
    width: 200px;

    img {
        width: 36%;
    }

    img:hover {
        transform: translateY(-7px);
        rotate: 17deg;
        transition: 0.9s;
    }

    @media (max-width: 800px) {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 10%;
        justify-content: space-around;
        gap: 10px;
    }
`;