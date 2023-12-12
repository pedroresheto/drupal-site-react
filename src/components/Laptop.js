import laptop from '../img/laptop.png'

const Laptop = ()=>{
    return(
        <section className="laptop">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 block-redlines">
            <div className="row redline-text-blocks">
              <div className="col-12">
                <h2>
                  Экспертиза в Drupal,<br/> опыт 14 лет!
                </h2>
              </div>
              <div className="col-md-6 col-12 redline-box">
                <div className="redline">
                  <div className="redline-text">
                    Только системный подход - контроль версий, резервирование и тестирование!
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 redline-box">
                <div className="redline">
                  <div className="redline-text">
                    Только Drupal сайты, не берем на поддержку сайты других CMS!
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 redline-box">
                <div className="redline">
                  <div className="redline-text">
                    Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем
                    <a href="">свои модули Drupal</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 redline-box">
                <div className="redline">
                  <div className="redline-text">
                    Поддерживаем сайты на Drupal 5, 6, 7 and 8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-pic">
        <img src={laptop} alt="Ноутбук" />
      </div>
    </section>
    )
}

export default Laptop