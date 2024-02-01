import * as S from './reg.style';
export const Reg = () => {

	return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.InputBox>
                    <S.Email placeholder='email'></S.Email>
                    <S.Password placeholder='Пароль'></S.Password>
                    <S.RepeatPassword placeholder='Повторите пароль'></S.RepeatPassword>
                    <S.Name placeholder='Имя (необязательно)'></S.Name>
                    <S.Surname placeholder='Фамилия (необязательно)'></S.Surname>
                    <S.City placeholder='Город (необязательно)'></S.City>
                </S.InputBox>
                <S.ButtonReg>Зарегистрироваться</S.ButtonReg>
            </S.Container>  
        </S.Page>

    )
	
}