import React from 'react'

import fb from '../img/facebook_icon.png'
import vk from '../img/vk_icon.png'
import yt from '../img/youtube_icon.png'
import tg from '../img/telegram_icon.png'

import { Formik, Form, Field, ErrorMessage } from 'formik';



const Footer = ()=>{
    return(
        <footer className="footer-block">
        <div className="container">
          <div id="footer-phrase">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="connect-wrapper">
                  <div className="connect-title">Оставить заявку на <br/> поддержку сайта </div>
                  <div className="connect-description">Срочно нужна поддержка сайта? Ваша команда не умпевает справиться
                    самостоятельно или предыдущий подрядчик не справился
                    с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
                  </div>
                  <div className="connect-contacts">
                    <ul>
                      <li className="contacts-phone"><a href="">8 800 222-26-73</a></li>
                      <li className="contacts-email"><a href="">info@drupal-coder.ru</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-block">
                <Formik
       initialValues={{ email: '', name: '', number: '',  }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'пожалуйста, заполните email';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.number) {
            errors.number = 'пожалуйста, заполните ваш номер'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form id="footer-form">
          <Field name='name' id="footer-name" type="text" class="footer-block-input name name-input" placeholder="Ваше имя"/>
          <Field name="number"  id="footer-number" type="text" class="footer-block-input number number-input" placeholder="Телефон"/>
          <ErrorMessage name="number" component="div" />
          <Field name="email"  id="footer-email" type="email" class="footer-block-input email email-input" placeholder="E-mail"/>
          <ErrorMessage name="email" component="div" />
          <textarea name="message" id="footer-message" placeholder="Ваш комментарий"
                      className="footer-block-input message message-footer-input"></textarea>
          <label for="footer-policy-2" className="chb-block">
                      <input name="footer-policy-2" type="checkbox" className="chb" id="footer-policy-2" />
                      <span className="chb-place"></span>
                      <span>
                        <span className="footer-checkbox-text">Отправляя заявку, я даю согласие на
                          <a href="">обработку своих персональных данных</a>.
                        </span>
                      </span>
                    </label>
           <button type="submit" disabled={isSubmitting} id="sendButton" class="footer-contact-button">
             свяжитесь с нами
           </button>
         </Form>
       )}
     </Formik>
                </div>
              </div>
            </div>
          </div>
          <div id="socialnetwork-block-wrapper">
            <div className="socialnetwork-block">
              <div className="footer-links-wrapper">
                <ul className="footer-links">
                  <li className="footer-pic facebook"><a href=""><img src={fb} alt="Facebook" /></a>
                  </li>
                  <li className="footer-pic vkontakte"><a href=""><img src={vk} alt="VK" /></a></li>
                  <li className="footer-pic telegram"><a href=""><img src={tg} alt="Telegram" /></a>
                  </li>
                  <li className="footer-pic youtube"><a href=""><img src={yt} alt="Youtube" /></a></li>
                </ul>
              </div>
              <p>Проект ООО &#171; Инитлаб &#187;, г.Краснодар, Россия.
                <br/>
                Drupal является зарегестрированной торговой маркой Dries Buytaert.

              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;