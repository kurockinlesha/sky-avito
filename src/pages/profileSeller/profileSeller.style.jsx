import styled from 'styled-components'

export const Tittle = styled.h1`
    margin-left: calc(50vw - 579px);
    font-size: 40px;
    font-weight: 500;
    line-height: 88px;
    color: black;
    margin-bottom: 10px;
`

export const Seller = styled.div`
    display: flex;
    gap: 50px;
    margin-left: calc(50vw - 579px);
    margin-bottom: 44px;
`

export const ProfilePhoto = styled.img`
    height: 170px;
    width: 170px;
    background-color: #f0f0f0;
    border-radius: 50%;
`

export const ProfileData = styled.div`
    display: flex;
    flex-direction: column;
    width: 243px;
`

export const SellerName = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: black;
`

export const SellerCity = styled.h4`
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: #5f5f5f;
`

export const SellerInfo = styled(SellerCity)``

export const SectionName = styled.h2`
    margin-left: calc(50vw - 579px);
    font-size: 32px;
    font-weight: 500;
    line-height: 70.4px;
    color: black;
    margin-bottom: 20px;
`

export const CardsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 270px);
    column-gap: 26px;
    row-gap: 40px;
    margin-left: calc(50vw - 579px);
`