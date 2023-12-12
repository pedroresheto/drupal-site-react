import React from 'react'
import Slider from 'react-slick'
import sl1 from '../img/logo_0.png'
import sl2 from '../img/kubsu.png'
import sl3 from '../img/rosatom.png'
import sl4 from '../img/logo_2.png'
import sl5 from '../img//nashagazeta_ch.png'
import sl6 from '../img/cableman_ru.png'
import sl7 from '../img/logo-estee.png'
import sl8 from '../img/lpcma_rus_v4.jpg'

const WorkWithUs = ()=>{
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 3500,
    responsive: [
      {
          breakpoint: 1024,
          settings: {slidesToShow: 3}
      },
      {
          breakpoint:600, 
          settings: {slidesToShow: 2}
      }
  ]
  }
    return(
        <section className="work-with-us">
        <h2>С нами работают</h2>
        <div className="work-with-us-title">
          Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои <br/> сайты. Мы делаем всё, чтобы
          наше сотрудничество было долгим
        </div>
        <div className="work-with-us-slider-1" id="wwu-slider-1">
          <Slider {...settings}>
          <div className="work-with-us-slide">
            <div><img src={sl1} alt="Ciel" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl2} alt="Kubsu" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl3} alt="Росатом" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl4} alt="Serebro.Ag" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl1} alt="Ciel" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl2} alt="Kubsu" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl3} alt="Росатом" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl4} alt="Serebro.Ag" /></div>
          </div>
          </Slider>
        </div>
        <div className="work-with-us-slider-2" id="wwu-slider-2">
          <Slider {...settings}>
          <div className="work-with-us-slide">
            <div><img src={sl5} alt="Наша газета" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl6} alt="Кабельщик" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl7} alt="Estee" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl8} alt="Лаборатория" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl5} alt="Наша газета" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl6} alt="Кабельщик" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl7} alt="Estee" /></div>
          </div>
          <div className="work-with-us-slide">
            <div><img src={sl8} alt="Лаборатория" /></div>
          </div>
          </Slider>
        </div>
      </section>
    )
}

export default WorkWithUs