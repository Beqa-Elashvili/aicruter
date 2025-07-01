"use client";

import { useEffect, useRef, useState } from "react";

const formatTime = (seconds: number) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const Timer = ({ isRunning }: { isRunning: boolean }) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (isRunning) {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return <span>{formatTime(seconds)}</span>;
};

export default Timer;
