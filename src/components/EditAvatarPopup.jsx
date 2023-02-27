import React, { useEffect } from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvatar({
      avatar: inputRef.current.value
    })
    inputRef.current.value = ''
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current.value = ''
    }
  }, [isOpen])

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'update-avatar'}
      buttonText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='form__label' aria-label='Ссылка на картинку'>
        <input
          ref={inputRef}
          type='url'
          className='form__input form__input_type_avatar-link'
          id='avatar-link-input'
          name='avatarLink'
          autoComplete='off'
          placeholder='Ссылка на картинку'
          required
        />
      </label>
      <span className='form__error-message avatar-link-input-error'></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
