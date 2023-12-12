import React, { useState } from 'react'
import drupalLogo from '../img/drupal-coder.png'

const Navbar = ()=>{
  const [state, setState] = useState(false)
    return(
        <div className="navbar-absolute">
    <div className="container-md">
      <nav className="navbar navbar-expand-md">
        <div className={state? "navbar-collapse collapse active": "navbar-collapse collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navigation-item">
              <a className="nav-link" href="#">ПОДДЕРЖКА DRUPAL</a>
            </li>
            <li className="navigation-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                АДМИНИСТРИРОВАНИЕ
              </a>
              <div className="dropdown-menu dropdown-menu-1">
                <a className="dropdown-item" href="#">МИГРАЦИЯ</a>
                <a className="dropdown-item" href="#">БЭКАПЫ</a>
                <a className="dropdown-item" href="#">АУДИТ БЕЗОПАСНОСТИ</a>
                <a className="dropdown-item" href="#">ОПТИМИЗАЦИЯ СКОРОСТИ</a>
                <a className="dropdown-item" href="#">ПЕРЕЕЗД НА HTTPS</a>
              </div>
            </li>
            <li className="navigation-item">
              <a className="nav-link" href="#">ПРОДВИЖЕНИЕ</a>
            </li>
            <li className="navigation-item">
              <a className="nav-link" href="#">РЕКЛАМА</a>
            </li>
            <li className="navigation-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">О НАС</a>
              <div className="dropdown-menu dropdown-menu-2">
                <a className="dropdown-item" href="#">КОМАНДА</a>
                <a className="dropdown-item" href="#">DRUPALGIVE</a>
                <a className="dropdown-item" href="#">БЛОГ</a>
                <a className="dropdown-item" href="#">КУРСЫ DRUPAL</a>
              </div>
            </li>
            <li className="navigation-item">
              <a className="nav-link" href="#">ПРОЕКТЫ</a>
            </li>
            <li className="navigation-item">
              <a className="nav-link" href="#">КОНТАКТЫ</a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="#">
          <img className="nav-icon" src={drupalLogo} alt="navigation" />
        </a>
        <button className="navbar-toggler" onClick={()=> setState(!state)}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
      </div>
    )
}

export default Navbar;