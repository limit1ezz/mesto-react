import React from 'react'

function ImagePopup({ card, onClose }) {
  const popupClass = !!Object.keys(card).length
    ? `popup popup_opened popup_type_image`
    : `popup popup_type_image`
  return (
    <div className={popupClass}>
      <div className='popup__container popup__container_type_image'>
        <button
          type='button'
          className='popup__close-btn'
          aria-label='Закрыть окно'
          onClick={onClose}
        ></button>
        <figure className='image-card'>
          <img className='image-card__photo' src={card.link} alt={card.name} />
          <figcaption className='image-card__caption'>{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup
