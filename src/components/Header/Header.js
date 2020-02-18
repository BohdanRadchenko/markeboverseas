import React from "react";
import {NavLink} from "react-router-dom";
import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import css from './Header.module.css'

const Header = () => {

  window.addEventListener('scroll', () => {
    const header = document.querySelector(`.${css.container}`);
    if (header) {
      if(window.pageYOffset > 200){
        header.className = `${css.container} ${css.headerFixed}`
      } else{
        header.className = `${css.container}`
      }
    }
  })
  return (
   <div className={css.container}>
      <div className={css.headerNav}>
        <div className={css.logoWrapper}>
          <div className={css.logo} />
          <NavLink
            to='/home'
            className={css.name}
          >
            markeb overseas fze
          </NavLink>
        </div>

        <BurgerButton />
      </div>

      <div className={css.nav}>
        <BurgerMenu/>
      </div>

    </div>
  )
}

export default Header