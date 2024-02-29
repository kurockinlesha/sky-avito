import styled from 'styled-components'

export const Page = styled.div`
    min-height: 100vh;
    width: 100%;
    padding-left: calc(50% - 183px);
    padding-right: calc(50% - 183px);
    padding-top: calc(50vh - 323px);
    background: rgba(209, 216, 222, 1);
`
export const Error = styled.div`
    height: 10px;
    color: red;
    margin-top: 5px;
`

export const Container = styled.div`
    height: 647px;
    width: 366px;
    border-radius: 12px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.img`
    height: 21px;
    width: 140px;
    margin-top: 43px;
    margin-bottom: 43px;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 38px;
`

export const Email = styled.input`
    height: 32px;
    width: 278px;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    &::placeholder {
        color: #d9d9d9;
        font-size: 18px;
        font-weight: 400;
    }
    &:focus {
        outline: none;
    }
`

export const Password = styled(Email)``

export const RepeatPassword = styled(Email)``

export const Name = styled(Email)``

export const Surname = styled(Email)``

export const City = styled(Email)``
export const ButtonEnter = styled.button`
    height: 52px;
    width: 278px;
    border-radius: 6px;
    border: none;
    background-color: #009ee4;
    margin-bottom: 20px;
    margin-top: 60px;
    color: white;
    font-size: 18px;
    font-weight: 400;
`

export const ButtonReg = styled.button`
    height: 52px;
    width: 278px;
    border-radius: 6px;
    border: none;
    background-color: #009ee4;
    margin-top: 60px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    &:hover {
        background-color: #0080c1;
    }
`