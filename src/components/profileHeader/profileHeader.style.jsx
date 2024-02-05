import styled from 'styled-components';


export const Header = styled.div`
    width: 100%;
    height: 79px;
    background-color: #009EE4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 141px;
    gap: 10px;
`;

export const ButtonHeader = styled.button`
    height: 40px;
    width: 232px;
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

export const ButtonHeader2 = styled(ButtonHeader)`
    width: 173px;
`;

export const ProfileNav = styled.div`
    width: 100%;
    height: 136px;
    display: flex;
    align-items: center;
    gap: 60px;
    padding-left: calc(50vw - 579px);
`;

export const LogoProfile = styled.img`
    height: 28px;
    width: 54px;
`;

export const ButtonBack = styled.button`
    height: 50px;
    width: 241px;
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