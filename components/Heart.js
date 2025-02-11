import React, { useEffect, useState } from "react";

const Heart = ({ size, left, bgColor, time, additionalLeft }) => (
  <>
    <div
      className="heart"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        background: `rgba(255,${bgColor - 25},${bgColor},1)`,
        animation: `love ${time}s ease`,
      }}
    ></div>
    <div
      className="heart"
      style={{
        width: `${size - 10}px`,
        height: `${size - 10}px`,
        left: `${left + additionalLeft}%`,
        background: `rgba(255,${bgColor - 25},${bgColor + 25},1)`,
        animation: `love ${time + 5}s ease`,
      }}
    ></div>
  </>
);

const HeartAnimation = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const r_num = Math.floor(Math.random() * 40) + 1;
      const r_size = Math.floor(Math.random() * 65) + 10;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 5) + 5;

      setHearts((prevHearts) => [
        ...prevHearts,
        {
          size: r_size,
          left: r_left,
          bgColor: r_bg,
          time: r_time,
          additionalLeft: r_num,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHearts((prevHearts) => {
      return prevHearts.filter((heart) => heart.size < 150);
    });
  }, [hearts]);

  return (
    <div className="bg_heart">
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          size={heart.size}
          left={heart.left}
          bgColor={heart.bgColor}
          time={heart.time}
          additionalLeft={heart.additionalLeft}
        />
      ))}
    </div>
  );
};

export default HeartAnimation;
