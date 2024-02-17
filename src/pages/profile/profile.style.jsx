import styled from 'styled-components'

export const Page = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 20px;
`

export const ProfileWelcome = styled.h1`
    margin-left: calc(50vw - 579px);
    font-size: 40px;
    font-weight: 500;
    line-height: 88px;
    color: black;
    margin-bottom: 10px;
`

export const SectionName = styled.h2`
    margin-left: calc(50vw - 579px);
    font-size: 32px;
    font-weight: 500;
    line-height: 70.4px;
    color: black;
    margin-bottom: 20px;
`

export const Profile = styled.div`
    display: flex;
    gap: 50px;
    margin-left: calc(50vw - 579px);
    margin-bottom: 70px;
`

export const ProfilePhoto = styled.div`
    width: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > label {
        padding-top: 10px;
        color: #009ee4;
        font-size: 16px;
        font-weight: 400;
    }
`

export const Photo = styled.img`
    height: 170px;
    width: 170px;
    background-color: #f0f0f0;
    border-radius: 50%;
`

export const ChangePhoto = styled.input``

export const ProfileData = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 14px;
    row-gap: 20px;
    width: 614px;
`

export const InputName = styled.div`
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 4px;
`

export const InputBoxName = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    &:focus-within ${InputName} {
        color: #009ee4;
    }
`

export const InputBoxSurname = styled(InputBoxName)``

export const InputBoxCity = styled(InputBoxName)``

export const InputBoxTel = styled(InputBoxName)`
    width: 614px;
`

export const Input = styled.input`
    height: 50px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 15px;
    &:focus {
        outline: 1px solid rgba(0, 158, 228, 1);
    }
`

export const CardsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 270px);
    column-gap: 26px;
    row-gap: 40px;
    margin-left: calc(50vw - 579px);
`

export const SaveButton = styled.button`
    width: 154px;
    height: 50px;
    border-radius: 6px;
    background: #009ee4;
    border: none;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: white;
    &:disabled {
        background: #d9d9d9;
        cursor: default;
    }
`