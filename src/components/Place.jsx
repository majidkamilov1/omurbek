import React from "react";
import PlaceWork from "./PlaceWork";

const Place = () => {
  return (
    <section className="place">
      <div className="container">
        <h3 className="place__text">Опыт работы</h3>
        <div className="place__works">
          <PlaceWork />
          <PlaceWork />
          <PlaceWork />
          <PlaceWork />
        </div>
      </div>
    </section>
  );
};

export default Place;
