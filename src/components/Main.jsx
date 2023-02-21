import React from 'react'

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className='page-content wrapper__page-content'>
      <section className='profile' aria-label='Информация о пользователе'>
        <div className='profile__inner'>
          <div className='profile__image-box'>
            <img
              className='profile__image'
              src="<%=require('../images/profile-photo.jpg')%>"
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
              <h1 className='profile__name'>Жак-Ив Кусто</h1>
              <p className='profile__description'>Исследователь океана</p>
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
