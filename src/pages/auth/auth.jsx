import * as S from './auth.style';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorization, getMyData } from '../../api/api';

export const Auth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const emailPattern = /^[\w.@+-]+$/;

    useEffect(() => {
        setError(null);
    }, [email, password]);

    const handelAuthorization = () => {
        if (!emailPattern.test(email) || password.trim() === '') {
            setError('Неверный формат email или пароль не введен');
            return;
        }
        authorization(email, password).then((data) => {
            if (data.access_token) {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('refToken', data.refresh_token);
                getMyData().then((data) => {
                    localStorage.setItem('userId', data.id);
                    navigate(`/`);
                });
            } else {
                setError(data.detail[0]?.msg || 'Ошибка авторизации');
            }
        });
    };

    return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.Email
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                ></S.Email>
                <S.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                ></S.Password>
                {error && <S.Error>{error}</S.Error>}
                <S.ButtonEnter onClick={handelAuthorization}>
                    Войти
                </S.ButtonEnter>
                <S.ButtonReg onClick={() => navigate(`/reg`)}>
                    Зарегистрироваться
                </S.ButtonReg>
            </S.Container>
        </S.Page>
    );
};
