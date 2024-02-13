import styled from 'styled-components'

export const Page = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: rgba(240, 240, 240, 0.8);
    display: ${({ $activeModal }) => ($activeModal ? 'flex' : 'none')};
`

export const Modal = styled.div`
    width: 600px;
    height: 800px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 20px 50px 0 50px;
    background: white;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`

export const Tittle = styled.h1`
    font-size: 32px;
    font-weight: 500;
    line-height: 70px;
    color: black;
`

export const ButtonClose = styled.img`
    width: 30px;
    height: 30px;
    &:hover {
        content: url('/img/close-hover.svg');
    }
`

export const NameSection = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: black;
    & > span {
        color: rgba(0, 0, 0, 0.3);
    }
`

export const InputName = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    border: 1px solid #00000033;
    margin-bottom: 20px;
    margin-top: 4px;
    padding-left: 19px;
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.3);
    }
`

export const InputDescription = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 6px;
    border: 1px solid #00000033;
    resize: none;
    margin-bottom: 20px;
    margin-top: 4px;
    padding-left: 19px;
    padding-top: 13px;
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.3);
    }
`

export const DopImage = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 90px);
    grid-template-rows: repeat(1, 90px);
    column-gap: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
    & > label {
        width: 100%;
        height: 100%;
        background: url('/img/addImage.svg');
    }
`

export const Image = styled.input``

export const SelectedImage = styled.img`
    width: 100%;
    height: 100%;
`

export const BoxInput = styled.div`
    position: relative;
    width: 200px;
    margin-bottom: 30px;
    margin-top: 4px;
    &::after {
        position: absolute;
        content: '₽';
        color: black;
        right: 18px;
        top: 13px;
    }
`

export const InputPrice = styled.input`
    position: relative;
    display: block;
    width: 200px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid #00000033;
    padding-left: 19px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const ButtonModal = styled.button`
    width: 181px;
    height: 50px;
    border-radius: 6px;
    background: ${({ $activeButton }) =>
        $activeButton ? '#009EE4' : '#D9D9D9'};
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: white;
`