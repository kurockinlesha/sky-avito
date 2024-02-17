import * as S from './profileSeller.style'
import React from 'react'
const { useState, useEffect } = React
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CardProduct } from '../../components/cardProduct/cardProduct'
import { ProfileHeader } from '../../components/profileHeader/profileHeader'
import { ShowTelButton } from '../../components/showTelButton/showTelButton'
import { AddAdvert } from '../../components/addAdvert/addAdvert'
import { baseUrl } from '../../api/api'
import { formatToDate } from '../../utilits/dateFormate'

export const ProfileSeller = () => {
    const { id } = useParams()

    const productsState = useSelector((state) => state.products.products)

    const [productsHtml, setProductsHtml] = useState(null)
    const [user, setUser] = useState(null)

    const [addModal, setAddModal] = useState(false)

    let filter = []

    useEffect(() => {
        filter = productsState.filter(
            (product) => product.user_id === Number(id),
        )

        if (filter.length !== 0) {
            setUser(filter[0].user)
        }

        let result = filter.map((product) => (
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
    }, [productsState])

    return (
        <>
            {user && (
                <>
                    <AddAdvert addModal={addModal} switchModal={setAddModal} />
                    <ProfileHeader switchModal={setAddModal} />
                    <S.Tittle>Профиль продавца</S.Tittle>
                    <S.Seller>
                        <S.ProfilePhoto
                            src={baseUrl + user.avatar}
                        ></S.ProfilePhoto>
                        <S.ProfileData>
                            <S.SellerName>{user.name}</S.SellerName>
                            <S.SellerCity>{user.city}</S.SellerCity>
                            <S.SellerInfo>
                                Продает товары{' '}
                                {formatToDate(user.sells_from).toLowerCase()}
                            </S.SellerInfo>
                            <ShowTelButton phone={user.phone} />
                        </S.ProfileData>
                    </S.Seller>
                    <S.SectionName>Товары продавца</S.SectionName>
                    <S.CardsBox>{productsHtml}</S.CardsBox>
                </>
            )}
        </>
    )
}