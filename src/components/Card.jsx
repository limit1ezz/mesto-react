import React from 'react'

function Card({ card, onCardClick }) {
  return (
    <li className='photos__item'>
      <article className='photo-card'>
        <button
          type='button'
          className='photo-card__delete'
          aria-label='Поставить лайк'
        ></button>
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
              className='photo-card__like'
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
