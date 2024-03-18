import React, { useState, useEffect } from 'react';
import './index.css'; 

const MeteorShower = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const createMeteors = () => {
      const newMeteors = [];
      for (let i = 0; i < 20; i++) { // Adjust number of meteors for density
        const meteor = {
          id: i,
          x: Math.random() * window.innerWidth, // Random starting X position
          y: Math.random() * window.innerHeight * -0.5, // Start above viewport
          dx: Math.random() * -5 - 2, // Random horizontal speed (negative for leftward movement)
          dy: Math.random() * 5 + 2, // Random vertical speed
          opacity: Math.random() * 0.5 + 0.5, // Random opacity (0.5 to 1)
          size: Math.random() * 10 + 5, // Random size (5 to 15px)
        //   color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`, // Random color
        color:"#ffffff"
        };
        newMeteors.push(meteor);
      }
      setMeteors(newMeteors);
    };

    createMeteors();

    const intervalId = setInterval(() => {
      setMeteors((prevMeteors) =>
        prevMeteors.map((meteor) => {
          meteor.x += meteor.dx;
          meteor.y += meteor.dy;

          // Handle meteor movement out of bounds
          if (meteor.y > window.innerHeight) {
            meteor.y = Math.random() * window.innerHeight * -0.5;
            meteor.x = Math.random() * window.innerWidth;
          }

          return meteor;
        })
      );
    }, 100); // Adjust interval for animation speed

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="meteor-shower">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.x}px`,
            top: `${meteor.y}px`,
            opacity: meteor.opacity,
            width: '7px',
            height: '10px',
            backgroundColor: meteor.color,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;
