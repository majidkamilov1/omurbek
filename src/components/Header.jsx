import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__item">
          <div className="header__item--logo">
            <img src="/svg/logo.svg" alt="" />
          </div>
          <nav className="header__item--nav">
            <ul>
              <li>
                <NavLink to="/">Башкы бет</NavLink>
              </li>
              <li>
                <NavLink to="discipline">Окуу дициплинасы</NavLink>
              </li>
              <li>
                <NavLink to="Scientific-works">Илимий эмгектер</NavLink>
              </li>
              <li>
                <NavLink to="/Electronic-resources">
                  Электрондук ресурстар
                </NavLink>
              </li>
              <li>
                <NavLink to="/Сontacts">Контакты</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__item--menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
