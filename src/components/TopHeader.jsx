import React from "react";

const TopHeader = () => {
  return (
    <section className="topheader ">
      <div className="container">
        <div className="topheader__item">
          <ul className="topheader__item--content">
            <li>
              <img src="svg\topHeader__icon.svg" alt="" />
              <a href=""> Преподавателям </a>
            </li>
            <li>
              <img src="svg\topHeader__icon.svg" alt="" />
              <a href=""> Преподавателям </a>
            </li>
            <li>
              <img src="svg\topHeader__icon.svg" alt="" />
              <a href=""> Преподавателям </a>
            </li>
          </ul>
          <div className="topheader__item--buttons">
            <button>KG</button>
            <button className="line">EN</button>
            <button>TR</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
