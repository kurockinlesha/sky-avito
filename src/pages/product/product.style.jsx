import styled from 'styled-components';

export const Product = styled.div`
    display: flex;
    margin-left: calc(50vw - 580px);
    margin-top: 34px;
    gap: 59px;
`;

export const ProductImage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainImage = styled.img`
    width: 480px;
    height: 480px;
    background: #F0F0F0;
    margin-bottom: 30px;
`;

export const DopImage = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 88px);
    grid-template-rows: repeat(1, 88px);
    column-gap: 10px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    background: #F0F0F0;
`;

export const ProductInfo = styled.div`
    width: 621px;
    display: flex;
    flex-direction: column;
`;

export const ProductName = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 10px;
    color: #000000;
`;

export const ProductDate = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #5F5F5F;
`;

export const ProductCity = styled(ProductDate)`
    margin-top: 4px;
    margin-bottom: 4px;
`;

export const ProductReviews = styled(ProductDate)`
    color: #009EE4;
`;

export const ProductPrice = styled.h2`
font-size: 28px;
font-weight: 700;
line-height: 39px;
color: #000000;
margin-top: 34px;
margin-bottom: 20px;
`;

export const ProductSeller = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 34px; 
`;

export const PhotoSeller = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
background: #F0F0F0;  
`;

export const SellerInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SellerName = styled.div`
font-size: 20px;
font-weight: 600;
line-height: 26px;
color: #009EE4;
&:hover{
    cursor: pointer;
}
`;

export const DateSale = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 32px;
color: #5F5F5F;
`;

export const Description = styled.div`
    margin-left: calc(50vw - 580px);
    margin-top: 60px; 
    width: 792px;
    & > h2 {
        font-size: 32px;
        font-weight: 500;
        line-height: 70px;
        color: #000000;
        margin-bottom: 20px; 
    }
    & > p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #000000;
    }
`;

export const Buttons = styled.div`

`;

export const ButtonEdit = styled.button`
width: 189px;
height: 50px;
border-radius: 6px;
background: #009EE4;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: white;
border: none;
`;

export const ButtonDelete = styled(ButtonEdit)`
width: 225px;
margin-left: 10px;
`;