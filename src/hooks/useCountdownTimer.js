import { useState, useEffect } from "react";

// Function to calculate the time remaining
function calculateTimeRemaining(endTime) {
  const currentTime = new Date();
  const timeDifference = new Date(endTime) - currentTime;

  if (timeDifference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}

export function useCountdownTimer(endTime) {
  const [timeRemaining, setTimeRemaining] = useState({
    // Initialize with zeros
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(endTime);
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [endTime]);

  return timeRemaining;
}
