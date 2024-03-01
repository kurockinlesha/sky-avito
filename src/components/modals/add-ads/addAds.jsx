import { useEffect, useState } from "react";
import { getTokenFromLocalStorage, updateToken } from "../../../api/api";
import { useGetAddAdsMutation } from "../../../store/services/auth";
import * as T from "./addAds.styled";

export const AddAds = ({ setOpenFormAddAds }) => {
  const [postAdsText, { isError }] = useGetAddAdsMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isSaveButtonActive, setSaveButtonActive] = useState(false);
  const [error, setError] = useState(null);

  const closeForm = () => {
    setOpenFormAddAds(false);
  };
  const handleAdTitleChange = (event) => {
    setTitle(event.target.value);
    setSaveButtonActive(true);
  };

  const handleAdDescriptionChange = (event) => {
    setDescription(event.target.value);
    setSaveButtonActive(true);
  };

  const handleAdPriceChange = (event) => {
    setPrice(event.target.value);
    setSaveButtonActive(true);
  };

  const handleClickPublic = async (event) => {
    event.preventDefault();
    if (!title && !description && !price) {
      setError("Заполните все поля");
    }
    postAdsText({
      token: getTokenFromLocalStorage(),
      ads: {
        title: title,
        description: description,
        price: price,
      },
    }).then(() => closeForm());
  };

  const switchButtonActive = () => {
    if (title.length || description.length || price.length) {
      return setSaveButtonActive(true);
    }
    return setSaveButtonActive(false);
  };

  useEffect(() => {
    if (isError.status === 401) {
      updateToken();
      postAdsText({
        token: getTokenFromLocalStorage(),
        ads: { title: title, description: description, price: price },
      });
    }

    switchButtonActive();
  }, [isError, title, description, price]); // eslint-disable-line

  return (
    <T.Wrapper>
      <T.ContainerBg>
        <T.ModalBlock>
          <T.ModalContent>
            <T.ModalTitle>Новое объявление</T.ModalTitle>
            <T.ModalBtnClose>
              <T.ModalBtnCloseLine onClick={closeForm}></T.ModalBtnCloseLine>
            </T.ModalBtnClose>
            <T.ModalFormNewArt id="formNewArt" action="#">
              <T.FormNewArtBlock>
                <T.FormNewArtLabel htmlFor="name">Название</T.FormNewArtLabel>
                <T.FormNewArtInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  onChange={(event) => handleAdTitleChange(event)}
                />
              </T.FormNewArtBlock>
              <T.FormNewArtBlock>
                <T.FormNewArtLabel htmlFor="text">Описание</T.FormNewArtLabel>
                <T.FormNewArtArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  onChange={handleAdDescriptionChange}
                ></T.FormNewArtArea>
              </T.FormNewArtBlock>
              <T.FormNewArtBlockPrice>
                <T.FormNewArtLabel htmlFor="price">Цена</T.FormNewArtLabel>
                <T.FormNewArtInputPrice
                  type="text"
                  name="price"
                  id="formName"
                  onChange={(event) => handleAdPriceChange(event)}
                />
                <T.FormNewArtInputPriceCover></T.FormNewArtInputPriceCover>
              </T.FormNewArtBlockPrice>
              {error && <T.Error>{error}</T.Error>}
              <T.FormNewArtBtnPub
                id="btnPublish"
                disabled={!isSaveButtonActive}
                onClick={(event) => handleClickPublic(event)}
              >
                Опубликовать
              </T.FormNewArtBtnPub>
            </T.ModalFormNewArt>
          </T.ModalContent>
        </T.ModalBlock>
      </T.ContainerBg>
    </T.Wrapper>
  );
};
