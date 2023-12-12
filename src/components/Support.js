import s1 from '../img/support1.svg'
import s2 from '../img/support2.svg'
import s3 from '../img/support3.svg'
import s4 from '../img/support4.png'
import s5 from '../img/support5.svg'
import s6 from '../img/support6.svg'
import s7 from '../img/support7.svg'
import s8 from '../img/support8.svg'

const Support = ()=>{
    return(
        <section className="support">
      <h2>
        Поддержка<br/>от Drupal-coder
      </h2>
      <div className="container">
        <div className="row mx-0">
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">01.</div>
              <div className="support-title">Постановка задачи по Email</div>
              <div className="text">
                Удобная и привычная модель постановки задач, при которой задачи фокусируются и никогда не теряются.
              </div>
              <div className="support-icon">
                <img src={s1} alt="Постановка задачи" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">02.</div>
              <div className="support-title">Система Helpdesk – отчетность, прозрачность</div>
              <div className="text">
                Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.
              </div>
              <div className="support-icon">
                <img src={s2} alt="Система Helpdesk" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">03.</div>
              <div className="support-title">Расширенная техническая поддержка</div>
              <div className="text">
                Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.
              </div>
              <div className="support-icon">
                <img src={s3} alt="Тех. поддержка" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">04.</div>
              <div className="support-title">Персональный менеджер проекта</div>
              <div className="text">
                Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые
                вопросы.
              </div>
              <div className="support-icon">
                <img src={s4} alt="Персональный менеджер проекта" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">05.</div>
              <div className="support-title">Удобные способы оплаты</div>
              <div className="text">
                Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
              </div>
              <div className="support-icon">
                <img src={s5} alt="Удобные способы оплаты" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">06.</div>
              <div className="support-title">Работаем с SLA и NDA</div>
              <div className="text">
                Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
              </div>
              <div className="support-icon">
                <img src={s6} alt="Работаем с SLA и NDA" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">07.</div>
              <div className="support-title">Штатные специалисты</div>
              <div className="text">
                Надежные штатные специалисты, никаких фрилансеров.
              </div>
              <div className="support-icon">
                <img src={s7} alt="Штатные специалисты" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 support-item">
            <div className="support-block">
              <div className="support-digit">08.</div>
              <div className="support-title">Удобные каналы связи</div>
              <div className="text">
                Консультации по телефону, скайпу, в месенджерах .
              </div>
              <div className="support-icon">
                <img src={s8} alt="Удобные каналы связи" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Support;