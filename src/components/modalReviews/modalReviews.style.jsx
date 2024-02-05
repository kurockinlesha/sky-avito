import styled from 'styled-components';

export const Modal = styled.div`
    width: 800px;
    height: 900px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 20px 98px 0 50px;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;
`;

export const ButtonClose = styled.img`
    width: 30px;
    height: 30px;
    &:hover {
        content: url('/img/close-hover.svg');
    }
`;

export const Tittle = styled.h1`
    font-size: 32px;
    font-weight: 500;
    line-height: 70px;
    color: black;
`;

export const NameSection = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: black;
    margin-bottom: 20px;
`;

export const InputName = styled.textarea`
width: 100%;
height: 100px;
border-radius: 6px;
border: 1px solid #00000033;
margin-bottom: 14px;
margin-top: 14px;
padding-left: 19px;
padding-top: 10px;
resize: none;
&::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.3);
}
`;

export const ButtonModal = styled.button`
width: 181px;
height: 50px;
margin-bottom: 30px;
border-radius: 6px;
background: #D9D9D9;
border: none;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: white;
`;

export const Review = styled.div`
display: flex;
height: 124px;
width: 100%px;
margin-bottom: 30px;
gap: 12px;
`;

export const ReviewsImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
background: #F0F0F0;
`;

export const ReviewMain = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export const ReviewsName = styled.h1`
font-size: 16px;
font-weight: 600;
line-height: 32px;
color: black;
& > span {
    font-weight: 400;
    color: #5F5F5F;
}
`;

export const ReviewText = styled(ReviewsName)`
margin-top: 12px;
& > p {
    font-family: Noto Sans;
    font-weight: 400;
    line-height: 24px;
    color: #5F5F5F;
}
`;