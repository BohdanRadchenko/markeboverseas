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
    const header = document.querySelector(`.${css.link}`);
    if(window.pageYOffset > 200){
      header.className = `${css.link} ${css.none}`
    } else{
      header.className = `${css.link}`
    }
  })

    return (
      <div>
        <div className={css.parallaxWrapper}>
          <Header/>
          <Link
            className={css.link}
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
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