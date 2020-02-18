import React from "react";
import {Element} from 'react-scroll'
import css from './GoogleMaps.module.css'

const GoogleMaps = () => {
  return (
    <Element name="map" className="element">
      <div className={css.container}>
        <iframe
          className={css.frame}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40641.85072067571!2d55.97117231298984!3d25.79478631119981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67131f14a49b1%3A0xd3b5ffc06b24ab09!2sRas%20Al%20Khaimah%20Economic%20Zone%20-%20RAKEZ!5e0!3m2!1sru!2sua!4v1581981656427!5m2!1sru!2sua"
          // width="600"
          // height="450"
          frameBorder="0"
          style={{border : 0,}}
          allowFullScreen="">
        </iframe>
      </div>
    </Element>
  )
}

export default GoogleMaps