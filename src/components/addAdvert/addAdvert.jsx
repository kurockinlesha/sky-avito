import * as S from './addAdvert.style';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts, createAdvert, addImage } from '../../api/api';
import { setProducts } from '../../store/slices/avito';

export const AddAdvert = ({ switchModal, addModal, handleMyAdvert }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [activeButton, setActiveButton] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);

    useEffect(() => {
        name !== '' && description !== '' && price !== ''
            ? setActiveButton(true)
            : setActiveButton(false);
    }, [name, description, price]);

    const handleAddAdvert = async () => {
        if (!name.trim() || !description.trim() || !price.trim()) {
            alert('Все поля должны быть заполнены!');
            return;
        }

        const data = await createAdvert(name, description, price);
        if (data) {
            const imageUploadPromises = images.map(image => addImage(data.id, image));
            await Promise.all(imageUploadPromises);

            switchModal(false);
            location.pathname === '/profile' ? handleMyAdvert() : null;
            getProducts().then((data) => {
                dispatch(setProducts(data));
            });
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const newImage = e.target.files[0];
            const url = URL.createObjectURL(newImage);
            setImages(images => [...images, newImage]);
            setImagesUrl(imagesUrl => [...imagesUrl, url]);
        }
    };

    const imagesBox = imagesUrl.map((url, index) => (
        <label key={index}>
            <S.Image
                style={{ display: 'none' }}
                type="file"
                onChange={handleImageChange}
                accept="image/*"
            />
            <S.SelectedImage src={url} />
        </label>
    ));

    return (
        <S.Page $activeModal={addModal}>
            <S.Modal>
                <S.Top>
                    <S.Tittle>Новое объявление</S.Tittle>
                    <S.ButtonClose
                        src="/img/close.svg"
                        onClick={() => {
                            switchModal(false);
                            setName('');
                            setDescription('');
                            setPrice('');
                            setImages([]);
                            setImagesUrl([]);
                        }}
                    />
                </S.Top>
                <S.NameSection>Название</S.NameSection>
                <S.InputName
                    value={name}
                    placeholder="Введите название"
                    onChange={(e) => setName(e.target.value)}
                />
                <S.NameSection>Описание</S.NameSection>
                <S.InputDescription
                    value={description}
                    placeholder="Введите описание"
                    onChange={(e) => setDescription(e.target.value)}
                />
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
                    />
                </S.BoxInput>
                <S.ButtonModal
                    $activeButton={activeButton}
                    onClick={handleAddAdvert}
                >
                    Опубликовать
                </S.ButtonModal>
            </S.Modal>
        </S.Page>
    );
};

AddAdvert.propTypes = {
    switchModal: PropTypes.func.isRequired,
    addModal: PropTypes.bool.isRequired,
    handleMyAdvert: PropTypes.func,
};
