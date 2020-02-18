import React, {useState} from "react";

import css from './ContactUs.module.css'


const ContactUs = () => {
  const defaultForm = {
    name: '', email: '', text : ''
  };
  const [form, setForm] = useState(defaultForm);

  const changeHandler = e => {
    if (e.target.name === 'positions_id') {
      setForm({...form, [e.target.name]: Number(e.target.value)})
    } else (
      setForm({...form, [e.target.name]: e.target.value})
    )
  };

  const submitHandler = e => {
    e.preventDefault();
    setForm(defaultForm);
  };

  return (
    <div className={css.parallaxWrapper}>
      <div className={css.container}>
        <h1 className={css.title}>
          Contact Us
        </h1>
        <p className={css.subtitle}>
          Feel free to drop us a line.
        </p>

        <form className={css.form} onSubmit={e => submitHandler(e)}>
          <input className={css.input}
                 required
                 value={form.name}
                 name='name'
                 onChange={e => changeHandler(e)}
                 minLength="2"
                 maxLength="60"
                 placeholder="Your name"
                 id="name"
                 type="text"/>
          <label className={css.labelValid} htmlFor="name">
            Enter valid Name
          </label>
          <input
            className={css.input}
                 required
                 value={form.email}
                 name='email'
                 onChange={e => changeHandler(e)}
                 minLength="2"
                 maxLength="100"
                 placeholder="Your email"
                 id="email"
                 type="email"/>
          <label className={css.labelValid} htmlFor="email">
            Enter valid Email
          </label>

          <textarea
            className={`${css.input} ${css.text}`}
            required
            value={form.text}
            name='text'
            onChange={e => changeHandler(e)}
            id="text"
            rows="4"
            placeholder='Write Something'>
          </textarea>

          <button type="submit" className={css.button}>Say Hello</button>
        </form>
      </div>
    </div>
  )
}
export default ContactUs