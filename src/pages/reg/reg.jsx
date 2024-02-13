import * as S from './reg.style'
import React from 'react'
const { useState } = React
import { registration } from '../../components/api/api'

export const Reg = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [city, setCity] = useState('')

    const handelRegistration = () => {
        if (password === repeatPassword) {
            registration(email, password)
        }

        console.log(email, password, repeatPassword, name, surname, city)
    }

    return (
        <S.Page>
            <S.Container>
                <S.Logo src="/img/logo.svg"></S.Logo>
                <S.InputBox>
                    <S.Email
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    ></S.Email>
                    <S.Password
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Пароль"
                    ></S.Password>
                    <S.RepeatPassword
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder="Повторите пароль"
                    ></S.RepeatPassword>
                    <S.Name
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Имя (необязательно)"
                    ></S.Name>
                    <S.Surname
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder="Фамилия (необязательно)"
                    ></S.Surname>
                    <S.City
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Город (необязательно)"
                    ></S.City>
                </S.InputBox>
                <S.ButtonReg onClick={handelRegistration}>
                    Зарегистрироваться
                </S.ButtonReg>
            </S.Container>
        </S.Page>
    )
}