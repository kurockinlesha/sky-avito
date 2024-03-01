import { useState } from "react";
import { ContentCard } from "../../components/cards/cards";
import { Footer } from "../../components/footer/footer";
import { MainHeader } from "../../components/header/header";
import { MainMenu } from "../../components/menu/menu";
import noAvatar from "../../img/myprofile.png";
import * as S from "../../App.style";
import * as T from "./sellerProfile.style";
import { apiHost } from "../../api/constants";

export const SellerProfile = ({ userProfile, isLoading }) => {
  const [showPhone, setShowPhone] = useState(false);
  const clickShowPhone = () => {
    setShowPhone(true);
  };

  const userProfilePhone = () => {
    return userProfile?.phone || "No phone number";
  };

  return (
    <>
      <MainHeader />
      <S.Main>
        {!isLoading ? (
          <T.MainContainer>
            <T.MainCenterBlock>
              <MainMenu />
              <T.MainH2>Профиль продавца</T.MainH2>
              <T.MainProfileSell>
                <T.ProfileSellContent>
                  <T.ProfileSellSeller>
                    <T.SellerLeft>
                      <T.SellerImg>
                        {userProfile?.avatar ? (
                          <T.SellerImgImg
                            src={`${apiHost}/${userProfile?.avatar}`}
                            alt="avatar"
                          />
                        ) : (
                          <T.SellerImgImg src={noAvatar} alt="avatar" />
                        )}
                      </T.SellerImg>
                    </T.SellerLeft>
                    <T.SellerRight>
                      <T.SellerTitle>{userProfile?.name}</T.SellerTitle>
                      <T.SellerCity>{userProfile?.city}</T.SellerCity>
                      <T.SellerInf>
                        Продает товары с{" "}
                        {new Date(userProfile?.sells_from).toLocaleString(
                          "ru",
                          {
                            year: "numeric",
                            month: "long",
                          }
                        )}
                      </T.SellerInf>

                      <T.SellerImgMobBlock>
                        <T.SellerImgMob>
                          <T.SellerImgMobImg src="#" alt="" />
                        </T.SellerImgMob>
                      </T.SellerImgMobBlock>

                      <T.ArticleBtn onClick={clickShowPhone}>
                        Показать телефон
                        <T.ArticleBtnSpan>
                          {!showPhone ? `+7 XXX XXX XX XX` : userProfilePhone()}
                        </T.ArticleBtnSpan>
                      </T.ArticleBtn>
                    </T.SellerRight>
                  </T.ProfileSellSeller>
                </T.ProfileSellContent>
              </T.MainProfileSell>
              <T.MainTitle>Товары продавца</T.MainTitle>
            </T.MainCenterBlock>
            <T.MainContent>
              <ContentCard userId={userProfile?.id} />
            </T.MainContent>
          </T.MainContainer>
        ) : (
          <T.MainH2>Профиль продавца загружается...</T.MainH2>
        )}
      </S.Main>
      <Footer />
    </>
  );
};
