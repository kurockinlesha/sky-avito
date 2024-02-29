import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './showTelButton.style'

export const ShowTelButton = ({ phone }) => {
    const [active, setActive] = useState(false)

    return (
        <S.SellerButton onClick={() => setActive(true)}>
            {active ? (
                <>
                    <S.TittleButton></S.TittleButton>
                    <S.TelButton>{phone}</S.TelButton>
                </>
            ) : (
                <>
                    <S.TittleButton>Показать телефон </S.TittleButton>
                    <S.TelButton>+7 XXX ХХХ ХХ ХХ</S.TelButton>
                </>
            )}
        </S.SellerButton>
    )
}

ShowTelButton.propTypes = {
    phone: PropTypes.string,
}