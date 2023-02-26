import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = React.useState('')
  const [imageLink, setImageLink] = React.useState('')

  function handleChangePlaceName(e) {
    setPlaceName(e.target.value)
  }

  function handleChangeImageLink(e) {
    setImageLink(e.target.value)
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault()
    onAddPlace({
      name: placeName,
      link: imageLink
    })
    setPlaceName('')
    setImageLink('')
  }

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-photo-card'}
      buttonText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <label className='form__label' aria-label='Название места'>
        <input
          onChange={handleChangePlaceName}
          value={placeName}
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
          onChange={handleChangeImageLink}
          value={imageLink}
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
  )
}

export default AddPlacePopup
