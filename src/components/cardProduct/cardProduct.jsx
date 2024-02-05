import * as S from './cardProduct.style';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { formatToDate } from "../../utilits/dateFormate";

export const CardProduct = ({name, price, city, date, image, id}) => {

    const navigate = useNavigate()

	return (
        <S.Card>
            <S.CardImage src={image} onClick={() => navigate(`/product/${id}`)}></S.CardImage>
            <S.CardName>{name}</S.CardName>
            <S.CardPrice>{price} ₽</S.CardPrice>
            <S.CardCity>{city}</S.CardCity>
            <S.CardDate>{formatToDate(date)}</S.CardDate>
        </S.Card>

    )
	
}
CardProduct.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}