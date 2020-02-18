import React from "react";
import {NavLink} from "react-router-dom";

import css from './HeaderStatic.module.css'
import MenuStatic from "../MenuStatic/MenuStatic";

const HeaderStatic = () => {

  return (
    <div className={css.container}>
      <div className={css.headerNav}>
        {/*<div className={css.logo} />*/}
        <NavLink
          to='/home'
          className={css.logo}
        >
        </NavLink>
        <NavLink
          to='/home'
          className={css.name}
        >
          markeb overseas fze
        </NavLink>
      </div>
      <MenuStatic/>
    </div>
  )
}

export default HeaderStatic