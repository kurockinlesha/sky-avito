import * as S from './auth.style'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const { useState, useEffect } = React
import { authorization, getMyData } from '../../api/api'

export const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const emailPattern = /^[\w.@+-]+$/

    useEffect(() => {
        setError(null)
    }, [email, password])

    const handelAuthorization = () => {
        if (!emailPattern.test(email)) {
            setError('Неверный формат email')
            return
        }
        authorization(email, password).then((data) => {
            if (data.access_token) {
                localStorage.setItem('token', data.access_token)
                localStorage.setItem('refToken', data.refresh_token)
                getMyData().then((data) => {
                    console.log(data)
                    localStorage.setItem('userId', data.id)
                    navigate(`/`)
                })
            } else {
                if (data.detail[0].msg) {
                    console.log(data)
                    setError(data.detail[0].msg)
                } else setError(data.detail)
            }
        })
    }

    return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.Email
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                                .replaceAll('<', '&lt;')
                                .replaceAll('>', '&gt;'),
                        )
                    }
                    placeholder="email"
                ></S.Email>
                <S.Password
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                                .replaceAll('<', '&lt;')
                                .replaceAll('>', '&gt;'),
                        )
                    }
                    placeholder="Пароль"
                ></S.Password>
                {error ? <S.Error>{error}</S.Error> : null}
                <S.ButtonEnter onClick={handelAuthorization}>
                    Войти
                </S.ButtonEnter>
                <S.ButtonReg onClick={() => navigate(`/reg`)}>
                    Зарегистрироваться
                </S.ButtonReg>
            </S.Container>
        </S.Page>
    )
}