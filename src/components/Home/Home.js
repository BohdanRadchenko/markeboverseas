import React from "react";
import  {Link} from 'react-scroll'
import Header from "../Header/Header";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import ContactUs from "../ContactUs/ContactUs";

import css from './Home.module.css'

const  Home = () =>  {

  window.addEventListener('scroll', () => {
    const link = document.querySelector(`.${css.link}`);
    if (link) {
      if(window.pageYOffset > 200){
        link.className = `${css.link} ${css.none}`
      } else{
        link.className = `${css.link}`
      }
    }
  })

    return (
      <div>
        <div className={css.parallaxWrapper}>
          <Header/>
          <div className={css.desc}>
            <h1 className={css.name}>
            MARKEB OVERSEAS FZE
            </h1>
            <p className={css.welcome}>
            WELCOME
            </p>
            <p className={css.other}>
            WE CAN DO BETTER THAN OTHERS
            </p>
          </div>
          <Link
            className={css.link}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500} />
        </div>
        <Contact/>
        <GoogleMaps/>
        <ContactUs/>
        <Footer/>
      </div>

    )
}

export default Home