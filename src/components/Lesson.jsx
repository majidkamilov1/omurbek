import React from "react";

const Lesson = ({ time, lessons }) => {
  const Monday = lessons.find((lesson) => lesson.day_of_week == "monday");
  const Tuesday = lessons.find((lesson) => lesson.day_of_week == "tuesday");
  const Wednesday = lessons.find((lesson) => lesson.day_of_week == "wednesday");
  const Thursday = lessons.find((lesson) => lesson.day_of_week == "thursday");
  const Friday = lessons.find((lesson) => lesson.day_of_week == "friday");
  const Saturday = lessons.find((lesson) => lesson.day_of_week == "saturday");
  return (
    <tr>
      <td className="time">{time}</td>

      <td>
        {Monday ? (
          <>
            <h5>{Monday.science}</h5>
            <span>{Monday.group}</span>
          </>
        ) : (
          <span>не урока</span>
        )}
      </td>
      <td>
        {Tuesday ? (
          <>
            <h5>{Tuesday.science}</h5>
            <span>{Tuesday.group}</span>
          </>
        ) : (
          <span>не урока</span>
        )}
      </td>
      <td>
        {Wednesday ? (
          <>
            <h5>{Wednesday.science}</h5>
            <span>{Wednesday.group}</span>
          </>
        ) : (
          <span>не урока</span>
        )}
      </td>
      <td>
        {Thursday ? (
          <>
            <h5>{Thursday.science}</h5>
            <span>{Thursday.group}</span>
          </>
        ) : (
          <span>не урока</span>
        )}
      </td>
      <td>
        {Friday ? (
          <>
            <h5>{Friday.science}</h5>
            <span>{Friday.group}</span>
          </>
        ) : (
          <span>не урока</span>
        )}
      </td>
      <td>
        {Saturday ? (
          <>
            <h5>{Saturday.science}</h5>
            <span>{Saturday.group}</span>
          </>
        ) : (
          <span>не урока</span>
        )}
      </td>
    </tr>
  );
};

export default Lesson;
