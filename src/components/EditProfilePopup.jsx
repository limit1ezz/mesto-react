import React from 'react'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name)
      setDescription(currentUser.about)
    }
  }, [currentUser])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name,
      about: description
    })
  }

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'edit-profile'}
      buttonText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='form__label' aria-label='Имя пользователя'>
        <input
          onChange={handleChangeName}
          value={name}
          type='text'
          className='form__input form__input_type_user-name'
          id='user-name-input'
          name='userName'
          autoComplete='off'
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          required
        />
      </label>
      <span className='form__error-message user-name-input-error'></span>
      <label className='form__label' aria-label='Описание деятельности'>
        <input
          onChange={handleChangeDescription}
          value={description}
          type='text'
          className='form__input form__input_type_job-description'
          id='job-description-input'
          name='jobDescription'
          autoComplete='off'
          placeholder='Описание деятельности'
          minLength='2'
          maxLength='200'
          required
        />
      </label>
      <span className='form__error-message job-description-input-error'></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup
