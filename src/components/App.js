import React, { useEffect, useState } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { api } from '../utils/api'
import AddPlacePopup from './AddPlacePopup'
import ConfirmationPopup from './ConfirmationPopup'
import EditAvatarPopup from './EditAvatarPopup'
import EditProfilePopup from './EditProfilePopup'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])
  const [deletedCard, setDeletedCard] = useState({})

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

  function handleTrashButtonClick(card) {
    setIsConfirmationPopupOpen(true)
    setDeletedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsConfirmationPopupOpen(false)
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id)

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(c => (c._id === card._id ? newCard : c)))
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(state => state.filter(c => c._id !== card._id))
        closeAllPopups()
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleUpdateUser(info) {
    api
      .updateUserInfo(info)
      .then(user => {
        setCurrentUser(user)
        closeAllPopups()
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then(user => {
        setCurrentUser(user)
        closeAllPopups()
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleAddPlace(placeInfo) {
    api
      .addNewCard(placeInfo)
      .then(newCard => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(err => {
        console.log(err)
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
          onTrashClick={handleTrashButtonClick}
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

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
          onCardDelete={handleCardDelete}
          deletedCard={deletedCard}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
