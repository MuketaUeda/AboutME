import { useEffect, useState } from "react";

// StarBackground Component - Creates an animated cosmic background with stars and meteors
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Initialize and handle window resize for responsive star count
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate stars based on screen area (1 star per 10,000 pixels)
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // 1-4px
        x: Math.random() * 100, // 0-100%
        y: Math.random() * 100, // 0-100%
        opacity: Math.random() * 0.5 + 0.5, // 0.5-1
        animationDuration: Math.random() * 4 + 2, // 2-6s
      });
    }

    setStars(newStars);
  };

  // Generate 4 meteors with random properties
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 1, // 1-2
        x: Math.random() * 100, // 0-100%
        y: Math.random() * 20, // Top 20% of screen
        delay: Math.random() * 15, // 0-15s delay
        animationDuration: Math.random() * 4 + 7, // 7-11s duration
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars with twinkling animation */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            position: "absolute",
          }}
        />
      ))}

      {/* Meteors with shooting star animation */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px", // 50-100px
            height: meteor.size * 2 + "px", // 2-4px
            left: meteor.x + "%",
            top: meteor.y + "%",
            opacity: 0, // Start invisible to avoid showing before animation
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};
