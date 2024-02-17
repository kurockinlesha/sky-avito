import * as S from './reg.style'
import React from 'react'
const { useState, useEffect } = React
import { registration } from '../../api/api'
import { useNavigate } from 'react-router-dom'

export const Reg = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [city, setCity] = useState('')
    const [error, setError] = useState(null)

    const handelRegistration = () => {
        if (password === repeatPassword) {
            registration(email, password, name, surname, city).then(
                (response) => {
                    console.log(response)
                    if (response.detail) {
                        setError(response.detail[0].msg)
                    }
                    if (response.success) {
                        navigate(`/auth`)
                    }
                    if (response.message) {
                        setError('Данный email занят')
                    }
                },
            )
        } else {
            setError('Не совпадают пароли')
        }
    }

    useEffect(() => {
        setError(null)
    }, [email, password])

    return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.InputBox>
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
                    <S.RepeatPassword
                        onChange={(e) =>
                            setRepeatPassword(
                                e.target.value
                                    .replaceAll('<', '&lt;')
                                    .replaceAll('>', '&gt;'),
                            )
                        }
                        placeholder="Повторите пароль"
                    ></S.RepeatPassword>
                    <S.Name
                        onChange={(e) =>
                            setName(
                                e.target.value
                                    .replaceAll('<', '&lt;')
                                    .replaceAll('>', '&gt;'),
                            )
                        }
                        placeholder="Имя (необязательно)"
                    ></S.Name>
                    <S.Surname
                        onChange={(e) =>
                            setSurname(
                                e.target.value
                                    .replaceAll('<', '&lt;')
                                    .replaceAll('>', '&gt;'),
                            )
                        }
                        placeholder="Фамилия (необязательно)"
                    ></S.Surname>
                    <S.City
                        onChange={(e) =>
                            setCity(
                                e.target.value
                                    .replaceAll('<', '&lt;')
                                    .replaceAll('>', '&gt;'),
                            )
                        }
                        placeholder="Город (необязательно)"
                    ></S.City>
                </S.InputBox>
                {error ? <S.Error>{error}</S.Error> : null}
                <S.ButtonReg onClick={handelRegistration}>
                    Зарегистрироваться
                </S.ButtonReg>
            </S.Container>
        </S.Page>
    )
}