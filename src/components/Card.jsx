import React, { useContext } from 'react'
import { CurrentUserContext } from './contexts/CurrentUserContext'

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.some(user => user._id === currentUser._id)

  const cardLikeButtonClassName = `photo-card__like ${
    isLiked && 'photo-card__like_active'
  }`

  return (
    <li className='photos__item'>
      <article className='photo-card'>
        {isOwn && (
          <button
            type='button'
            className='photo-card__delete'
            aria-label='Удалить карточку'
            // onClick={handleDeleteClick}
          />
        )}

        <img
          src={card.link}
          alt={card.name}
          className='photo-card__image'
          onClick={() => onCardClick(card)}
        />
        <div className='photo-card__content'>
          <h2 className='photo-card__title'>{card.name}</h2>
          <div className='photo-card__like-box'>
            <button
              type='button'
              className={cardLikeButtonClassName}
              aria-label='Поставить лайк'
            ></button>
            <span className='photo-card__count'>{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card
