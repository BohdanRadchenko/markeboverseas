import React from "react";
import HeaderStatic from "../HeaderStatic/HeaderStatic";
import Footer from "../Footer/Footer";

import css from './Licenses.module.css'

const Licenses = () => {
  return (
    <div className={css.container}>
      <HeaderStatic/>
      <div className={css.licensesWrapper}>
        <img
          className={css.img}
          src="../../assets/img/licenses/licenses_2019%20-%202020-1.jpg"
          alt=""/>
          <img
          className={css.img}
          src="../../assets/img/licenses/licenses_2019%20-%202020-2.jpg"
          alt=""/>
      </div>
      <Footer/>
    </div>
)
}

export default Licenses