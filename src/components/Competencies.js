import c1 from '../img/competency-1.svg'
import c2 from '../img/competency-2.svg'
import c3 from '../img/competency-3.svg'
import c4 from '../img/competency-4.svg'
import c5 from '../img/competency-5.svg'
import c6 from '../img/competency-6.svg'
import c7 from '../img/competency-7.svg'
import c8 from '../img/competency-8.svg'

const Competencies = ()=>{
    return (
    <section className="competencies">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>
              13 лет совершенствуем <br/> компетенции в Durpal <br/> поддержке!
            </h2>
            <div className="competencies-top-text">
              Разрабатываем и оптимизируем модули, расширяем <br/> функциональность сайтов, обновляем дизайн
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c1} alt="Компетенция-1" />
            </div>
            <div className="text">
              Добавление <br/> информации на сайт,<br/> создание новых <br/> разделов
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c2} alt="Компетенция-2" />
            </div>
            <div className="text">
              Разработка <br/> и оптимизация <br/> модулей сайта
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c3} alt="Компетенция-3" />
            </div>
            <div className="text">
              Интеграция с CRM, <br/> 1C, платежными <br/> системами, любыми <br/> веб-сервисами
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c4} alt="Компетенция-4" />
            </div>
            <div className="text">
              Любые доработки <br/> функционала <br/> и дизайна
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c5} alt="Компетенция-5" />
            </div>
            <div className="text">
              Аудит и мониторинг <br/> безопасности Drupal <br/> сайтов
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c6} alt="Компетенция-6" />
            </div>
            <div className="text">
              Миграция, импорт <br/> контента и апгрейд <br/> Drupal
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c7} alt="Компетенция-7" />
            </div>
            <div className="text">
              Оптимизация <br/> и ускорение <br/> Drupal-сайтов
            </div>
          </div>
          <div className="col-6 col-md-3 competency-unit">
            <div className="competency-pic">
              <img src={c8} alt="Компетенция-8" />
            </div>
            <div className="text">
              Веб-маркетинг, <br/> консультации <br/> и работы по SEO
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default Competencies;