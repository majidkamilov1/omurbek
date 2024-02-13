import React, { useEffect, useState } from "react";
import Lesson from "./Lesson";
import axios from "axios";

const StudyDiscipline = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://omurbek.pythonanywhere.com/api/v1/startendtime/"
        );
        const data = await response.data;
        setData(data?.results);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    }

    fetchData();
  }, []);
  return (
    <section className="StudyDiscipline">
      <div className="container">
        <h3 className="StudyDiscipline__text">Окуу дициплинасы</h3>
        <table className="StudyDiscipline__table">
          <tbody>
            <tr>
              <th className="time">Время</th>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
              <th>СБ</th>
            </tr>

            {data?.map((item) => (
              <Lesson
                key={Math.random()}
                time={`${item.start} - ${item.end}`}
                lessons={item.lessons}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudyDiscipline;
