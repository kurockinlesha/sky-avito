import * as S from './auth.style';
export const Auth = () => {

	return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.Email placeholder='email'></S.Email>
                <S.Password placeholder='Пароль'></S.Password>
                <S.ButtonEnter>Войти</S.ButtonEnter>
                <S.ButtonReg>Зарегистрироваться</S.ButtonReg>
            </S.Container>  
        </S.Page>

    )
	
}