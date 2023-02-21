import React from 'react'
import headerLogo from '../images/header-logo.svs'

function Header() {
  return (
    <header className='page-header wrapper__page-header'>
      <a className='page-header__logo logo' href='/'>
        <img className='logo__image' src={headerLogo} alt='Логотип сайта' />
      </a>
    </header>
  )
}

export default Header
