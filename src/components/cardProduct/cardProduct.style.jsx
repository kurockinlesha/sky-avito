import styled from 'styled-components'

export const Card = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.img`
    height: 270px;
`

export const CardName = styled.h1`
    height: 52px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
    color: rgba(0, 158, 228, 1);
    overflow: hidden;
`

export const CardPrice = styled.h2`
    color: rgba(0, 0, 0, 1);
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
`

export const CardCity = styled.h3`
    color: rgba(95, 95, 95, 1);
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
`

export const CardDate = styled(CardCity)``