import React from 'react'
import t1 from '../img/competency-20.png'
import t2 from '../img/competency-21.png'
import t3 from '../img/competency-22.png'

const QuickTasks = ()=>{
    return(
        <section className="quick-tasks">
        <div className="container">
          <div className="row">
            <div className="col-12 quick-tasks-title">
              <h2>
                Наши профессиональные разработчики <br/> выполняют быстро любые задачи
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 competency-unit">
              <div className="text">
                <div className="competency-pic">
                  <img src={t1} alt="Task-1" />
                </div>
                <div className="time">от 1ч</div>
                <div>Настройка события GA<br/>в интернет-магазине</div>
              </div>
            </div>
            <div className="col-12 col-md-4 competency-unit">
              <div className="text">
                <div className="competency-pic">
                  <img src={t2} alt="Task-2" />
                </div>
                <div className="time">от 20ч</div>
                <div>Разработка мобильной<br/>версии сайта</div>
              </div>
            </div>
            <div className="col-12 col-md-4 competency-unit">
              <div className="text">
                <div className="competency-pic">
                  <img src={t3} alt="Task-3" />
                </div>
                <div className="time">от 8ч</div>
                <div>Интеграция <br/> модуля оплаты</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default QuickTasks