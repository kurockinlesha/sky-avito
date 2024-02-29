import * as S from './main.style';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../api/api';
import { CardProduct } from '../../components/cardProduct/cardProduct';

export const Main = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const productsState = useSelector((state) => state.products.products);
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [productsHtml, setProductsHtml] = useState([]);

    useEffect(() => {
        getHtml(productsState);
    }, [productsState]);

    const getHtml = (products) => {
        let result = products.map((product) => (
            <CardProduct
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                city={product.user?.city}
                date={product.user?.sells_from}
                image={product.images?.length ? baseUrl + product.images[0].url : '/img/notImage.png'}
            />
        ));
        setProductsHtml(result);
    };

    const search = (text) => {
        let filter = productsState.filter((product) => product.title.toLowerCase().includes(text.toLowerCase()));
        getHtml(filter);
        console.log(filter);
    };

    return (
        <>
            <S.Header>
                {isLoggedIn ? (
                    <>
                        <S.ButtonHeader onClick={() => navigate(`/add-advert`)}>Разместить объявление</S.ButtonHeader>
                        <S.ButtonHeader onClick={() => navigate(`/profile`)}>Личный кабинет</S.ButtonHeader>
                        <S.ButtonHeader onClick={() => {
                            // Здесь должна быть логика выхода из системы
                            console.log('Выход из системы');
                        }}>Выход</S.ButtonHeader>
                    </>
                ) : (
                    <S.ButtonHeader onClick={() => navigate(`/login`)}>Вход в личный кабинет</S.ButtonHeader>
                )}
            </S.Header>
            <S.SearchMain>
                <S.LogMain src="/img/LogoMain.svg"></S.LogMain>
                <S.Search
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Поиск по объявлениям"
                ></S.Search>
                <S.SearchHeader onClick={() => search(searchText)}>Найти</S.SearchHeader>
            </S.SearchMain>
            <S.TitleMain>Объявления</S.TitleMain>
            <S.CardsBox>{productsHtml}</S.CardsBox>
        </>
    );
};
