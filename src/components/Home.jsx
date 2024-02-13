import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__item">
          <div className="home__item--text">
            <h1>Кожобеков Кудайберди Гапаралиевич</h1>
            <span>30 декабря 1975 г</span>
            <p>
              ОшМУну классикалык университеттен - дүйнөлүк деңгээлдеги изилдөөчү
              жана инновациялык университетке трансформациялоо.ОшМУну
              классикалык университеттен - дүйнөлүк деңгээлдеги изилдөөчү жана
              инновациялык университетке трансформациялоо.
            </p>
          </div>
          <div className="home__item--img">
            <img src="/img/home__img.png" alt="" />
            <div className="home__item--img__position">
              <img src="/svg/home__position.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
