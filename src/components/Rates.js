import { useDispatch } from "react-redux";
import { show } from '../redux/stateSlice'


const Rates = ()=>{
  const dispatch = useDispatch()
    return(
      <section className="rates" id="rates">
      <h2>
        Тарифы
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 order-1 rate-col">
            <div className="rate-unit">
              <div className="rate-name">Стартовый</div>
              <ul>
                <li>Консультации и работы по SEO</li>
                <li>Услуги дизайнера</li>
                <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                <li>Предоплата от 6 000 рублей в месяц</li>
              </ul>
              <button id="contact-button-1" className="contact-button" onClick={()=> dispatch(show())}>СВЯЖИТЕСЬ С НАМИ!</button>
            </div>
          </div>
          <div className="col-12 col-md-4 order-3 rate-col">
            <div className="rate-unit">
              <div className="rate-name">VIP</div>
              <ul>
                <li>Консультации и работы по SEO</li>
                <li>Услуги дизайнера</li>
                <li>Максимальное время реакции - в день обращения</li>
                <li>Неиспользованные оплаченные часы не переносятся</li>
                <li>Предоплата от 270 000 рублей в месяц</li>
              </ul>
              <button id="contact-button-2" className="contact-button" onClick={()=> dispatch(show())}>СВЯЖИТЕСЬ С НАМИ!</button>
            </div>
          </div>
          
          <div className="col-12 col-md-4 order-2 rate-col main-rate">
            <div className="rate-unit">
              <div className="rate-name">Бизнес</div>
              <ul>
                <li>Консультации и работы по SEO</li>
                <li>Услуги дизайнера</li>
                <li>Высокое время реакции - до 2 рабочих дней</li>
                <li>Неиспользованные оплаченные часы не переносятся</li>
                <li>Предоплата от 30 000 рублей в месяц</li>
              </ul>
              <button id="contact-button-3" className="contact-button" onClick={()=> dispatch(show())}>СВЯЖИТЕСЬ С НАМИ!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="individual-rate">
        Вам не подходят наши тарифы? Оставьте заявку и мы <br/> предложим вам индивидуальные условия!<br/>
        <a id="contact-button-4" className="call-form" href="">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ
        </a>
      </div>
    </section>
    )
}

export default Rates;