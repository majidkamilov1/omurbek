import React from "react";
import AchievementCard from "./AchievementCard";

const Achievement = () => {
  return (
    <section className="achievement">
      <div className="container">
        <div className="achievement__text">
          <h2>Достижение</h2>
          <p>We offer some great deals so you can save money:</p>
        </div>
        <div className="achievement__cards">
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          
        </div>
      </div>
    </section>
  );
};

export default Achievement;
