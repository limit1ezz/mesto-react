import React from 'react'
import PopupWithForm from './PopupWithForm'

function ConfirmationPopup({ onCardDelete, isOpen, onClose, deletedCard }) {
  function handleSubmit(e) {
    e.preventDefault()
    onCardDelete(deletedCard)
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={'Вы уверены?'}
      name={'delete-confirmation'}
      buttonText={'Да'}
    ></PopupWithForm>
  )
}

export default ConfirmationPopup
