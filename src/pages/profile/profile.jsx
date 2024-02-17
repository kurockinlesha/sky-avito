import * as S from './profile.style'
import React from 'react'
const { useEffect, useState } = React
import { useLocation } from 'react-router-dom'
import { ProfileHeader } from '../../components/profileHeader/profileHeader'
import {
    getMyAdverts,
    getMyData,
    updateUser,
    baseUrl,
    addAvatar,
} from '../../api/api'
import { AddAdvert } from '../../components/addAdvert/addAdvert'
import { CardProduct } from '../../components/cardProduct/cardProduct'

export const Profile = () => {
    const location = useLocation()

    const [activeButton, setActiveButton] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [productsHtml, setProductsHtml] = useState([])
    const [avatar, setAvatar] = useState(null)

    const handleUserData = () => {
        getMyData().then((data) => {
            setUser(data)
            setName(data.name || '')
            setSurname(data.surname || '')
            setCity(data.city || '')
            setPhone(data.phone || '')
        })
    }

    const handleMyAdvert = () => {
        getMyAdverts().then((data) => {
            getHtml(data)
        })
    }

    const getHtml = (products) => {
        let result = products.map((product) => (
            <CardProduct
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                city={product.user?.city}
                date={product.user?.sells_from}
                image={
                    product.images?.length
                        ? baseUrl + product.images[0].url
                        : '/img/notImage.png'
                }
            />
        ))
        setProductsHtml(result)
    }

    const handleUpdate = async () => {
        const data = await updateUser(name, surname, city, phone)
        if (data) {
            handleUserData()
            handleMyAdvert()
            setActiveButton(true)
        }
    }

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const newAvatar = e.target.files[0]
            setAvatar(newAvatar)
        }
    }

    useEffect(() => {
        if (location.pathname === '/profile') {
            handleMyAdvert()
            handleUserData()
        }
    }, [location])

    useEffect(() => {
        if (avatar) {
            addAvatar(avatar).then(() => {
                handleUserData()
            })
        }
    }, [avatar])

    useEffect(() => {
        if (
            name !== user.name ||
            surname !== user.surname ||
            city !== user.city ||
            phone !== user.phone
        ) {
            setActiveButton(false)
        } else {
            setActiveButton(true)
        }
    }, [name, surname, city, phone])

    return (
        <S.Page>
            <AddAdvert
                addModal={addModal}
                switchModal={setAddModal}
                handleMyAdvert={handleMyAdvert}
            />
            <ProfileHeader switchModal={setAddModal} />
            <S.ProfileWelcome>Здравствуйте, {user.name}!</S.ProfileWelcome>
            <S.SectionName>Настройки профиля</S.SectionName>
            <S.Profile>
                <S.ProfilePhoto>
                    <S.Photo
                        src={
                            user.avatar
                                ? baseUrl + user.avatar
                                : '/img/notImage.png'
                        }
                    ></S.Photo>
                    <label>
                        Заменить
                        <S.ChangePhoto
                            style={{ display: 'none' }}
                            type="file"
                            onChange={handleAvatarChange}
                            accept="image/*"
                        ></S.ChangePhoto>
                    </label>
                </S.ProfilePhoto>
                <S.ProfileData>
                    <S.InputBoxName>
                        <S.InputName>Имя</S.InputName>
                        <S.Input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(
                                    e.target.value
                                        .replaceAll('<', '&lt;')
                                        .replaceAll('>', '&gt;'),
                                )
                            }
                        ></S.Input>
                    </S.InputBoxName>
                    <S.InputBoxSurname>
                        <S.InputName>Фамилия</S.InputName>
                        <S.Input
                            type="text"
                            value={surname}
                            onChange={(e) =>
                                setSurname(
                                    e.target.value
                                        .replaceAll('<', '&lt;')
                                        .replaceAll('>', '&gt;'),
                                )
                            }
                        ></S.Input>
                    </S.InputBoxSurname>
                    <S.InputBoxCity>
                        <S.InputName>Город</S.InputName>
                        <S.Input
                            type="text"
                            value={city}
                            onChange={(e) =>
                                setCity(
                                    e.target.value
                                        .replaceAll('<', '&lt;')
                                        .replaceAll('>', '&gt;'),
                                )
                            }
                        ></S.Input>
                    </S.InputBoxCity>
                    <S.InputBoxTel>
                        <S.InputName>Телефон</S.InputName>
                        <S.Input
                            type="tel"
                            value={phone}
                            onChange={(e) =>
                                setPhone(
                                    e.target.value
                                        .replaceAll('<', '&lt;')
                                        .replaceAll('>', '&gt;'),
                                )
                            }
                        ></S.Input>
                    </S.InputBoxTel>
                    <S.SaveButton
                        onClick={handleUpdate}
                        disabled={activeButton}
                    >
                        Сохранить
                    </S.SaveButton>
                </S.ProfileData>
            </S.Profile>
            <S.SectionName>Мои товары</S.SectionName>
            <S.CardsBox>{productsHtml}</S.CardsBox>
        </S.Page>
    )
}