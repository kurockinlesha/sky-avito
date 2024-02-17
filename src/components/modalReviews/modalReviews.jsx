import * as S from './modalReviews.style'
import PropTypes from 'prop-types'
import { baseUrl, addReviews, getReviews } from '../../api/api'
import { formatReviewsDate } from '../../utilits/dateFormate'
import React from 'react'
const { useState, useEffect } = React

export const ModalReviews = ({
    reviewsModal,
    setReviewsModal,
    reviews,
    setReviews,
    id,
}) => {
    const [text, setText] = useState('')
    const [activeButton, setActiveButton] = useState(true)

    useEffect(() => {
        text !== '' ? setActiveButton(false) : setActiveButton(true)
    }, [text])

    const handleAddReviews = async () => {
        const data = await addReviews(Number(id), text)
        if (data) {
            const reviewsData = await getReviews(id)
            setReviews(reviewsData)
        }
        setText('')
    }

    return (
        <S.Page $activeModal={reviewsModal}>
            <S.Modal>
                <S.Reviews>
                    <S.Top>
                        <S.Tittle>Отзывы о товаре</S.Tittle>
                        <S.ButtonClose
                            src="/img/close.svg"
                            onClick={() => {
                                setReviewsModal(false)
                                setText('')
                            }}
                        ></S.ButtonClose>
                    </S.Top>
                    {localStorage.getItem('refToken') ? (
                        <>
                            <S.NameSection>Добавить отзыв</S.NameSection>
                            <S.InputName
                                placeholder="Введите отзыв"
                                value={text}
                                onChange={(e) =>
                                    setText(
                                        e.target.value
                                            .replaceAll('<', '&lt;')
                                            .replaceAll('>', '&gt;'),
                                    )
                                }
                            ></S.InputName>
                            <S.ButtonModal
                                onClick={() => {
                                    handleAddReviews()
                                }}
                                disabled={activeButton}
                            >
                                Опубликовать
                            </S.ButtonModal>
                        </>
                    ) : null}
                    {reviews.length > 0
                        ? reviews.map((review) => (
                              <S.Review key={review.id}>
                                  <S.ReviewsImage
                                      src={
                                          review.author.avatar
                                              ? baseUrl + review.author.avatar
                                              : '/img/notImage.png'
                                      }
                                  ></S.ReviewsImage>
                                  <S.ReviewMain>
                                      <S.ReviewsName>
                                          {review.author.name}{' '}
                                          <span>
                                              {formatReviewsDate(
                                                  review.created_on,
                                              )}
                                          </span>
                                      </S.ReviewsName>
                                      <S.ReviewText>
                                          Комментарий <p>{review.text}</p>
                                      </S.ReviewText>
                                  </S.ReviewMain>
                              </S.Review>
                          ))
                        : null}
                </S.Reviews>
            </S.Modal>
        </S.Page>
    )
}
ModalReviews.propTypes = {
    setReviewsModal: PropTypes.func.isRequired,
    setReviews: PropTypes.func.isRequired,
    reviewsModal: PropTypes.bool.isRequired,
    reviews: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
}