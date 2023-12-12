import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CallBackForm = ()=>{
    const [isSubmit, setIsSubmit] = useState(true)
    return(
        <div>
            {isSubmit ? <Formik
       initialValues={{ email: '', name: '', number: '', }}
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
           setIsSubmit(false)
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form id="footer-form">
            <Field name='name' id="footer-name" type="text" class="footer-block-input name name-input" placeholder="Ваше имя"/>
           <Field name="email"  id="footer-email" type="email" class="footer-block-input email email-input" placeholder="E-mail"/>
           <ErrorMessage name="email" component="div" />
           <Field name="number"  id="footer-number" type="text" class="footer-block-input number number-input" placeholder="Телефон"/>
           <ErrorMessage name="number" component="div" />
           <span>
                <span class="footer-checkbox-text">Отправляя заявку, я даю согласие на
                    <a href="">обработку своих персональных данных</a>.
                </span>
            </span>
           <button type="submit" disabled={isSubmitting} id="sendButton" class="footer-contact-button">
             свяжитесь с нами
           </button>
         </Form>
       )}
     </Formik> : <h3 className='thanks'>Спасибо, скоро свяжемся с вами</h3>}
        </div>
    )
}

export default CallBackForm;