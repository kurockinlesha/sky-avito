import styled from 'styled-components';


export const Page = styled.div`
    min-height: 100vh;
    width: 100%;
    padding-left: calc(50% - 183px);
	padding-right: calc(50% - 183px);
    padding-top: calc(50vh - 220px);
    background: rgba(209,216,222, 1);
`;

export const Container = styled.div`
	height: 439px;
	width: 366px;
    border-radius: 12px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    height: 21px;
    width: 140px;
    margin-top: 43px;
    margin-bottom: 43px;
`;

export const Password = styled.input`
    height: 32px;
    width: 278px;
    border:none;
    border-bottom: 1px solid #D9D9D9;
    &::placeholder {
        color: #D9D9D9;
        font-size: 18px;
        font-weight: 400;
    }
`;

export const Email = styled(Password)`
    margin-bottom: 38px;
`;



export const ButtonEnter = styled.button`
    height: 52px;
    width: 278px;
    border-radius: 6px;
    border: none;
    background-color: #009EE4;
    margin-bottom: 20px;
    margin-top: 60px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    &:hover {
        background-color: #0080C1;
    }
`;

export const ButtonReg = styled.button`
    height: 52px;
    width: 278px;
    border-radius: 6px;
    border: 1px solid #D9D9D9;
    background-color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
`;