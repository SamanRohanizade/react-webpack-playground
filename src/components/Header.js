import React from 'react';
import classes from './Header.module.scss'

function Header({ children, underlined = false }) {
  let classNames = [
    classes.header,
    ...(underlined ? [classes.header__underlined] : [])
  ];

  return (
    <h1 className={classNames.join(' ')}>
      { children }
    </h1>
  )
}

export default Header;