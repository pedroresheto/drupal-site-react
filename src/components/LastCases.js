

const LastCases = ()=>{
    return(
        <section className="container last-cases">
        <h2>
          Последние кейсы
        </h2>
        <div className="last-cases-table">
          <a className="case-block" href="">
            <div className="case-pic" id="case1"></div>
            <h3>
              Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!
            </h3>
            <div className="case-post-date">04.05.2020</div>
            <div className="case-text">Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...
            </div>
          </a>
          <a className="case-block fullscreen-case" href="">
            <div className="case-pic" id="case2"></div>
            <h3>
              Использование отчетов Ecommerce в Яндекс.Метрике
            </h3>
          </a>
          <a className="case-block fullscreen-case" href="">
            <div className="case-pic" id="case3"></div>
            <h3>
              Повышение конверсии страницы с формой заявки с применением AB-тестирования
            </h3>
            <div className="case-post-date">24.01.2020</div>
          </a>
          <a className="case-block fullscreen-case" href="">
            <div className="case-pic" id="case4"></div>
            <h3>
              Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%
            </h3>
            <div className="case-post-date">23.09.2019</div>
          </a>
          <a className="case-block" href="">
            <div className="case-pic" id="case5"></div>
            <h3>
              Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1C: Предприятие, МойСклад, Класс365
            </h3>
            <div className="case-post-date">22.08.2019</div>
            <div className="case-text">Опубликован <span className="case-href"> релиз модуля...</span></div>
          </a>
        </div>
      </section>
    )
}

export default LastCases;