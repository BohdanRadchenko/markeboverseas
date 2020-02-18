import React from "react";

import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.container }>
      <div className={css.footer}>
        <p>
          info@markeboverseas.com
        </p>
        <p>
          Copyright (c) 2020 - markeb overseas fze
        </p>
      </div>
    </div>
  )
}

export default Footer