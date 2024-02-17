import * as S from './profileHeader.style'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProfileHeader = ({ switchModal }) => {
    const navigate = useNavigate()

    return (
        <>
            <S.Header>
                <S.ButtonHeader onClick={() => switchModal(true)}>
                    Разместить объявление
                </S.ButtonHeader>
                <S.ButtonHeader2 onClick={() => navigate(`/profile`)}>
                    Личный кабинет
                </S.ButtonHeader2>
            </S.Header>
            <S.ProfileNav>
                <S.LogoProfile src="/img/LogoMain.svg"></S.LogoProfile>
                <S.ButtonBack onClick={() => navigate(`/`)}>
                    Вернуться на главную
                </S.ButtonBack>
            </S.ProfileNav>
        </>
    )
}
ProfileHeader.propTypes = {
    switchModal: PropTypes.func.isRequired,
}