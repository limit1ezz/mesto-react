import React from 'react'

function PopupWithForm({ title, name, buttonText, children, isOpen, onClose }) {
  const popupClass = isOpen
    ? `popup popup_opened popup_type_${name}`
    : `popup popup_type_${name}`

  return (
    <div className={popupClass}>
      <div className='popup__container'>
        <button
          type='button'
          className='popup__close-btn'
          aria-label='Закрыть окно'
          onClick={onClose}
        ></button>
        <h2 className='popup__title'>{title}</h2>
        <form
          className={`popup__form form form_${name}`}
          name={name}
          noValidate
        >
          {children}
          <button type='submit' className='form__button'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
