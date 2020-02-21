import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerAction from '../../redux/controller/controllerActions'
// import menu from '../../assets/menu.json'
import css from './BurgerMenu.module.css'

const BurgerMenu = ({isOpen, handlerBurger}) => {


    const offset = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    const nav = document.querySelector(`.${css.container}`);
    if (nav) {
      if (isOpen) {
        if (offset > 200) {
          nav.className = `${css.container} ${css.navFixed}`
        } else {
          nav.className = `${css.container}`
        }
      }
    }
  })

  return (
    <div className={isOpen ? (offset > 200 ? css.navFixed : css.container) : css.containerNone}>
      {isOpen && (
        <nav className={isOpen ? css.burgerWrapper : css.burgerWrapperNone}>
          <ul className={css.menuList}>
            <li className={css.menuItem}>

              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/consulting/" >
                project management Consulting
              </NavLink>
            </li>

            {/*DROPDOWN*/}
            <li className={css.menuItem}>
              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/trading/" >
                general trading

              </NavLink>
              <ul className={css.dropdownList}>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading equipments
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading household items
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading cars and Auto Parts
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading pharmaceutical products
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading agricultural products
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading Foods
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    trading industries items
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    creating and testing it products
                  </NavLink>
                </li>
                <li className={css.dropdownItem}>
                  <NavLink className={css.menuHoverLink} activeClassName={css.activeLink}  to="/trading/" >
                    Trading computers and spare parts
                  </NavLink>
                </li>
              </ul>
            </li>



            <li className={css.menuItem}>
              <NavLink className={css.menuLink} activeClassName={css.activeLink}  to="/licenses/" >
                licenses
              </NavLink>
            </li>
          </ul>

        </nav>)}
    </div>
  )
}

const mSTP = state => ({
  isOpen : controllerSelectors.burgerMenu(state)
})

const mDTP = {
  handlerBurger : controllerAction.handlerBurger
}

export default connect(mSTP, mDTP)(BurgerMenu);
