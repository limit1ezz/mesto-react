import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import EditAvatarPopup from './EditAvatarPopup'
import EditProfilePopup from './EditProfilePopup'

import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState()
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfo = await api.getUserInfo()
        setCurrentUser(userInfo)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserInfo()
  }, [])

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

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id)

    api.changeLikeCardStatus(card._id, !isLiked).then(newCard => {
      setCards(state => state.map(c => (c._id === card._id ? newCard : c)))
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(message => {
      setCards(state => state.filter(c => c._id !== card._id))
    })
  }

  function handleUpdateUser(info) {
    api.updateUserInfo(info).then(user => {
      setCurrentUser(user)
      closeAllPopups()
    })
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar).then(user => {
      setCurrentUser(user)
      closeAllPopups()
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='wrapper'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          title={'Новое место'}
          name={'add-photo-card'}
          buttonText={'Создать'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className='form__label' aria-label='Название места'>
            <input
              type='text'
              className='form__input form__input_type_place-name'
              id='place-name-input'
              name='placeName'
              autoComplete='off'
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
              autoComplete='off'
              placeholder='Ссылка на картинку'
              required
            />
          </label>
          <span className='form__error-message image-link-input-error'></span>
        </PopupWithForm>

        <PopupWithForm
          title={'Вы уверены?'}
          name={'delete-confirmation'}
          buttonText={'Да'}
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
