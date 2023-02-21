import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const { name, about, avatar } = await api.getUserInfo()
        setUserName(name)
        setUserDescription(about)
        setUserAvatar(avatar)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <main className='page-content wrapper__page-content'>
      <section className='profile' aria-label='Информация о пользователе'>
        <div className='profile__inner'>
          <div className='profile__image-box'>
            <img
              className='profile__image'
              src={userAvatar}
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
              <h1 className='profile__name'>{userName}</h1>
              <p className='profile__description'>{userDescription}</p>
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
        <ul className='photos__inner'></ul>
      </section>
    </main>
  )
}

export default Main
