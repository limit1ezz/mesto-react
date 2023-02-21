import headerLogo from '../images/header-logo.svg'

function App() {
  return (
    <>
      <div className='wrapper'>
        <header className='page-header wrapper__page-header'>
          <a className='page-header__logo logo' href='/'>
            <img className='logo__image' src={headerLogo} alt='Логотип сайта' />
          </a>
        </header>

        <main className='page-content wrapper__page-content'>
          <section className='profile' aria-label='Информация о пользователе'>
            <div className='profile__inner'>
              <div className='profile__image-box'>
                <img
                  className='profile__image'
                  src="<%=require('../images/profile-photo.jpg')%>"
                  alt='Аватар пользователя'
                />
                <div className='profile__overlay'></div>
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
                ></button>
              </div>
              <button
                type='button'
                className='profile__add-photo-card'
                aria-label='Добавить карточку с
              изображением'
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

        <footer className='page-footer wrapper__page-footer'>
          <p className='page-footer__copyright'>&copy; 2022. Cyrill Galkin</p>
        </footer>

        <div className='popup popup_type_edit-profile'>
          <div className='popup__container'>
            <button
              type='button'
              className='popup__close-btn'
              aria-label='Закрыть окно'
            ></button>
            <h2 className='popup__title'>Редактировать профиль</h2>
            <form
              className='popup__form form form_edit-profile'
              name='editProfile'
              novalidate
            >
              <label className='form__label' aria-label='Имя пользователя'>
                <input
                  type='text'
                  className='form__input form__input_type_user-name'
                  id='user-name-input'
                  name='userName'
                  autocomplete='off'
                  placeholder='Имя'
                  minLength='2'
                  maxLength='40'
                  required
                />
              </label>
              <span className='form__error-message user-name-input-error'></span>
              <label className='form__label' aria-label='Описание деятельности'>
                <input
                  type='text'
                  className='form__input form__input_type_job-description'
                  id='job-description-input'
                  name='jobDescription'
                  autocomplete='off'
                  placeholder='Описание деятельности'
                  minLength='2'
                  maxLength='200'
                  required
                />
              </label>
              <span className='form__error-message job-description-input-error'></span>
              <button type='submit' className='form__button'>
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_add-photo-card'>
          <div className='popup__container'>
            <button
              type='button'
              className='popup__close-btn'
              aria-label='Закрыть окно'
            ></button>
            <h2 className='popup__title'>Новое место</h2>
            <form
              className='popup__form form form_add-photo-card'
              name='addPhotoCard'
              novalidate
            >
              <label className='form__label' aria-label='Название места'>
                <input
                  type='text'
                  className='form__input form__input_type_place-name'
                  id='place-name-input'
                  name='placeName'
                  autocomplete='off'
                  placeholder='Название'
                  minLength='2'
                  maxLength='30'
                  required
                />
              </label>
              <span className='form__error-message place-name-input-error'></span>
              <label className='form__label' aria-label='Ссылка на картинку'>
                <input
                  type='url'
                  className='form__input form__input_type_image-link'
                  id='image-link-input'
                  name='imageLink'
                  autocomplete='off'
                  placeholder='Ссылка на картинку'
                  required
                />
              </label>
              <span className='form__error-message image-link-input-error'></span>
              <button type='submit' className='form__button'>
                Создать
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_delete-confirmation'>
          <div className='popup__container'>
            <button
              type='button'
              className='popup__close-btn'
              aria-label='Закрыть окно'
            ></button>
            <h2 className='popup__title'>Вы уверены?</h2>
            <form
              className='popup__form popup__form_type_confirmation form form_delete-confirmation'
              name='delete-confirmation'
              novalidate
            >
              <button type='submit' className='form__button'>
                Да
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_update-avatar'>
          <div className='popup__container'>
            <button
              type='button'
              className='popup__close-btn'
              aria-label='Закрыть окно'
            ></button>
            <h2 className='popup__title'>Обновить аватар</h2>
            <form
              className='popup__form form form_update-avatar'
              name='updateAvatar'
              novalidate
            >
              <label className='form__label' aria-label='Ссылка на картинку'>
                <input
                  type='url'
                  className='form__input form__input_type_avatar-link'
                  id='avatar-link-input'
                  name='avatarLink'
                  autocomplete='off'
                  placeholder='Ссылка на картинку'
                  required
                />
              </label>
              <span className='form__error-message avatar-link-input-error'></span>
              <button type='submit' className='form__button'>
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_image'>
          <div className='popup__container popup__container_type_image'>
            <button
              type='button'
              className='popup__close-btn'
              aria-label='Закрыть окно'
            ></button>
            <figure className='image-card'>
              <img className='image-card__photo' src='#' alt='#' />
              <figcaption className='image-card__caption'></figcaption>
            </figure>
          </div>
        </div>

        <template id='photo-card'>
          <li className='photos__item'>
            <article className='photo-card'>
              <button
                type='button'
                className='photo-card__delete'
                aria-label='Поставить лайк'
              ></button>
              <img src='#' alt='#' className='photo-card__image' />
              <div className='photo-card__content'>
                <h2 className='photo-card__title'></h2>
                <div className='photo-card__like-box'>
                  <button
                    type='button'
                    className='photo-card__like'
                    aria-label='Поставить лайк'
                  ></button>
                  <span className='photo-card__count'></span>
                </div>
              </div>
            </article>
          </li>
        </template>
      </div>
    </>
  )
}

export default App
