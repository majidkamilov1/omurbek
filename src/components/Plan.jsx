import React from "react";
import List from "./List";

const Plan = () => {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan__text">
          <h3>Учебный план </h3>
          <p>
            Как сформировать учебный план Порядок формирования учебного плана
            можно обозначить в следующей последовательности:
          </p>
        </div>
        <table className="plan__lists">
          <tbody>
            <tr>
              <th className="num">№</th>
              <th className="name">Название дисциплины</th>
              <th className="btn">Уч.план</th>
            </tr>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Plan;
