import styled from 'styled-components';


export const Header = styled.div`
    width: 100%;
    height: 79px;
    background-color: #009EE4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 141px;
`;

export const ButtonHeader = styled.button`
    height: 40px;
    width: 224px;
    border-radius: 6px;
    border: 1px solid white;
    background-color: #009EE4;
    color: white;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background-color: #0080C1;
    }
`;

export const SearchMain = styled.div`
    width: 100%;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogMain = styled.img`
    height: 28px;
    width: 54px;
`;

export const Search = styled.input`
    height: 50px;
    width: 876px;
    border-radius: 6px;
    margin-left: 60px;
    margin-right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
        font-size: 16px;
        font-weight: 400;
    }
    &:focus {
        outline: none;
    }
`;

export const SearchHeader = styled.button`
    height: 50px;
    width: 158px;
    border-radius: 6px;
    border: none;
    background-color: #009EE4;
    color: white;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background-color: #0080C1;
    }
`;

export const TitleMain = styled.h1`
    font-size: 40px;
    font-weight: 500;
    line-height: 88px;
    color: black;
    margin-left: calc(50vw - 579px);
`;

export const CardsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 270px);
    column-gap: 26px;
    row-gap: 40px;
    margin-left: calc(50vw - 579px);
`;
