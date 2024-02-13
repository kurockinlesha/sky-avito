import * as S from './editAdvert.style'
import PropTypes from 'prop-types'
import React from 'react'
const { useState, useEffect } = React
import { useDispatch } from 'react-redux'
import { getProducts } from '../api/api'
import { setProducts } from '../../store/slices/avito'
import {
    editAdvert,
    addImage,
    baseUrl,
    deleteImage,
} from '../../components/api/api'

export const EditAdvert = ({ switchModal, editModal, dataAdvert }) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(dataAdvert.title)
    const [description, setDescription] = useState(dataAdvert.description)
    const [price, setPrice] = useState(dataAdvert.price)
    const [activeButton, setActiveButton] = useState(false)
    const [images, setImages] = useState([])
    const [imagesUrl, setImagesUrl] = useState([])
    const [imagesOld, setImagesOld] = useState(dataAdvert.images)
    const [forDelete, setForDelete] = useState([])

    useEffect(() => {
        name !== dataAdvert.title ||
        description !== dataAdvert.description ||
        price !== dataAdvert.price ||
        images.length !== 0 ||
        forDelete.length !== 0
            ? setActiveButton(true)
            : setActiveButton(false)
    }, [name, description, price, images, forDelete])

    const handleAddAdvert = () => {
        editAdvert(name, description, price, dataAdvert.id).then((data) => {
            if (images.length > 0) {
                for (let index = 0; index < images.length; index++) {
                    addImage(data.id, images[index]).then(() => {
                        if (index === images.length - 1) {
                            switchModal(false)
                            getProducts().then((data) => {
                                dispatch(setProducts(data))
                                window.location.reload()
                            })
                        }
                    })
                }
            } else {
                switchModal(false)
                getProducts().then((data) => {
                    dispatch(setProducts(data))
                })
            }

            console.log(data.id)
        })
    }

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const newImage = e.target.files[0]
            const url = URL.createObjectURL(newImage)
            setImages([...images, newImage])
            setImagesUrl([...imagesUrl, url])
        }
    }

    const handleDeleteImage = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        const updatedImages = [...imagesOld]
        updatedImages.splice(i, 1)
        setImagesOld(updatedImages)
        setForDelete([...forDelete, imagesOld[i].url])
    }

    const handleDeleteImageApi = () => {
        if (forDelete.length > 0) {
            for (let index = 0; index < forDelete.length; index++) {
                deleteImage(forDelete[index], dataAdvert.id).then(() => {
                    if (index === forDelete.length - 1) {
                        switchModal(false)
                        getProducts().then((data) => {
                            dispatch(setProducts(data))
                            window.location.reload()
                        })
                    }
                })
            }
        }
    }

    const imagesBox = []
    for (let i = 0; i < 5; i++) {
        imagesBox.push(
            <label key={i}>
                <S.Image
                    style={{ display: 'none' }}
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                ></S.Image>
                {i < imagesOld.length ? (
                    <>
                        <S.SelectedImage
                            src={baseUrl + imagesOld[i].url}
                        ></S.SelectedImage>
                        <S.DeleteButton
                            onClick={(e) => handleDeleteImage(e, i)}
                        >
                            Удалить
                        </S.DeleteButton>
                    </>
                ) : (
                    <S.SelectedImage
                        src={
                            imagesUrl[i - imagesOld.length]
                                ? imagesUrl[i - imagesOld.length]
                                : '/img/addImage.svg'
                        }
                    ></S.SelectedImage>
                )}
            </label>,
        )
    }

    return (
        <S.Page $activeModal={editModal}>
            <S.Modal>
                <S.Top>
                    <S.Tittle>Редактировать объявление</S.Tittle>
                    <S.ButtonClose
                        src="/img/close.svg"
                        onClick={() => {
                            switchModal(false)
                            setActiveButton(false)
                            setImagesOld(dataAdvert.images)
                            setName(dataAdvert.title)
                            setDescription(dataAdvert.description)
                            setPrice(dataAdvert.price)
                            setForDelete([])
                            setImagesUrl([])
                            setImages([])
                        }}
                    ></S.ButtonClose>
                </S.Top>
                <S.NameSection>Название</S.NameSection>
                <S.InputName
                    value={name}
                    placeholder="Введите название"
                    onChange={(e) => setName(e.target.value)}
                ></S.InputName>
                <S.NameSection>Описание</S.NameSection>
                <S.InputDescription
                    value={description}
                    placeholder="Введите описание"
                    onChange={(e) => setDescription(e.target.value)}
                ></S.InputDescription>
                <S.NameSection>
                    Фотографии товара <span>не более 5 фотографий</span>
                </S.NameSection>
                <S.DopImage>{imagesBox}</S.DopImage>
                <S.NameSection>Цена</S.NameSection>
                <S.BoxInput>
                    <S.InputPrice
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></S.InputPrice>
                </S.BoxInput>
                <S.ButtonModal
                    $activeButton={activeButton}
                    onClick={() => {
                        handleAddAdvert()
                        handleDeleteImageApi()
                    }}
                >
                    Сохранить
                </S.ButtonModal>
            </S.Modal>
        </S.Page>
    )
}
EditAdvert.propTypes = {
    switchModal: PropTypes.func.isRequired,
    editModal: PropTypes.bool.isRequired,
    dataAdvert: PropTypes.object.isRequired,
}