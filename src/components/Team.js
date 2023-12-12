import t1 from '../img/IMG_2472_0.jpg'
import t2 from '../img/IMG_2539_0.jpg'
import t3 from '../img/IMG_2474_1.jpg'
import t4 from '../img/IMG_2522_0.jpg'
import t5 from '../img/IMG_9971_16.jpg'

const Team = ()=>{
    return(
        <section className="team">
        <div className="container">
          <div className="team-unit">
            <div className="row">
              <h2 className="col-12">
                Команда
              </h2>
              <div className="col-6 col-sm-6 col-md-4 members-unit">
                <div className="members-panel">
                  <div className="members-picture">
                    <img src={t1} alt="Фото члена команды" width="280" height="280"
                      className="pic-adaptive" />
                  </div>
                  <div className="members-name">Сергей Синица</div>
                  <div className="members-function">Руководитель отдела веб-разработки, канд.техн. наук, заместитель
                    директора</div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 members-unit">
                <div className="members-panel">
                  <div className="members-picture">
                    
                    <img src={t2} alt="Фото члена команды" width="280" height="280"
                      className="pic-adaptive" />
                    
                  </div>
                  <div className="members-name">Роман Агабеков</div>
                  <div className="members-function">Руководитель отдела DevOPS, директор</div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 members-unit">
                <div className="members-panel">
                  <div className="members-picture">
                    <img src={t3} alt="Фото члена команды" width="280" height="280"
                      className="pic-adaptive" />
                  </div>
                  <div className="members-name">Алексей Синица</div>
                  <div className="members-function">Руководитель отдела поддержки сайтов</div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 members-unit">
                <div className="members-panel">
                  <div className="members-picture">
                    <img src={t4} alt="Фото члена команды" width="280" height="280"
                      className="pic-adaptive" />
                  </div>
                  <div className="members-name">Дарья Бочкарёва</div>
                  <div className="members-function">Руководитель отдела продвижения, контекстной рекламы и контент-поддержки
                    сайтов</div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 members-unit">
                <div className="members-panel">
                  <div className="members-picture">
                    <img src={t5} alt="Фото члена команды" width="280" height="280"
                      className="pic-adaptive" />
                  </div>
                  <div className="members-name">Ирина Торкунова</div>
                  <div className="members-function">Менеджер по работе с клиентами</div>
                </div>
              </div>
            </div>
            <div className="all-team"><a href="">ВСЯ КОМАНДА</a></div>
          </div>
        </div>
      </section>
    )
}

export default Team;