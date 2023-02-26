import React, { useContext, useEffect, useState } from 'react'
import { api } from '../utils/api'
import Card from './Card'
import { CurrentUserContext } from './contexts/CurrentUserContext'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([])

  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    async function fetchCards() {
      try {
        const initialCards = await api.getInitialCards()
        setCards(initialCards)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCards()
  }, [])

  return (
    <main className='page-content wrapper__page-content'>
      <section className='profile' aria-label='Информация о пользователе'>
        <div className='profile__inner'>
          <div className='profile__image-box'>
            <img
              className='profile__image'
              src={currentUser?.avatar}
              alt='Аватар пользователя'
            />
            <button
              type='button'
              className='profile__overlay'
              aria-label='Изменить фото профиля'
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className='profile__info'>
            <div className='profile__content'>
              <h1 className='profile__name'>{currentUser?.name}</h1>
              <p className='profile__description'>{currentUser?.about}</p>
            </div>
            <button
              type='button'
              className='profile__edit'
              aria-label='Изменить профиль'
              onClick={onEditProfile}
            ></button>
          </div>
          <button
            type='button'
            className='profile__add-photo-card'
            aria-label='Добавить карточку с
              изображением'
            onClick={onAddPlace}
          ></button>
        </div>
      </section>

      <section
        className='photos'
        aria-label='Коллекция фотографий пользователя'
      >
        <ul className='photos__inner'>
          {cards &&
            cards.map(card => (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
