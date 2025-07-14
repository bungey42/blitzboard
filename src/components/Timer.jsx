
import React, { useState, useEffect } from "react";

export default function Timer() {
  const targetTime = new Date();
  targetTime.setHours(16, 30, 0, 0);

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetTime - now;
      if (diff <= 0) {
        setTimeLeft("Time's Up!");
        clearInterval(interval);
      } else {
        const hrs = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const mins = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const secs = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        setTimeLeft(`${hrs}:${mins}:${secs}`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="text-xl font-mono">{timeLeft}</div>;
}
