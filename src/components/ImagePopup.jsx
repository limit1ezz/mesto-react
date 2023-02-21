import React from 'react'

function ImagePopup() {
  return (
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
  )
}

export default ImagePopup
