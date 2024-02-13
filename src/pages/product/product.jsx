import * as S from './product.style'
import React from 'react'
const { useState, useEffect } = React
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProfileHeader } from '../../components/profileHeader/profileHeader'
import { ShowTelButton } from '../../components/showTelButton/showTelButton'
import { formatToDate, formatDate } from '../../utilits/dateFormate'
import { baseUrl, deleteAdvert } from '../../components/api/api'
import { AddAdvert } from '../../components/addAdvert/addAdvert'
import { EditAdvert } from '../../components/editAdvert/editAdvert'

export const Product = () => {
    const products = useSelector((state) => state.products.products)

    const { id } = useParams()
    const navigate = useNavigate()
    const userId = Number(localStorage.getItem('userId'))
    const sellerId = products.find((item) => item.id === Number(id))?.user_id

    const [imagesHtml, setImagesHtml] = useState([])
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [switchMainImage, setSwitchMainImage] = useState(0)

    let dataAdvert = products.filter((product) => product.id === Number(id))

    const handleDelete = () => {
        deleteAdvert(id).then(navigate(`/profile`))
    }

    const handleEdit = () => {
        setEditModal(true)
    }

    useEffect(() => {
        if (dataAdvert.length > 0 && dataAdvert[0].images) {
            const result = dataAdvert[0].images.map((image, index) => (
                <S.Image
                    onClick={() => {
                        setSwitchMainImage(index)
                    }}
                    key={image.id}
                    src={image.url ? baseUrl + image.url : '/img/notImage.png'}
                />
            ))
            setImagesHtml(result)
        }
    }, [products, id])

    return dataAdvert.length > 0 ? (
        <>
            <AddAdvert addModal={addModal} switchModal={setAddModal} />
            <EditAdvert
                editModal={editModal}
                switchModal={setEditModal}
                dataAdvert={dataAdvert[0]}
            />
            <ProfileHeader switchModal={setAddModal} />
            <S.Product>
                <S.ProductImage>
                    <S.MainImage
                        src={
                            dataAdvert[0].images.length >= 1
                                ? baseUrl +
                                  dataAdvert[0].images[switchMainImage].url
                                : '/img/notImage.png'
                        }
                    ></S.MainImage>
                    <S.DopImage>{imagesHtml}</S.DopImage>
                </S.ProductImage>
                <S.ProductInfo>
                    <S.ProductName>{dataAdvert[0].title}</S.ProductName>
                    <S.ProductDate>
                        {formatToDate(dataAdvert[0].created_on)}
                    </S.ProductDate>
                    <S.ProductCity>{dataAdvert[0].user.city}</S.ProductCity>
                    <S.ProductReviews>23 отзыва</S.ProductReviews>
                    <S.ProductPrice>
                        {dataAdvert[0].price.toLocaleString()} ₽
                    </S.ProductPrice>
                    {userId === sellerId ? (
                        <S.Buttons>
                            <S.ButtonEdit onClick={() => handleEdit()}>
                                Редактировать
                            </S.ButtonEdit>
                            <S.ButtonDelete onClick={() => handleDelete()}>
                                Снять с публикации
                            </S.ButtonDelete>
                        </S.Buttons>
                    ) : (
                        <ShowTelButton phone={dataAdvert[0].user.phone} />
                    )}
                    <S.ProductSeller>
                        <S.PhotoSeller
                            src={baseUrl + dataAdvert[0].user.avatar}
                        ></S.PhotoSeller>
                        <S.SellerInfo>
                            <S.SellerName
                                onClick={() =>
                                    navigate(
                                        `/profileSeller/${dataAdvert[0].user.id}`,
                                    )
                                }
                            >
                                {dataAdvert[0].user.name}
                            </S.SellerName>
                            <S.DateSale>
                                {formatDate(dataAdvert[0].user.sells_from)}
                            </S.DateSale>
                        </S.SellerInfo>
                    </S.ProductSeller>
                </S.ProductInfo>
            </S.Product>
            <S.Description>
                <h2>Описание товара</h2>
                <p>{dataAdvert[0].description}</p>
            </S.Description>
        </>
    ) : null
}