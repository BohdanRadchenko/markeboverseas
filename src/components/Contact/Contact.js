import React from "react";
import {Element} from 'react-scroll'

import css from './Contact.module.css'

const Contact = () => {
  return (
    <Element name="contact" className="element">
      <div className={css.container}>
        <div className={css.info}>
          <img
            className={css.logo}
            width={300}
            height={300}
            src="../../assets/img/imgonline-com-ua-Transparent-backgr-koWNgmQvujzU12.png" alt=""/>
          <div className={css.desc}>
            <p className={css.parag}>
              MARKEB OVERSEAS FZE
            </p>
            <p className={css.parag}>
              B19_725 Emirates Islamic Bank Building
            </p>
            <p className={css.parag}>
              RAKEZ Business Zone – FZ, RAK, United Arab Emirates
            </p>
            <p className={css.parag}>
              Registration N 0000004023920
            </p>
            <p className={css.parag}>
              Email Olekcey2016@gmail.com
            </p>
            <p className={css.parag}>

              Tel +971507876809
            </p>
          </div>
        </div>

      </div>
    </Element>
  )
}

export default Contact