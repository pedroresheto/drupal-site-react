import cup from '../img/cup.png'

const Header = ()=>{
    return(
        <div>
    <div id="react-block"></div>
    <header>
      <div id="video-block">
        <div id="video-filter"></div>
        <video className="video-background"
          src="https://res.cloudinary.com/dpyzh619e/video/upload/v1606770179/video_bjr0b7.mp4" playsInline
          autoPlay loop preload="auto" muted>
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="bars-title">
              Поддержка<br/>сайтов на Drupal
            </h1>
            <div class="sub-title">
              Сопровождение и поддержка сайтов<br/>
              на CMS Drupal любых версий и запущенности
            </div>
            <a href="#rates" className='rate-button'>ТАРИФЫ</a>
          </div>
          <div className="col-md-6">
            <div className="row redline-text-blocks">
              <div className="col-sm-4 col-6 redline-box">
                <div className="redline">
                  <div className="redline-title">
                    #1
                    <img src={cup} alt="#1" />
                  </div>
                  <div className="redline-text">
                    Drupal-разработчик <br/> в России по версии <br/> Рейтинга Рунета
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-6 redline-box">
                <div className="redline">
                  <div className="redline-title">3+</div>
                  <div className="redline-text">
                    средний опыт <br/> специалистов более<br/> 3 лет
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 redline-box">
                <div class="redline">
                  <div class="redline-title">14</div>
                  <div class="redline-text">
                    лет опыта в сфере Drupal
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 redline-box">
                <div class="redline">
                  <div class="redline-title">50+</div>
                  <div class="redline-text">
                    модулей и тем <br/> в формате DrupalGive
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 redline-box">
                <div class="redline">
                  <div class="redline-title">90 000</div>
                  <div class="redline-text">
                    часов поддержки <br/> сайтов на Drupal
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 redline-box">
                <div class="redline">
                  <div class="redline-title">300+</div>
                  <div class="redline-text">
                    Проектов <br/> на поддержке
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
    );
}

export default Header;