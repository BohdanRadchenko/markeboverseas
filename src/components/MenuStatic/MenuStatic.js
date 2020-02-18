import React from 'react';
import {NavLink} from "react-router-dom";
import css from './MenuStatic.module.css'

const MenuStatic = () => {
  return (
    <div className={css.container}>
          <nav className={css.navigation}>
          <ul className={css.menuList}>
            <li className={css.menuItem}>
              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/home/" >
                Home
              </NavLink>
              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/consulting/" >
                project management Consulting
              </NavLink>
            </li>
            <li className={css.menuItem}>
              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/trading/" >
                general trading
              </NavLink>
            </li>
            <li className={css.menuItem}>
              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/licenses/" >
                licenses
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default MenuStatic