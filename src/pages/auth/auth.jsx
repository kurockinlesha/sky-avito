import * as S from './auth.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const { useState } = React
import {authorization, getMyData} from '../../components/api/api'

export const Auth = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelAuthorization = () => {

        authorization(email, password).then((data) => {
            console.log(data);
            if (data.access_token) {
                localStorage.setItem('token', data.access_token)
                localStorage.setItem('refToken', data.refresh_token)
            }
            getMyData().then((data) => {
                console.log(data);
                localStorage.setItem('userId', data.id)
                navigate(`/`)
            })
        })
 
    }

	return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.Email  onChange={e => setEmail(e.target.value)} placeholder='email'></S.Email>
                    <S.Password onChange={e => setPassword(e.target.value)} placeholder='Пароль'></S.Password>
                <S.ButtonEnter onClick={handelAuthorization}>Войти</S.ButtonEnter>
                <S.ButtonReg onClick={() => navigate(`/reg`)}>Зарегистрироваться</S.ButtonReg>
            </S.Container>  
        </S.Page>

    )
	
}