import React from 'react'
import './header.style.scss';
import { ReactComponent as Logo } from '../../assests/crown.svg'

import { Link } from 'react-router-dom'

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/shop'>
        contact
      </Link>
    </div>
  </div>
)

export default Header;